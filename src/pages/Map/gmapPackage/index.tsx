import React, { useRef, useCallback, useState, useEffect } from "react";
import {
  GoogleMap,
  GoogleMapsMarkerClusterer,
  GoogleMarkerClusterer,
  Marker,
  MarkerClusterer,
  MarkerF,
  useJsApiLoader,
} from "@react-google-maps/api";
import { data as GEO_CORDINATES, markerCordinates } from "HeatMapCordintes";
import SuperCluster, {
  AnyProps,
  ClusterFeature,
  PointFeature,
} from "supercluster";
import clusterpng from "assets/images/icons/cluster.png";
export default function GmapLibrary() {
  const [mapZoomLevel, setMapZoomLevel] = React.useState<number | undefined>();
  const [markerOffsets, setMarkerOffsets] = React.useState<PositionOffsets>({});
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDYje6uGHlU31GTsGaXqdWLV5lQTkjaTvk",
    //libraries: ["places", "visualization"],
  });
  const [clusters, setClusters] =
    useState<(PointFeature<AnyProps> | ClusterFeature<AnyProps>)[]>();
  const map = useRef<any>();
  const [zoom, setZoom] = useState<any>([]);

  const onLoad = useCallback((mapObj: any) => {
    map.current = mapObj;
  }, []);

  

  

  const defaultMapOptions = {
    zoom: 5,
    center: { lat: -34.397, lng: 150.644 },
    mapTypeId: "roadmap",
    minZoom: 2,
    disableDefaultUI: true,
  };

  if (loadError) {
    return (
      <div>
        <h1>Map Is nOt Load Yet</h1>
      </div>
    );
  }

  const markersNew = markerCordinates.map((marker) => {
    return {
      position: marker.position,
      label: 1,
      title: marker.title,
    };
  });

  
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

  const containerStyle = {
    width: "100%",
    height: "100%",
  };
  const transformPosition = (lat: number, lng: number, id: number) => {
    if (
      !mapZoomLevel ||
      !markerOffsets[id] 
      //mapZoomLevel <= MARKER_CLUSTER_MAX_ZOOM
    ) {
      return { lat, lng };
    }

    return {
      lat: lat + markerOffsets[id].lat,
      lng: lng + markerOffsets[id].lng
    };
  };

  return (
    <div>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          options={defaultMapOptions}
          onLoad={onLoad}
          //onZoomChanged={handleZoomChange}
        >
          <MarkerClusterer
            enableRetinaIcons={true}
            maxZoom={10}
            zoomOnClick={false}
            imagePath={clusterpng}
            minimumClusterSize={100}
            gridSize={90}
            // onLoad={() => {
            //   map.current?.fitBounds(defaultMapOptions.center);
            // }}
          >
            {(clusterer) => (
              <>
                {markersNew?.map((obj: any, i: number) => (
                  <MarkerF
                    //onClick={handleMarkerHover}
                    //ref={markerRef}
                    key={i}
                    position={obj.position}
                    label={obj.label}
                    title={obj.title}
                    clusterer={clusterer}
                    noClustererRedraw={false}
                    icon={{
                      scaledSize: new google.maps.Size(50, 50),
                      url: clusterpng,
                      origin: new google.maps.Point(0, 0),
                      anchor: new google.maps.Point(25, 50),
                    }}
                    animation={google.maps.Animation.DROP}
                  />
                ))}
              </>
            )}
          </MarkerClusterer>
        </GoogleMap>
      ) : (
        "not Loaded Yet"
      )}
    </div>
  );
}

// first we need to setUp the Map options
// i need to add the cluster in this map
// so first i need the map object
