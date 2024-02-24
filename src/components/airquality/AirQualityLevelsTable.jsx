import React from 'react';

const AirQualityLevelsTable = () => {
  const levels = [
    { range: '0 - 50', level: 'İyi' },
    { range: '51 - 100', level: 'Orta' },
    { range: '101 - 150', level: 'Hassas Gruplar İçin Sağlıksız' },
    { range: '151 - 200', level: 'Sağlıksız' },
    { range: '201 - 300', level: 'Çok Sağlıksız' },
    { range: '301 ve üzeri', level: 'Tehlikeli' },
  ];

  return (
    <div className="yb__airquality-levels-card">
      <div className="yb__airquality-levels-card-body">
        <h5 className="yb__airquality-levels-card-title">
          Hava Kalitesi Seviyeleri
        </h5>
        <table className="yb__airquality-levels-card-table yb__airquality-levels-card-table-bordered">
          <thead>
            <tr>
              <th scope="col">Hava Kalitesi İndeksi (AQI) Aralığı</th>
              <th scope="col">Sağlık Endişesi Seviyesi</th>
            </tr>
          </thead>
          <tbody>
            {levels.map(({ range, level }, index) => (
              <tr key={index}>
                <td>{range}</td>
                <td>{level}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AirQualityLevelsTable;
