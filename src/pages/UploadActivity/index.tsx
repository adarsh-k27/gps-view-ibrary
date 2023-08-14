import React from "react";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import { useState } from "react";
type Props = {};

export default function UploadActivity() {
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

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...defaultForm, [e.target.name]: e.target.value });
  };

  return (
    <section className="">
      <div>
        <h1 className="bold size-lg">About</h1>
      </div>
      <div className="flex-row">
        <span className="bold size-sm ">UploadAnd Sync Your Activities</span>
        <button className="btn bold">Upload </button>
      </div>
      <form action="">
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
            </div>
            <div className="flex">
              <label htmlFor="description ">Description</label>
              <textarea
                name="description"
                id="description"
                onChange={handleChange}
              />
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
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}
