import React from "react";
import CORSMap from "./components/CORSMap";
import SiteStats from "./components/SiteStats";
import "./App.css";

function App() {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>USA CORS Sites Dashboard</h1>
      </header>
      <div className="dashboard-content">
        <div className="map-section">
          <CORSMap />
        </div>
        <div className="stats-section">
          <SiteStats />
        </div>
      </div>
    </div>
  );
}

export default App;
