import smapleData from "./sample.js/index.js";
import travelData from "./travel/index.js";
import thirdData from "./thirdData/index.js";
import fourtData from "./fourthData/index.js";
import fifthData from "./fifthData/index.js";

export const data = {
  smapleData,
  travelData,
  thirdData,
  fourtData,
  fifthData,
};

export const markerCordinates = [
  {
    position: {
      lat: smapleData[0][1],
      lng: smapleData[0][0],
    },
    title: "smapleData",
  },
  {
    position: {
      lat: travelData[0][1],
      lng: travelData[0][0],
    },
    title: "travelData",
  },
  {
    position: {
      lat: thirdData[0][1],
      lng: thirdData[0][0],
    },
    title: "thirdData",
  },
  {
    position: {
      lat: fourtData[0][1],
      lng: fourtData[0][0],
    },
    title: "fourtData",
  },
  {
    position: {
      lat: fifthData[0][1],
      lng: fifthData[0][0],
    },
    title: "fifthData",
  },
];

