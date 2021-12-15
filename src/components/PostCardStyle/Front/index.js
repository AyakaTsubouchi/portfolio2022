import React from "react";

export default function index({ Header, Left, Right }) {
  return (
    <div className="min-h-screen bg-postcard-front bg-cover postcard-wrapper box-shadow">
      <div className="object-center p-7 bg-white postcard-inner">
        <div className="postcard-header">
          <div className="grid grid-cols-2 tablet:grid-cols-3">
            <Header />
          </div>
        </div>
        <div className="postcard-body ">
          <div className="">
            <div className="grid grid-cols-1 tablet:grid-cols-2">
              <div className="p-10 left-column">
                <Left />
              </div>
              <div className="p-10 right-column">
                <Right />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
