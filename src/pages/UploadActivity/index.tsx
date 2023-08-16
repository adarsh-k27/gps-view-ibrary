import React, { useRef } from "react";
import { useState } from "react";
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

  const [form, setForm] = useState(defaultForm);
  const [_, forceUpdate] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...defaultForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    try {
      if (validator.current.allValid()) {
      } else {
        console.log(validator.current.errorMessages);
        validator.current.showMessages();
        forceUpdate((prev) => !prev);
      }
    } catch (error) {}
  };

  return (
    <section className="main-content">
      <div>
        <h1 className="bold size-lg">About</h1>
      </div>
      <div className="flex-row">
        <span className="bold size-sm ">UploadAnd Sync Your Activities</span>
        <button className="btn bold" onClick={handleSubmit}>
          Upload{" "}
        </button>
      </div>
      <form action="" onSubmit={handleSubmit}>
        <div className="flex-row">
          <div className="flex gap-1">
            <div className="flex">
              <label htmlFor="title">Title</label>
              <input
                name="title"
                type="text"
                id="title"
                onChange={handleChange}
              />
              {validator.current.message("title", form.title, "required")}
            </div>

            <div className="flex">
              <label htmlFor="description ">Description</label>
              <textarea
                name="description"
                id="description"
                onChange={handleChange}
              />
              {validator.current.message(
                "description",
                form.description,
                "required"
              )}
            </div>
            <div className="flex">
              <label htmlFor="">Private Notes</label>
              <textarea
                rows={10}
                name="privateNotes"
                id="privateNotes"
                cols={10}
                onChange={handleChange}
              />
              {validator.current.message(
                "privateNotes",
                form.privateNotes,
                "required"
              )}
            </div>
          </div>
          <div className="flex gap-1">
            <div className="flex">
              <label htmlFor="">Activity Type</label>
              <div className="dropdown">
                <select id="activityType" onChange={handleChange}>
                  <option>Biking</option>
                  <option>Paragliding</option>
                  <option>PPG</option>
                  <option>Overlanding</option>
                  <option>Ride</option>
                </select>

                {/* <ArrowDropDownOutlinedIcon fontSize="large" color="primary"  /> */}
              </div>
              {validator.current.message(
                "activityType",
                form.activityType,
                "required"
              )}
            </div>
            <div className="flex">
              <label htmlFor="">Type of Ride</label>
              <div className="dropdown">
                <select name="rideType" id="rideType" onChange={handleChange}>
                  <option>sjkjbjd</option>
                  <option>sjkjbjd</option>
                  <option>sjkjbjd</option>
                  <option>sjkjbjd</option>
                  <option>sjkjbjd</option>
                </select>

                {/* <ArrowDropDownOutlinedIcon fontSize="large" color="primary"  /> */}
              </div>
              {validator.current.message("rideType", form.rideType, "required")}
            </div>
            {/* <div className="flex">
              <label htmlFor="">Tags</label>
              <input type="text" />
            </div> */}
            <div className="flex">
              <label htmlFor="">Bike</label>
              <div className="dropdown">
                <select name="bike" id="bike" onChange={handleChange}>
                  {/* <option>sjkjbjd</option>
                  <option>sjkjbjd</option>
                  <option>sjkjbjd</option>
                  <option>sjkjbjd</option>
                  <option>sjkjbjd</option> */}
                </select>

                {/* <ArrowDropDownOutlinedIcon fontSize="large" color="primary"  /> */}
              </div>
              {validator.current.message("bike", form.bike, "required")}
            </div>
          </div>
          <div className="flex gap-1">
            <div className="flex">
              <label htmlFor="">Map Type</label>
              <div className="dropdown">
                <select name="mapType" id="mapType" onChange={handleChange}>
                  <option>sjkjbjd</option>
                  <option>sjkjbjd</option>
                  <option>sjkjbjd</option>
                  <option>sjkjbjd</option>
                  <option>sjkjbjd</option>
                </select>
                {/* <ArrowDropDownOutlinedIcon fontSize="large" color="primary"  /> */}
              </div>
              {validator.current.message("mapType", form.mapType, "required")}
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}
