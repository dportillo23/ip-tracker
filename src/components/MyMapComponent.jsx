import React from "react";
import { MapContainer, TileLayer, useMap, Popup, Marker } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'

function ChangeView({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

const MyMapComponent = ({ position }) => {

  
  return (
    <MapContainer center={position} zoom={13} style={{ height: "100%", width: "100%" }}>
    <ChangeView center={position} zoom={13} />
    <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      
      <Marker position={position} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
        <Popup>Text</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MyMapComponent;
