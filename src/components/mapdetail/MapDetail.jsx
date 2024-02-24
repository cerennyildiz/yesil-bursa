import React, { useEffect, useState } from 'react';
import './mapdetail.css';
import Papa from 'papaparse';
import 'leaflet/dist/leaflet.css';

import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from 'react-leaflet';

const MapDetail = ({ showParks, showRivers, showLakes }) => {
  const [parkGeojsonData, setParkGeojsonData] = useState(null);
  const [riverGeojsonData, setRiverGeojsonData] = useState(null);
  const [lakeGeojsonData, setLakeGeojsonData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (showParks) {
          const parkData = await fetchGeojsonData('bursa_park.csv');
          setParkGeojsonData(parkData);
        }

        if (showRivers) {
          const riverData = await fetchGeojsonData('bursa_akarsu.csv');
          setRiverGeojsonData(riverData);
        }

        if (showLakes) {
          const lakeData = await fetchGeojsonData('bursa_gol.csv');
          setLakeGeojsonData(lakeData);
        }
      } catch (error) {
        setError('Dosya okunurken bir hata oluştu: ' + error.message);
      }
    };

    fetchData();
  }, [showParks, showRivers, showLakes]);

  const fetchGeojsonData = async (fileName) => {
    const filePath = `${process.env.PUBLIC_URL}/data/${fileName}`;
    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error(`${fileName} dosyası okunamadı.`);
    }
    const text = await response.text();
    const csv = Papa.parse(text, { header: true });

    console.log(csv); // CSV verilerini konsola yazdır

    return csv.data
      .filter((row) => row.geojson)
      .map((row) => {
        try {
          console.log(row); // Her bir satırın içeriğini konsola yazdır
          return {
            type: 'Feature',
            geometry: JSON.parse(row.geojson),
            properties: {
              name: row.ad,
              style: {
                color: fileName === 'bursa_park.csv' ? 'black' : 'blue',
                weight: fileName === 'bursa_park.csv' ? 5 : 3,
                opacity: 1,
                fillColor: fileName === 'bursa_park.csv' ? 'white' : undefined,
                fillOpacity: 1,
              },
            },
          };
        } catch (error) {
          console.error(`Error parsing GeoJSON in ${fileName}:`, error);
          return null;
        }
      });
  };

  const onEachFeature = (feature, layer) => {
    const name = feature.properties.name;
    layer.bindPopup(`<b>${name}</b>`);
    layer.on({
      mouseover: () => {
        layer.openPopup();
      },
      mouseout: () => {
        layer.closePopup();
      },
    });
  };

  return (
    <MapContainer
      center={[40.196849, 29.054161]}
      zoom={12}
      scrollWheelZoom={true}
      style={{ height: '100vh' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {showParks && parkGeojsonData && (
        <GeoJSON
          style={{
            fillColor: 'rgba(104, 114, 30, 1)',
            fillOpacity: 0.6,
            color: 'rgba(104, 114, 30, 1)',
            weight: 2,
            opacity: 1,
          }}
          attribution="&copy; credits due..."
          data={{
            type: 'FeatureCollection',
            features: parkGeojsonData,
          }}
          onEachFeature={onEachFeature}
        />
      )}
      {showRivers && riverGeojsonData && (
        <GeoJSON
          style={{ color: 'rgba(52, 152, 219, 1)', weight: 3, opacity: 1 }}
          attribution="&copy; credits due..."
          data={{
            type: 'FeatureCollection',
            features: riverGeojsonData,
          }}
          onEachFeature={onEachFeature}
        />
      )}
      {showLakes && lakeGeojsonData && (
        <GeoJSON
          style={{
            fillColor: 'rgba(52, 73, 94, 0.6)',
            color: 'rgba(41, 128, 185, 1)',
            weight: 3,
            opacity: 1,
          }}
          attribution="&copy; credits due..."
          data={{
            type: 'FeatureCollection',
            features: lakeGeojsonData,
          }}
          onEachFeature={onEachFeature}
        />
      )}
    </MapContainer>
  );
};

export default MapDetail;
