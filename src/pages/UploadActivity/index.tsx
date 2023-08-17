import { useState,useRef } from "react";
import { minimumUploads } from "../../utils/constant";
import UploadedForms from "./forms";
import SimpleReactValidator from "simple-react-validator";
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

    if (
      files.length &&
      forms.length &&
      files.length + forms.length > minimumUploads
    )
      return "Limit Exceed ";

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
      <div>
        <h1 className="bold size-lg">About</h1>
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
