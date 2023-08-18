import React from "react";
import FilePage from "./files";

type Props = {};

export default function MapPage({}: Props) {
  return (
    <div className="main-content">
      <div>Button sections</div>
      <div style={{ display: "grid", gridTemplateColumns: "20% 80%" }}>
        <FilePage  />
        <div className="" id="map"></div>
      </div>
    </div>
  );
}

//this MapPage Need to show The Files and Map
