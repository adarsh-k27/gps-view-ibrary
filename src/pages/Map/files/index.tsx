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
      <p>Sample Data</p>
    </button>
  );
};
