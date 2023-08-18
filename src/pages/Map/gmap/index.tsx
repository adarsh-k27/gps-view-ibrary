import { data as GEO_CORDINATES } from "HeatMapCordintes";
import React, { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    google: any;
    MarkerClusterer: any;
  }
}

export default function GoogleMap({}) {
  const defaultMapOptions = {
    zoom: 2,
    center: { lat: -34.397, lng: 150.644 },
    mapTypeId: "roadmap",
    minZoom: 2,
    disableDefaultUI: true,
  };

  const map = useRef<any>(null);

  const [zoomeLevel, setZoomLevel] = useState(defaultMapOptions.zoom);
  const [heatMap, setHeatMap] = useState<any>(null);
  const [clusterMark, setClusterMark] = useState<any>(null);

  useEffect(() => {
    if (window.google) {
      const gMap = new window.google.maps.Map(
        document.getElementById("map"),
        defaultMapOptions
      );
      map.current = gMap;

      const gHeatMap = new window.google.maps.visualization.HeatmapLayer({
        data: [],
        map: gMap,
        maxIntensity: 25,
        radius: 5,
        opacity: 0.4,
      });
      setHeatMap(gHeatMap);

      //here we are setting our cluster
    }
  }, [window.google]);

  useEffect((): any => {
    if (heatMap) {
      //convert data
      if (zoomeLevel >= 6) {
        getPointsAndSetHeatMap(heatMap);
      }
    }
  }, [heatMap]);

  const getPointsAndSetHeatMap = (heatMap: any) => {
    if (GEO_CORDINATES) {
      const geoArray = [
        ...GEO_CORDINATES.smapleData,
        ...GEO_CORDINATES.travelData,
        ...GEO_CORDINATES.thirdData,
        ...GEO_CORDINATES.fourtData,
        ...GEO_CORDINATES.fifthData,
      ];

      heatMap.setData(
        geoArray.map(
          (lat_lng) => new window.google.maps.LatLng(lat_lng[1], lat_lng[0])
        )
      );
    } else {
      heatMap.setData([]);
    }
  };

  return <div id="map"></div>;
}
