import React from "react";
import bonaMainDesktop from "images/projects/bona_home.png";
import bonaMainMobile from "images/projects/bona_mobile.png";
import bonaMap from "images/projects/bona_map.gif";
import bonaCustompost from "images/projects/bona_custompost.png";
import { getData } from "app/data";
import { Link , useParams } from "react-router-dom";
import { FormattedMessage } from "react-intl";

export default function Index() {
  const { name } = useParams();
  const projects = getData("projects");
  const projectContent = projects.find((project) => project.link === name);
  return (
    <>
      <div className={`single-project p-10 ${projectContent.bgColor}`}>
        <div className="page-inner bg-white p-10">
          <div className="header">
            <h5 className="font-hand-writing text-xl">
              {projectContent.subtitle}
            </h5>
            <h1 className="font-hand-writing text-3xl">
              {projectContent.title}
            </h1>
            <h5 className="font-hand-writing text-xl">
              {projectContent.shortDescription}
            </h5>
          </div>
          <div className="grid grid-col-1 desktop:grid-cols-2">
            <div className="left-column">
              <img className="m-3 img-h-450" src={bonaMainMobile} alt="" />
            </div>
            <div className="right-colum">
              <div className="">
                <img className="m-3 w-full" src={bonaMainDesktop} alt="" />
              </div>
            </div>
            <div className="left-column font-hand-writing mt-10">
              <h5 className="text-3xl">
                <FormattedMessage id={"features"} />
              </h5>
              <ul>
                {projectContent.features &&
                  projectContent.features.map((feature) => <li>{feature}</li>)}
              </ul>
            </div>
            <div className="right-colum">
              <div className="">
                <img
                  className="m-3"
                  src={projectContent.featureImageUrl}
                  alt="bonalife map"
                />
              </div>
            </div>
          </div>
          <div className="image-gallery grid grid-col-1 desktop:grid-cols-2">
            {projectContent.imageGallery &&
              projectContent.imageGallery.map((image) => (
                <img src={image} alt="project gallery" />
              ))}
          </div>
        </div>
        <Link to="/" className="font-hand-writing">Back to Home</Link>
      </div>
    </>
  );
}
