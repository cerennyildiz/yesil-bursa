import React from 'react';

const getCardColor = (aqi) => {
  if (aqi <= 50) {
    return 'yb__airquality-bg-success';
  } else if (aqi <= 100) {
    return 'yb__airquality-bg-warning';
  } else if (aqi <= 150) {
    return 'yb__airquality-bg-orange ';
  } else if (aqi <= 200) {
    return 'yb__airquality-bg-danger ';
  } else if (aqi <= 300) {
    return 'yb__airquality-bg-very-unhealthy ';
  } else {
    return 'yb__airquality-bg-hazardous ';
  }
};

const AirQualityCard = ({ data }) => {
  const { aqi, city, dominentpol, time } = data;
  const cardColor = getCardColor(aqi);
  return (
    <div className="yb__airquality-card-container">
      <h1>Hava Kalitesi</h1>
      <div className={`yb__airquality-card ${cardColor} `}>
        <div className={`yb__airquality-aqi `}>{aqi}</div>
        <div className="yb__airquality-info ">
          <h5>Bursa</h5>
          <p>Baskın Kirlilik: {dominentpol}</p>
          <p>Son Güncelleme: {time.s}</p>
        </div>
      </div>
    </div>
  );
};

export default AirQualityCard;
