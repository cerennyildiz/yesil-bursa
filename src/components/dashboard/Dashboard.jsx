import React, { useState } from 'react';
import './dashboard.css'; 
import MapDetail from '../mapdetail/MapDetail';
import AirQuality from '../airquality/AirQuality';
import AirQualityLevelsTable from '../airquality/AirQualityLevelsTable';

function Dashboard() {
  const [showParks, setShowParks] = useState(false);
  const [showLakes, setShowLakes] = useState(false);
  const [showRivers, setShowRivers] = useState(false); 

  const handleParkCheckboxChange = (event) => {
    setShowParks(event.target.checked);
  };

  const handleLakeCheckboxChange = (event) => {
    setShowLakes(event.target.checked);
  };

  const handleRiverCheckboxChange = (event) => {
    setShowRivers(event.target.checked);
  };

  return (
    <div className="yb__dashboard">
      <div className="yb__dashboard-container-1">
        <div className='yb__dashboard-container-1-checkboxes'>
        <div className="yb__dashboard-container-1-checkbox">
      <input 
            type="checkbox" 
            id="checkbox1" 
            name="checkbox1" 
            onChange={handleParkCheckboxChange} 
          />
          <label htmlFor="checkbox1">Park ve Bahçeler</label>
        </div>
        <div className="yb__dashboard-container-1-checkbox">
            <input 
              type="checkbox" 
              id="checkbox2" 
              name="checkbox2" 
              onChange={handleLakeCheckboxChange} 
            />
            <label htmlFor="checkbox2">Göller</label>
          </div>
        <div className="yb__dashboard-container-1-checkbox">
        <input 
            type="checkbox" 
            id="checkbox3" 
            name="checkbox3" 
            onChange={handleRiverCheckboxChange} 
          />
          <label htmlFor="checkbox3">Akarsular</label>
        </div>
        <div className="yb__dashboard-container-1-checkbox">
        <input 
            type="checkbox" 
            id="checkbox4" 
            name="checkbox4" 
          />
          <label htmlFor="checkbox4">Yerel Pazarlar</label>
        </div>
        </div>
          <button type='button' className='yb__dashboard-container-1-button'>Eko-Tur Oluştur</button>
      </div>

      <div className="yb__dashboard-main-container">
        <div className="yb__dashboard-container-2">
        <MapDetail showParks={showParks} showRivers={showRivers} showLakes={showLakes} />
        </div>
        <div className='yb__dashboard-container-3'>
        <div className="yb__dashboard-container-3-inner">
            <div className="yb__dashboard-container-3_1">
              <AirQuality/>
            </div>
            <div className="yb__dashboard-container-3_2">
              <AirQualityLevelsTable/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;