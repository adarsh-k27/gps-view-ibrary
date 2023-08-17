const labels = [
  "2010",
  "2011",
  "2012",
  "2013",
  "2014",
  "2015",
  "2016",
  "2017",
  "2018",
];

export const data = {
  labels,
  datasets: [
    {
      labels: "heatmap visualization",
      data: [211, 316, 121, 412, 420, 350, 576, 600, 570],
      backgroundColor:"aqua",
      fill:true,
    },
  ],
};

export const config = {
  type: "line",
  data: data,
  options: {
    responsive: true,
  },
};
