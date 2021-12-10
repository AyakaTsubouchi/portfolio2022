import React from "react";
import bonaTop from "images/projects/bona_home.png";
import { Link } from "react-router-dom";

export default function FirstContent() {
  return (
    <>
      <div className="grid grid-col-1 deskvvtop:grid-cols-2">
        <div className="left-column">
          <h5 className="font-hand-writing text-xl">
            Wordpress Theme Development
          </h5>
          <h1 className="font-hand-writing text-3xl">Bonalife Website</h1>
          <h5 className="font-hand-writing text-xl">
            Responsive Website for Salon
          </h5>
          <div className="mt-4">
            <Link
              to="/projects/bonalife"
              className="font-hand-writing text-xl"
            >{`Detail ->`}</Link>
          </div>
        </div>
        <div className="right-colum">
          <div className="">
            <img className="m-3" src={bonaTop} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
