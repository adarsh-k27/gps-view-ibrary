/* eslint-disable react-hooks/exhaustive-deps */

import { data as GEO_CORDINATES, markerCordinates } from "HeatMapCordintes";
import { useEffect, useRef, useState } from "react";
import cluster from "assets/images/icons/cluster.png";
import { MyCluster } from "helperclass/clusterclass";

declare global {
  interface Window {
    google: any;
    MarkerClusterer: any;
  }
}

export default function GoogleMap() {
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
  //const [clusterMark, setClusterMark] = useState<any>(null);

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

      // let clustersMarker = new window.MarkerClusterer(gMap, getMarkers(), {
      //   imagePath: cluster,
      //   styles: [
      //     {
      //       url: cluster,
      //       height: 30,
      //       width: 30,
      //       //anchorText: [15, -10],
      //       repeat: false,
      //       textColor: "#000000",
      //       textSize: 12,
      //       zoomOnClick: true,
      //     },
      //   ],
      // });

      // clustersMarker.addListener( "clusterclick", () => {
      //   console.log("cluster click");
      // });

      // window.google.maps.event.addListener(gMap, "zoom_changed", () => {
      //   const zoomLevel = map.current.getZoom();
      //   setZoomLevel(zoomLevel);
      //   if (zoomLevel >= 6) {
      //     //show Heat Map

      //     getPointsAndSetHeatMap(gHeatMap);
      //     if (clustersMarker) {
      //       clustersMarker.clearMarkers();
      //     }
      //   } else {
      //     //show Marker
      //     clustersMarker.clearMarkers();
      //     clustersMarker.addMarkers(getMarkers());
      //     gHeatMap.setData([]);
      //   }
      // });

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

    if (map.current) {
      const dd = new MyCluster(map.current, getMarkers(), {
        imagePath: cluster,
        zoomOnClick: false,
        styles: [
          {
            url: cluster,
            height: 30,
            width: 30,
            //anchorText: [15, -10],
            repeat: false,
            textColor: "#000000",
            textSize: 12,
          },
        ],
      });
    }
  }, [heatMap]);

  const getMarkers = () => {
    if (markerCordinates) {
      return markerCordinates.map(
        (marker) =>
          new window.google.maps.Marker({
            position: marker.position,
            label: "1",
            title: marker.title,
            icon: {
              url: cluster, // URL to your custom icon image
              scaledSize: new window.google.maps.Size(30, 30), // Adjust the size of the icon
            },
          })
      );
    } else return [];
  };

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

  return <div id="map" style={{ width: "100%", height: "100%" }}></div>;
}
