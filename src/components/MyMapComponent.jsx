import React from "react";
import { MapContainer, TileLayer, useMap, Popup, Marker } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import markerIcon from "../images/icon-location.svg"
import {Icon} from 'leaflet'

function ChangeView({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

const MyMapComponent = ({ location }) => {

  
  return (
    <MapContainer center={[location.lat, location.lng]} zoom={13} style={{ height: "100%", width: "100%" }}>
    <ChangeView center={[location.lat, location.lng]} zoom={13} />
    <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      
      <Marker position={[location.lat, location.lng]} icon={new Icon({iconUrl: markerIcon})}>
        <Popup>{location.city} <br /> {location.region} <br /> <strong>{location.country}</strong></Popup>
      </Marker>
    </MapContainer>
  );
};

export default MyMapComponent;
