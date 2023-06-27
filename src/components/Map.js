import React, { useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import '../css/map.css';

const locationName = "유포리아";

export default function Map() {
  useEffect(() => {
    kakaoMapScript();
  }, []);

  const kakaoMapScript = () => {
    const container = document.getElementById("map");
    const options = {
      center: new window.kakao.maps.LatLng(37.5126039, 127.1025242),
      level: 5,
    };

    const map = new window.kakao.maps.Map(container, options);

    const markerPosition = new window.kakao.maps.LatLng(37.5126039, 127.1025242);
    const marker = new window.kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
  };

  return (
    <>
      <Container>
        <div className="location_common">
          <h1>{locationName} 찾아오시는 길</h1>
          <div id="map" style={{ width: "1100px", height: "560px", textAlign: "center" }}></div>
          <div className="location_information">
            <h2>Euphoria</h2>
            <h2>
              <small>유포리아 정보</small>
            </h2>
            <br />
            <br />
          </div>
        </div>
      </Container>
    </>
  );
}
