import React from "react";
import Back from "components/PostCardStyle/Back";
import { getData } from "app/data";
import ContentsWrapper from "./ContentsWrapper";

export default function index() {
  const projects = getData("projects");
  return (
    <>
      <div id="projects">
        {projects.map((project) => (
          <Back bg={project.bgColor}>
            <ContentsWrapper
              title={project.title}
              subtitle={project.subtitle}
              shortDescription={project.shortDescription}
              link={project.link}
              mainImageUrl={project.mainImageUrl}
              textColor={project.textColor}
              techStack={project.techStack}
            />
          </Back>
        ))}
      </div>
    </>
  );
}
