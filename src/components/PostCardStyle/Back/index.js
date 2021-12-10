import React from "react";

export default function index({ Content, bg }) {
  return (
    <>
      <div className="h-screen box-shadow w-screen bg-white postcard-wrapper">
        <div
          className={`object-center p-7 postcard-inner postcard-back  bg-cover ${bg}`}
        >
          <Content />
        </div>
      </div>
    </>
  );
}
