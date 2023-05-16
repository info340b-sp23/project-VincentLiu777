import React, { useState, useEffect, useRef } from "react";
import { Select, message, Button } from "antd";
import { SearchOutlined, UpOutlined, DownOutlined } from "@ant-design/icons";
import { request } from "../services/services";
import coordtransform from "coordtransform";
import * as L from "leaflet";
import "./index.css";

export default function Poi(props) {
  const { map } = props;
  const selectRef = useRef(); // Get select component

  // States
  const [timer, setTimer] = useState(); // Debounce
  const [input, setInput] = useState(); // Entered keyword
  const [select, setSelect] = useState(); // Selected item
  const [showSearchPopup, setShowSearchPopup] = useState(false); // Whether to popup dropdown menu
  const [data, setData] = useState([]); // API response results
  const [group, setGroup] = useState(null); // Saved all markers

  // Enter the address list, return the list with jsx description, and add mouse hover event
  const format = (list) => {
    return list?.map((item) => {
      return {
        value: item.id, //id
        // Concatenate name and address
        label: (
          <div
            className="searchPopupText"
            title={item.address}
            // Bind mouse hover event
            onMouseEnter={(e) => {
              // When there is no selection, popup, after selection, no popup
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

  // Request Gaode API
  async function send(value) {
      const { data: res } = await request({
      tk: "bab96063b30971749b3c440313e69ac0", // Gaode key
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
      message.error("Search address error:", res.info);
    }
  }

  // Icon
  const icon = () => {
    return L.divIcon({
      className: "my-div-icon poi-icon", // Set the marker as a background image
      iconSize: [30, 30],
      iconAnchor: [15, 30], // The position of the icon center point, if not configured, the icon will shift when zooming, and the point is not accurate
    });
  };
  // Popup
  const popup = (item) =>
    `
  <div  style="color:#66c9ff;font-size:16px">${item.address}</div>
  <div>Name: ${item.name}</div>
  <div>Type: ${item.type}</div>
`;

  // Add marker
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
      // Convert coordinate system
      const [longitude, latitude] = coordtransform.gcj02towgs84(
        ...item.location?.split(",")
      );

      // Generate marker instance
      return new L.marker([latitude + "", longitude + ""], {
        icon: icon(item, index),
      })
        .bindPopup(popup(item), {
          // Bind popup
          closeButton: false,
          keepInView: false, // It will not be blocked by the boundary when popping up at the boundary
          offset: L.point(0, -16), // Shift upwards, not covering the marker
        })
        .on("mouseover", function () {
          // Mouse hover event
          this.openPopup();
        })
        .on("mouseout", function () {
          // Mouse out event
          this.closePopup();
        })
        .on("click", function (e) {
          // Mouse click event, can popup
          setModalData(item);
          setModalOpen(true);
        });
    });

    const group = L.layerGroup(list);
    setMarkList(group);
    map.addLayer(group);
    // Refresh map object
    map.setView(map.getCenter());
  };

  // Clear markers
  const clearMarker = () => {
    if (group) {
      group.clearLayers();
      setGroup(null);
    }
  };

  // Sidebar mouse hover, popup floating box, Parameter item: the item the mouse is over
  const textPopup = (item) => {
    const [longitude, latitude] = coordtransform.gcj02towgs84(
      ...item.location?.split(",")
    );

    if (latitude && longitude) {
      const p = L.popup({
        closeButton: false,
        autoPanPadding: L.point(400, 150),
        keepInView: false, // It will not be blocked by the boundary when popping up at the boundary
        offset: L.point(0, -16), // Shift upwards, not covering the marker
      })
        .setLatLng({ lat: latitude, lng: longitude })
        .setContent(popup(item))
        .openOn(map);
    }
  };

  // Method to close the popup
  const closePopup = () => map?.closePopup();

  // Selection event
  const onSelect = (value, item) => {
    if (item) {
      // Selected
      setSelect(item);
      textPopup(item);
      setShowSearchPopup(false);
    } else {
      // Clear selection
      setSelect(item);
      textPopup(item);
      setShowSearchPopup(true);
      closePopup();
    }
  };

  // Debounce send request
  const onSearch = (value) => {
    setTimer((timer) => {
      if (timer) {
        return clearTimeout(timer);
      }
      return setTimeout(() => send(value), 500);
    });
  };

  // Focus event
  const onFocus = () => {
    if (data?.length) setShowSearchPopup(true);
  };

  // Listen to res, draw map markers
  useEffect(() => {
    if (!map || !data || !data.length) return;
    clearMarker(); // Call clear method
    addMarker(map, data, icon, popup, group, setGroup); // Call add icon method
  }, [data, map]);

  return (
    <div className="poi">
      {/* Popup dropdown button */}
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
          {/* The central selection component */}
          <Select
            className="search"
            popupClassName="searchPopup"
            allowClear
            showSearch
            placeholder="Search address"
            optionFilterProp="children"
            onChange={onSelect}
            onSearch={setInput}
            onFocus={onFocus}
            filterOption={false} // Do not search based on input, implement search by yourself
            options={format(data)}
            suffixIcon={<></>}
            open={showSearchPopup}
            ref={selectRef}
          />
          {/* Search button */}
          <Button
            type="primary"
            shape="round"
            onClick={() => onSearch(input)}
            icon={<SearchOutlined />}
          ></Button>
        </div>
      );
    }
    