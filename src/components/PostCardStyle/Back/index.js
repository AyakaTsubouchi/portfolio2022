import React from "react";

// export default function index({ Content, bg }) {
export default function index({ children, bg }) {
  const content = children
  return (
    <>
      <div className="min-h-screen box-shadow w-screen bg-white postcard-wrapper p-10">
        <div
          className={`object-center p-7 postcard-inner postcard-back  bg-cover ${bg}`}
        >
          {content}
        </div>
      </div>
    </>
  );
}
