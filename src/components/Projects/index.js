import React from "react";
import "./projects.css";
import Back from "components/PostCardStyle/Back";
import FirstContent from "./FirstContent";
import SecondContent from "./SecondContent";
import { projects } from "./projectsData";
import ContentsWrapper from "./ContentsWrapper";

export default function index() {
  return (
    <>
      <div id="projects">
        <Back bg="bg-lime-300" Content={FirstContent} />
        <Back bg="bg-red-300" Content={SecondContent} />
      </div>
    </>
  );
}
