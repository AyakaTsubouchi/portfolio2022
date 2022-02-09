import React from "react";

export default function index({ children }) {
  const [header, left, right] = children;
  return (
    <div className="min-h-screen bg-postcard-front bg-cover postcard-wrapper box-shadow">
      <div className="object-center p-7 bg-white postcard-inner">
        <div className="postcard-header">
          <div className="mt-10 grid grid-cols-2 tablet:grid-cols-3">
            {header}
          </div>
        </div>
        <div className="postcard-body ">
          <div className="">
            <div className="grid grid-cols-1 tablet:grid-cols-2">
              <div className="p-10 left-column">
                {left}
              </div>
              <div className="p-10 right-column">{right}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
