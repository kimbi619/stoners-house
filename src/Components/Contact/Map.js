import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker  } from "react-google-maps"

function GetMap(){
    return(
        <GoogleMap
            defaultZoom={8}
            defaultCenter={{ lat: -34.397, lng: 150.644 }}
        >
        {/* {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />} */}
        </GoogleMap>
    )
}
const WrappedMap = withScriptjs(withGoogleMap(GetMap))

const Map = () => {
  return (
    <div>
        <WrappedMap
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
    /> 
    </div>
  )
}

export default Map