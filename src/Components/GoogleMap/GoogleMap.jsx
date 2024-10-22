import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px' // Adjust height as needed
};

const center = {
  lat: 21.1702, // Latitude for Surat, India
  lng: 72.8311  // Longitude for Surat, India
};

const GoogleMaps = () => {
  return (
    <LoadScript googleMapsApiKey="YOUR_API_KEY_HERE"> 
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12} 
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMaps;
