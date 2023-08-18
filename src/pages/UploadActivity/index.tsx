import { useState, useRef } from "react";
import { minimumUploads, toastOptions } from "../../utils/constant";
import UploadedForms from "./forms";
import SimpleReactValidator from "simple-react-validator";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export default function UploadActivity() {
  const validator = useRef<SimpleReactValidator>(new SimpleReactValidator());
  const defaultForm = {
    title: "",
    description: "",
    privateNotes: "",
    activityType: "",
    mapType: "",
    bike: "",
    rideType: "",
  };

  const [forms, setForms] = useState<any>([]);

  const handleSelectFile = (e: any) => {
    const files = e.target.files;

    if (files.length && files.length + forms.length > minimumUploads)
      return toast.warning("You canonly Upload Up To 5 Files", toastOptions);

    const newFiles: any = [];
    for (let i = 0; i < files.length; i++) {
      let fileName = files[i].name.split(".")[0];

      const metadata = { ...defaultForm, title: fileName, file: files[i] };

      newFiles.push(metadata);
    }
    setForms([...forms, ...newFiles]);
  };

  return (
    <section className="main-content">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <h1 className="bold size-lg">About</h1>
        <Link className="link-btn"  to={"/map"}>Go To Map </Link>
      </div>
      <div className="flex-row">
        <span className="bold size-sm ">UploadAnd Sync Your Activities</span>
        <label htmlFor="" className="gpx">
          <input
            type="file"
            accept="*.gpx"
            multiple
            id="gpxfile"
            onChange={handleSelectFile}
          />
          <button className="btn bold">Upload GPX File </button>
        </label>
      </div>
      <div className="info-text">
        <span>
          works for multiple .tcx file , .gpx file 25 mb or smaller .Choose Up
          to ${minimumUploads}
        </span>
      </div>
      <div className="flex " style={{ gap: "1rem" }}>
        {forms.length
          ? forms.map((formDetails: any, index: number) => (
              <UploadedForms
                forms={forms}
                form={formDetails}
                setForm={setForms}
                index={index}
                key={index}
                validator={validator}
              />
            ))
          : null}
      </div>
    </section>
  );
}
