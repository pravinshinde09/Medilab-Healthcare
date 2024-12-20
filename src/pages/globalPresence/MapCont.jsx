import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Cities } from "../../constants/Cities";
import L from "leaflet";
import markerImage from "../../assets/images/icons/mark.png";

const center = [10.771278605629783, 106.69012489341263];

const markerIcon = new L.Icon({
  iconUrl: markerImage,
  iconSize: [30, 30],
  iconAnchor: [17, 33],
  popupAnchor: [3, -46],
});

export default function MapCont() {
  return (
    <MapContainer
      center={center}
      zoom={5} // Adjusted zoom for better visibility
      style={{ width: "95%", height: "65vh" }}
    >
      <TileLayer
        url="https://api.maptiler.com/maps/openstreetmap/{z}/{x}/{y}.jpg?key=siecwZyXhWK4vgIqEyJF"
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      />
      {Cities &&
        Cities.length > 0 &&
        Cities.map((city, index) => (
          <Marker key={index} position={[city.lat, city.lng]} icon={markerIcon}>
            <Popup>
              <b>{city.country}</b>
            </Popup>
          </Marker>
        ))}
    </MapContainer>
  );
}
