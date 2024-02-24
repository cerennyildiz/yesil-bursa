import React, { useState, useEffect } from 'react';
import AirQualityCard from './AirQualityCard';
import './airquality.css';

const Airquality = () => {
  const [airQualityData, setAirQualityData] = useState(null);
  const [error, setError] = useState(null);
  const city = 'bursa'; // Sabit olarak Bursa ilini kullanıyoruz

  useEffect(() => {
    getAirQuality(city);
  }, []); // Sadece bir kere çağrılmasını sağlamak için boş bağımlılık dizisi kullanıyoruz

  const getAirQuality = async (city) => {
    try {
      const response = await fetch(
        `https://api.waqi.info/feed/${city}/?token=${process.env.REACT_APP_AQI_API_TOKEN}`
      );
      const data = await response.json();
      console.log(data);
      if (response.ok && data.status === 'ok') {
        setAirQualityData(data.data);
        setError(null);
      } else {
        setError("Sorry, we couldn't find the city you were looking for.");
        setAirQualityData(null);
      }
    } catch (error) {
      console.error('network error:', error);
      setError('Sorry, something went wrong');
      setAirQualityData(null);
    }
  };

  return (
    <div>
      {airQualityData && (
        <>
          <AirQualityCard data={airQualityData} />
        </>
      )}
    </div>
  );
};

export default Airquality;
