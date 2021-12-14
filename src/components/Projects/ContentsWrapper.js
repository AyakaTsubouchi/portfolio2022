import React from "react";
import { Link } from "react-router-dom";

export default function ContentsWrapper({
  title,
  subtitle,
  shortDescription,
  link,
  mainImageUrl,
  textColor,
  techStack
}) {
  return (
    <>
      <div className={textColor}>
        <h5 className="font-hand-writing text-xl desktop:text-3xl">
          {subtitle}
        </h5>
        <h1 className="font-hand-writing font-bold text-3xl desktop:text-7xl">
          {title}
        </h1>
      </div>

      <div className="mt-20 grid grid-cols-1 desktop:grid-cols-2">
        <div>
          <h5 className="font-hand-writing text-xl desktop:text-3xl">
            {shortDescription}
          </h5>
          <ul>
          {
            techStack &&  techStack.map(skill=>(<li>{skill}</li>))
          }
            <li></li>
          </ul>
          <div className="mt-3">
            <Link
              to={`/projects/${link}`}
              className="font-hand-writing text-xl"
            >{`Detail ->`}</Link>
          </div>
        </div>
        <div className="">
          <img
            className="m-3 w-50 object-contain ml-auto mr-auto"
            src={mainImageUrl}
            alt="project"
          />
        </div>
      </div>
    </>
  );
}
