import React from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "100%",
  zIndex: "0",
};

const mapStyles = {
  width: "100%",
  height: "100%",
  zIndex: "0",
};

const MapContainer = () => {
  const onMarkerClick = () => {
    // Handle marker click if needed
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <LoadScript googleMapsApiKey="AIzaSyDLDsPjHArDgR0UNIf13r56TC3mydGBMJ0">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={13}
          center={{ lat: 18.626772, lng: 73.744164 }}
          options={{
            styles: mapStyles,
          }}
        >
          <Marker
            position={{ lat: 18.626772, lng: 73.744164 }}
            onClick={onMarkerClick}
          />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MapContainer;
