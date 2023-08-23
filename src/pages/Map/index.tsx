import React from "react";
import FilePage from "./files";
import GoogleMap from "./gmap";
import GmapLibrary from "./gmapPackage";
import ClusterTest from "./gmapPackage/google-cluster";

export default function MapPage() {
  return (
    <div className="main-content">
      <div className="tool-container">
        <div className="tools">
          <div className="tool">
            <label htmlFor="">Tags</label>
            <select name="" id="">
              <option>Tags</option>
            </select>
          </div>
          <div className="tool">
            <label htmlFor="">Kilomete</label>
            <input type="number" className="no-spinner" name="" id="" />
          </div>
          <div className="tool">
            <label htmlFor="">from</label>
            <input type="text" name="" id="" />
          </div>
          <div className="tool">
            <label htmlFor="">to</label>
            <input type="text" name="" id="" />
          </div>
          <div className="tool">
            <label htmlFor="">Time</label>
            <input type="number" className="no-spinner" name="" id="" />
          </div>
          <button className="filter-btn">Apply Filter</button>
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "20% 80%" }}>
        <FilePage />
        <GoogleMap />
        {/* <ClusterTest /> */}
      </div>
    </div>
  );
}

//this MapPage Need to show The Files and Map
