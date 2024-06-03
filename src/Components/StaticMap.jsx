import React from 'react';

const StaticMap = ({ latitude, longitude, zoom }) => {
  const mapSrc = `https://static-maps.yandex.ru/1.x/?ll=${longitude},${latitude}&z=${zoom}&size=600,300&l=map&lang=en_US`;
  const googleMapsLink = `https://www.google.com/maps?q=${latitude},${longitude}&z=${zoom}`;

  return (
    <div>
      <a href={googleMapsLink} target="_blank" rel="noopener noreferrer">
        <img style={{width: "100%", height: "100%"}} src={mapSrc} alt="OpenStreetMap" />
      </a>
    </div>
  );
};

export default StaticMap;
