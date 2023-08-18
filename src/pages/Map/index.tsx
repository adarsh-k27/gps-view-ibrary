import React from "react";
import FilePage from "./files";

export default function MapPage() {
  return (
    <div className="main-content">
      <div>Button sections</div>
      <div style={{ display: "grid", gridTemplateColumns: "20% 80%" }}>
        <FilePage />
        <div className="" id="map"></div>
      </div>
    </div>
  );
}

//this MapPage Need to show The Files and Map
