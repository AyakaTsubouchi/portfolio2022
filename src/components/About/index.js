import React from "react";
import Back from "components/PostCardStyle/Back";
import FirstContent from "./FirstContent";
import SecondContent from "./SecondContent";

export default function index() {
  return (
    <>
      <div id="about">
        <Back bg="bg-postcard-back-one" Content={FirstContent} />
        <Back bg="bg-postcard-back-two" Content={SecondContent} />
      </div>
    </>
  );
}
