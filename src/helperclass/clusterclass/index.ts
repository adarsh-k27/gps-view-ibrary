import select_cluster from "assets/images/icons/select.png";
import cluster  from "assets/images/icons/cluster.png";
import { log } from "util";

/* eslint-disable @typescript-eslint/no-useless-constructor */
export class MyCluster extends window.MarkerClusterer {
  constructor(map: any, markers: any, options: any) {
    super(map, markers, options);
    console.log("cluster", this);

    this.addListener("clusterclick", (cluster: any) => {
      this.setStyles({
        url: cluster,
        height: 90,
        width: 90,
        //anchorText: [15, -10],
        repeat: false,
        textColor: "#000000",
        textSize: 12,
      });
      cluster.clusterIcon_.url_ = select_cluster;
      cluster.clusterIcon_.show();
    });
  }
}
