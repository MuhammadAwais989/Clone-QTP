// MapComponent.js
import React from 'react';

function MapComponent({ mapURL }) {
  if (!mapURL) return null; // Don't render if there's no map URL

  return (
    <div className="map">
      <iframe
        src={mapURL}
        width="90%"
        height="80%"
        style={{ border: "0", borderRadius: "10px" }}
        allowFullScreen
        loading="lazy"
        title="Google Maps Location"
      ></iframe>
    </div>
  );
}

export default MapComponent;
