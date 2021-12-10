import React from "react";
import Image from "images/about_two.jpeg";

export default function FirstContent() {
  return (
    <>
      <div className="h-full grid grid-cols-2">
        <div className="left-column">
          <h5 className="font-hand-writing text-xl">Wordpress Theme Development</h5>
          <h1 className="font-hand-writing text-3xl">Bonalife Website</h1>
          <h5 className="font-hand-writing text-xl">Responsive Website for Salon</h5>
        </div>
        <div className="right-column table">
          <div className="table-cell">
            <img src={Image} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
