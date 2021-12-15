import React from "react";
import bonaMainDesktop from "images/projects/bona_home.png";
import bonaMainMobile from "images/projects/bona_mobile.png";
import bonaMap from "images/projects/bona_map.gif";
import bonaCustompost from "images/projects/bona_custompost.png";
import { getData } from "app/data";
import { Link, useParams } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import GoHome from "components/GoHome"

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
            {projectContent.webUrl && (
              <a href={projectContent.webUrl}>URL: {projectContent.webUrl}</a>
            )}
          </div>
          <div className="my-12 grid grid-col-1 desktop:grid-cols-2 bg-color-black">
            <img
              className="m-3 img-h-450"
              src={projectContent.mainImageUrl}
              alt=""
            />
            <img
              className="m-3 img-h-450 mx-auto only-desktop"
              src={projectContent.mobileImageUrl}
              alt="project"
            />
          </div>
          <div className="my-12 grid grid-col-1 desktop:grid-cols-2">
            <div className="font-hand-writing mt-10 mb-5">
              <h5 className="text-3xl my-5">
                <FormattedMessage id={"features"} />
              </h5>
              <ul className="list-disc pl-5">
                {projectContent.features &&
                  projectContent.features.map((feature) => <li>{feature}</li>)}
              </ul>
            </div>
            <img
              className="m-3 border-2 shadow-md"
              src={projectContent.featureImageUrl}
              alt="project"
            />
          </div>
          <div className="image-gallery grid grid-col-1 desktop:grid-cols-2">
            <div className="desktop:order-2  mb-5 desktop:ml-8">
              <h5 className="text-3xl my-5">What I Worked On</h5>
              {projectContent.role &&
                projectContent.role.map((feature) => <p>{feature}</p>)}
            </div>

            {projectContent.imageGallery &&
              projectContent.imageGallery.map((image) => (
                <img
                  className="border-2 shadow-md"
                  src={image}
                  alt="project gallery"
                />
              ))}
          </div>
        </div>
        <Link to="/projects" className="text-white font-hand-writing text-xl">
          {"<- Other Projects"}
        </Link>
        <GoHome/>
      </div>
    </>
  );
}
