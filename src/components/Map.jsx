import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
/* import Icon from '../assets/marker.png' */
// import { Icon } from 'leaflet'
import '../styles/components/Map.css';


const ChartMap = ({ data }) => {
  /*  const position = [data.lat, data.long] */
  const position = [51.505, -0.09]

  return (
    <MapContainer center={position} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} >
        <Popup icon=''>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>

      </Marker>
    </MapContainer>

  );
};
export default ChartMap;