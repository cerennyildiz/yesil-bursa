import React from 'react';
import { Footer } from './components';
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import Map from './pages/Map';
import Home from './pages/Home';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </div>
  );
};

export default App;
