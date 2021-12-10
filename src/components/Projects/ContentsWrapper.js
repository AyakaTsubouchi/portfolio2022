import React from 'react'
import { Link } from "react-router-dom";

export default function ContentsWrapper({title, subtitle, shortDescription, link, mainImageUrl}) {

    return (
        <>
      <div className="grid grid-col-1 desktop:grid-cols-2">
        <div className="left-column">
          <h5 className="font-hand-writing text-xl">
           {subtitle}
          </h5>
          <h1 className="font-hand-writing text-3xl">{title}</h1>
          <h5 className="font-hand-writing text-xl">
          {shortDescription}
          </h5>
          <div className="mt-4">
            <Link
              to={link}
              className="font-hand-writing text-xl"
            >{`Detail ->`}</Link>
          </div>
        </div>
        <div className="right-colum">
          <div className="">
            <img className="m-3" src={mainImageUrl} alt="" />
          </div>
        </div>
      </div>
    </>
    )
}
