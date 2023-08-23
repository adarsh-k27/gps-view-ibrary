import { useJsApiLoader, GoogleMap } from "@react-google-maps/api";
import React, { useRef, useCallback, useState, useEffect } from "react";

import { markerCordinates } from "HeatMapCordintes";
import cluster from "assets/images/icons/cluster.png";
type Props = {};

export default function ClusterTest() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDYje6uGHlU31GTsGaXqdWLV5lQTkjaTvk",
    //libraries: ["places", "visualization"],
  });

  const [map, setMap] = useState<any>();
  const [clusterObj, setClusterObj] = useState<any>();
  const clusterRef = useRef<any>();
  const onLoad = (mapObj: any) => {
    //setMap(mapObj);
    const Mcluster = new window.MarkerClusterer(mapObj, [], {
      imagePath: cluster,
      gridSize: 60,
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
    window.google.maps.event.addListener(
      Mcluster,
      "clusterclick",
      (cluster:any) => {
        
        //setPosition({ lat: 32.947603510692716, lng: -117.23711790516973 });
        cluster.clusterIcon_.height_ = 40;
        cluster.clusterIcon_.div_.autofocus = true;
        cluster.clusterIcon_.div_.style.color = "green";
        //cluster.clusterIcon_.url_ = "http://localhost:3000/cluster.png";
        cluster.clusterIcon_.show();

        // infoWindow.setContent(html);
        // infoWindow.setPosition({ lat: -34.397, lng: 150.644 });
        // infoWindow.open({ map: gMap });
      }
    );
    clusterRef.current = Mcluster;
  };

  useEffect(() => {
    setTimeout(() => {
      let time = null;
      if (!time) {
        clusterRef.current.clearMarkers();
        clusterRef.current?.addMarkers(getMarkers());
      }
      time = true;
    }, 2000);
  }, [window.google]);

  const containerStyle = {
    width: "100%",
    height: "100%",
  };
  const defaultMapOptions = {
    zoom: 5,
    center: { lat: -34.397, lng: 150.644 },
    mapTypeId: "roadmap",
    minZoom: 2,
    disableDefaultUI: true,
  };
  const getMarkers = () => {
    if (markerCordinates) {
      return markerCordinates.map(
        (marker) =>
          new window.google.maps.Marker({
            position: marker.position,
            label: "1",
            title: marker.title,
            icon: {
              url: "", // URL to your custom icon image
              scaledSize: new window.google.maps.Size(30, 30), // Adjust the size of the icon
            },
          })
      );
    } else return [];
  };

  return (
    <div>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          options={defaultMapOptions}
          onLoad={onLoad}
          //onZoomChanged={handleZoomChange}
        ></GoogleMap>
      ) : (
        "not Loaded Yet"
      )}
    </div>
  );
}
