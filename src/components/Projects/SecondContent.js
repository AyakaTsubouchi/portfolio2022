import React from "react";
import goopterMain from "images/projects/goopter_home.png";
import { Link } from "react-router-dom";

export default function SecondContent() {
  return (
    <>
      <div className="grid grid-col-1 desktop:grid-cols-2">
        <div className="left-column">
          <h5 className="font-hand-writing text-xl">
            Wordpress Plugin Development
          </h5>
          <h1 className="font-hand-writing text-3xl">Goopter Website</h1>
          <h5 className="font-hand-writing text-xl">
            Responsive Website for Tech Company
          </h5>
          <div className="mt-4">
            <Link
              to="/projects/goopter"
              className="font-hand-writing text-xl"
            >{`Detail ->`}</Link>
          </div>
        </div>
        <div className="right-colum">
          <div className="">
            <img className="m-3" src={goopterMain} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
