import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { RootState } from "store/store";

export default function FilePage() {
  const { uploadedGPXFiles } = useSelector(
    (state: RootState) => state.uploadfile
  );
  return (
    <Fragment>
      <div className="file-container">
        {uploadedGPXFiles.length ? (
          uploadedGPXFiles.map((item: any, index: number) => <GpxFile />)
        ) : (
          <>
            <GpxFile />
            <GpxFile />
            <GpxFile />
            <GpxFile />
            <GpxFile />
          </>
        )}
      </div>
    </Fragment>
  );
}

const GpxFile = ({ metadata }: any) => {
  return (
    <button className="files" key={"smapleData"} onMouseOver={() => {}}>
      <div className="meta-container">
        <span>Mountain Biking</span>
        <div className="info">
          <p>4</p>
          <p>3:01:47</p>
          <p>64.4 km</p>
          <p>147 </p>
        </div>
      </div>
      <div className="download">
        <button>file</button>
        <button>summary</button>
      </div>
    </button>
  );
};
