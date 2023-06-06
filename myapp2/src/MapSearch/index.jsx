import React, { useState, useEffect, useRef } from "react";
import { Select, message, Button } from "antd";
import { SearchOutlined, UpOutlined, DownOutlined } from "@ant-design/icons";
import { request } from "../services/services";
import coordtransform from "coordtransform";
import * as L from "leaflet";
import "./index.css";

export default function Poi(props) {
  const { map } = props;
  const selectRef = useRef(); //select


  const [timer, setTimer] = useState(); 
  const [input, setInput] = useState(); 
  const [select, setSelect] = useState(); 
  const [showSearchPopup, setShowSearchPopup] = useState(false);
  const [data, setData] = useState([]); //api
  const [group, setGroup] = useState(null); 

  const format = (list) => {
    return list?.map((item) => {
      return {
        value: item.id, //id

        label: (
          <div
            className="searchPopupText"
            title={item.address}

            onMouseEnter={(e) => {

              if (!select) textPopup(item, e);
            }}
          >
            <span className="left">{item.name}</span>&nbsp;
            <span className="right">{item.address}</span>
          </div>
        ),
        ...item,
      };
    });
  };

  //请求高德api
  async function send(value) {
      const { data: res } = await request({
      tk: "bab96063b30971749b3c440313e69ac0", //key
      searchWord: value,
      searchType: 1,
      needSubInfo: false,
      needAll: false,
      needPolygon: true,
      needPre: true
    }).catch((e) => {
      message.error(e);
    });
    if (res.infocode === "10000" && res.pois?.length) {
      setData(res.pois);
      setShowSearchPopup(true);
    } else {
      message.error("搜索地址出错:", res.info);
    }
  }


  const icon = () => {
    return L.divIcon({
      className: "my-div-icon poi-icon", 
      iconSize: [30, 30],
      iconAnchor: [15, 30], 
    });
  };

  const popup = (item) =>
    `
  <div  style="color:#66c9ff;font-size:16px">${item.address}</div>
  <div>: ${item.name}</div>
  <div>: ${item.type}</div>
`;


  const addMarker = (
    map,
    arr,
    icon,
    popup = () => { },
    markList,
    setMarkList,
    setModalData = () => { },
    setModalOpen = () => { }
  ) => {
    let list = arr.map((item, index) => {
      const [longitude, latitude] = coordtransform.gcj02towgs84(
        ...item.location?.split(",")
      );


      return new L.marker([latitude + "", longitude + ""], {
        icon: icon(item, index),
      })
        .bindPopup(popup(item), {
          
          closeButton: false,
          keepInView: false, 
          offset: L.point(0, -16), 
        })
        .on("mouseover", function () {
        
          this.openPopup();
        })
        .on("mouseout", function () {
          
          this.closePopup();
        })
        .on("click", function (e) {
        
          setModalData(item);
          setModalOpen(true);
        });
    });

    const group = L.layerGroup(list);
    setMarkList(group);
    map.addLayer(group);
    
    map.setView(map.getCenter());
  };

  
  const clearMarker = () => {
    if (group) {
      group.clearLayers();
      setGroup(null);
    }
  };


  const textPopup = (item) => {
    const [longitude, latitude] = coordtransform.gcj02towgs84(
      ...item.location?.split(",")
    );

    if (latitude && longitude) {
      const p = L.popup({
        closeButton: false,
        autoPanPadding: L.point(400, 150),
        keepInView: false, 
        offset: L.point(0, -16), 
      })
        .setLatLng({ lat: latitude, lng: longitude })
        .setContent(popup(item))
        .openOn(map);
    }
  };

  
  const closePopup = () => map?.closePopup();

  
  const onSelect = (value, item) => {
    if (item) {
      
      setSelect(item);
      textPopup(item);
      setShowSearchPopup(false);
    } else {
      
      setSelect(item);
      textPopup(item);
      setShowSearchPopup(true);
      closePopup();
    }
  };

  
  const onSearch = (value) => {
    setTimer((timer) => {
      if (timer) {
        return clearTimeout(timer);
      }
      return setTimeout(() => send(value), 500);
    });
  };

  
  const onFocus = () => {
    if (data?.length) setShowSearchPopup(true);
  };

  
  useEffect(() => {
    if (!map || !data || !data.length) return;
    clearMarker(); 
    addMarker(map, data, icon, popup, group, setGroup); 
  }, [data, map]);
  // const apiKey = "YOUR_API_KEY";


  return (
    <div className="poi">
      
      {data?.length !== 0 &&
        (showSearchPopup ? (
          <Button
            shape="circle"
            onClick={() => setShowSearchPopup(false)}
            icon={<UpOutlined />}
          ></Button>
        ) : (
          <Button
            shape="circle"
            onClick={() => setShowSearchPopup(true)}
            icon={<DownOutlined />}
          ></Button>
        ))}
      
      <Select
        className="search"
        popupClassName="searchPopup"
        allowClear
        showSearch
        placeholder="placeholder"
        optionFilterProp="children"
        onChange={onSelect}
        onSearch={setInput}
        onFocus={onFocus}
        filterOption={false} 
        options={format(data)}
        suffixIcon={<></>}
        open={showSearchPopup}
        ref={selectRef}
      />
      <Button
        type="primary"
        shape="round"
        onClick={() => onSearch(input)}
        icon={<SearchOutlined />}
      ></Button>
    </div>
  );
}
