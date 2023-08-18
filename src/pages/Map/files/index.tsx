import React, { Fragment } from "react";

type Props = {};

export default function FilePage({}: Props) {
  return (
    <Fragment>
      <div className="file-container">
        <GpxFile />
        <GpxFile />
        <GpxFile />
        <GpxFile />
        <GpxFile />
      </div>
    </Fragment>
  );
}

const GpxFile = ({ metadata }: any) => {
  return (
    <div
      className="files"
      key={"smapleData"}
      // onMouseOver={() => {
      //   handleFileHover("smapleData");
      // }}
    >
      <p>Sample Data</p>
    </div>
  );
};
