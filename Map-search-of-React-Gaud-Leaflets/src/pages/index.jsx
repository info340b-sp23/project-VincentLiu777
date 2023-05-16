import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  TwitterOutlined,
  FacebookOutlined,
  YoutubeOutlined,
  UserOutlined,
  MailOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Space } from "antd";
import "../App.css";

// 测试数据
import { mapData, footerData } from "../mock";

function Index(props) {
  const navigate = useNavigate();

  useEffect(() => {
    const INIT_SITE = [40.91, -96.63];
    if ("L" in window && mapData.length > 0) {
      const coords = mapData.map((item) => ({
        lls: [item.lat, item.lng],
        anchor: `#coffee_${item.id}`,
      }));
      initMap(INIT_SITE, coords);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 初始化地图
  const initMap = (INIT_SITE, coords) => {
    const map = window.L.map("leaflet").setView(INIT_SITE, 4);
    const marker_ = window.L.marker;

    const markerList = [];
    for (let index = 0; index < coords.length; index++) {
      const { lls = [], anchor } = coords[index] || {};
      markerList.push(marker_(lls, { anchor }).addTo(map));
    }

    const group = window.L.featureGroup([...markerList]).on(
      "click",
      function ({ sourceTarget }) {
        const { options } = sourceTarget || {};
        window.location.hash = options.anchor;
      }
    );
    group.addTo(map);
    window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    const searchControl = window.L.esri.Geocoding.geosearch({
      position: "topright",
      placeholder: "Enter an address or place e.g. 1 York St",
      useMapBounds: false,
      providers: [
        window.L.esri.Geocoding.arcgisOnlineProvider({
          apikey:
            "AAPK761528dafc49434ca90846cabbfa8b6dKRLf97grkg3GdDG3qOe1NOtoQTfuAJVJL4MUSWzUyKFdGCzlGEuHGtwX6TQu9r6Q",
          nearby: {
            lat: -33.8688,
            lng: 151.2093,
          },
        }),
      ],
    }).addTo(map);

    const results = window.L.layerGroup().addTo(map);
    searchControl.on("results", function (data) {
      results.clearLayers();
      for (let i = data.results.length - 1; i >= 0; i--) {
        results.addLayer(window.L.marker(data.results[i].latlng));
        let markerOptions = {
          title: "MyLocation",
          clickable: true,
          draggable: true,
        };
        let marker = window.L.marker(
          [data.results[i].latlng?.lat, data.results[i].latlng.lng],
          markerOptions
        ).on("click", (e) => {
          window.location.hash = "#coffee_9";
        });
        marker.addTo(map);
      }
    });
  };

  return (
    <div className="App">
      <header className="headBox">
        <div className="headIcon"></div>
        <ul className="headNav">
          <li>CITIES</li>
          <li>MAPS</li>
          <li>OPENINGS</li>
          <li>NEIGHBORHOODS</li>
          <li>VIDEO</li>
          <li>MORE</li>
        </ul>
        <div className="other">
          <Space size={14}>
            <TwitterOutlined />
            <FacebookOutlined />
            <YoutubeOutlined />
            <div className="subscribeBtn">
              <MailOutlined style={{ marginRight: 5 }} />
              SUBSCRIBE
            </div>
            <UserOutlined />
            <SearchOutlined />
          </Space>
        </div>
      </header>
      <main className="container">
        <div className="leftSide">
          <ul>
            {mapData.map((item) => (
              <li id={`coffee_${item.id}`} className="content">
                <h2>{item.name}</h2>
                <img
                  src={
                    item.image ||
                    "https://pica.zhimg.com/v2-5173d029de21e3a421416de17a43b260_1440w.jpg?source=172ae18b"
                  }
                  alt={item.name}
                  onClick={() => {
                    navigate("/test");
                  }}
                  style={{ cursor: "pointer" }}
                />
                <i>{item.address}</i>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="rightSide">
          <div id="leaflet" />
          <div className="footerContainer">
            <strong>More in Seattle</strong>
            <ul className="seattleBox">
              {footerData.map((item) => (
                <li className="footerContent">
                  <img
                    src={
                      item.image ||
                      "https://pica.zhimg.com/v2-5173d029de21e3a421416de17a43b260_1440w.jpg?source=172ae18b"
                    }
                    alt={item.name}
                  />
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Index;
