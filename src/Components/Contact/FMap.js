import React, { useState } from 'react'
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


import osm from './osm-providers'


const FMap = () => {
    const [center, setCenter] = useState({lat: 0, lng: 0})
    const ZOOM_LEVEL = 9;
  return (
    <div className='theMap'>
        welcome to maps
        {/* <MapContainer center={[51.505, -0.09]} zoom={13}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
                <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer> */}
    </div>
  )
}

export default FMap