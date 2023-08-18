/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import {  forSuccessToast } from "utils/CommonService";

export default function UploadedForms({
  forms,
  form,
  setForm,
  index,
  validator,
}: any) {
  const [_, forceUpdate] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm(
      forms.map((details: any, i: number) => {
        if (index === i) {
          details = {
            ...details,
            [e.target.name]: e.target.value,
          };
        }
        return details;
      })
    );
  };

  const handleDiscard = (index: number) => {
    const data = forms.filter((_: any, i: number) => index !== i);
    setForm(forms.filter((_: any, i: number) => index !== i));
    return forSuccessToast("Discard Form SuccesFully");
  };
  const handleSubmit = (e: any) => {
    try {
      e.preventDefault();
      if (validator.current.allValid()) {
      } else {
        validator.current.showMessages();
        forceUpdate((prev) => !prev);
      }
    } catch (error) {}
  };
  return (
    <form className="upload-form" action="" onSubmit={handleSubmit}>
      <div className="flex-row">
        <div className="flex gap-1">
          <div className="flex">
            <label htmlFor="title">Title</label>
            <input
              name="title"
              type="text"
              id="title"
              onChange={handleChange}
              value={form.title}
            />
            {validator.current.message("title", form?.title, "required")}
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
                <option>Bike</option>
                <option>Walk</option>
                <option>Run</option>
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
      <div className=" btn-container mt-3">
        <button type="submit" className="btn-save">
          Save
        </button>

        <button
          type="submit"
          className="btn-discard"
          onClick={() => {
            handleDiscard(index);
          }}
        >
          Discard
        </button>
      </div>
    </form>
  );
}
