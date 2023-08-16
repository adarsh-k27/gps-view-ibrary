/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useRef, useState } from "react";
import { data as GEO_CORDINATES } from "HeatMapCordintes";
import { debug } from "console";

declare global {
  interface Window {
    google: any;
  }
}

export default function GoogleMap({}) {
  const defaultMapOptions = {
    zoom: 4,
    center: { lat: -34.397, lng: 150.644 },
    mapTypeId: "roadmap",
    minZoom: 2,
    disableDefaultUI: true,
  };
  const map = useRef<any>(null);
  const [zoomeLevel, setZoomLevel] = useState(defaultMapOptions.zoom);
  const [heatMap, setHeatMap] = useState<any>(null);
  useEffect(() => {
    if (window.google) {
      const gMap = new window.google.maps.Map(
        document.getElementById("map"),
        defaultMapOptions
      );
      map.current = gMap;

      const gHeatMap = new window.google.maps.visualization.HeatmapLayer({
        data: getPoints(),
        map: gMap,
        maxIntensity: 25,
        radius: 5,
        opacity: 0.4,
      });
      setHeatMap(gHeatMap);


      //In Initial Render We Cant Calcukate The Zoom Level 
      //By Default we will set a Initial Zoom Level
      //In That Zoom Level we Only Need To Show The Cluster and Count 
      // Task 

      //1. For showing Cluster we need to add Markers 
      //2.Markers image and Cluster Image Should be Same 
      //3.

      window.google.maps.event.addListener(gMap, "zoom_changed", () => {
        const zoomLevel = map.current.getZoom();
        setZoomLevel(zoomLevel);
        console.log("IN INITIAL RENDER",zoomLevel);
        
      });
    }
  }, [window.google]);

  useEffect((): any => {
    debugger;
    if (heatMap) {
      //convert data
      const geoArray = [
        ...GEO_CORDINATES.smapleData,
        ...GEO_CORDINATES.travelData,
        ...GEO_CORDINATES.thirdData,
        ...GEO_CORDINATES.fourtData,
        ...GEO_CORDINATES.fifthData,
      ];
      debugger;
      heatMap.setData(
        geoArray.map(
          (lat_lng) => new window.google.maps.LatLng(lat_lng[1], lat_lng[0])
        )
      );
    }
  }, [heatMap]);

  const getPoints = () => {
    return [];
  };

  return (
    <div>
      <div>
        Button sections <span>{zoomeLevel}</span>
      </div>

      <div className="" id="map"></div>
    </div>
  );
}
