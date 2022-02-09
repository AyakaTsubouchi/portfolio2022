import React from "react";
import Back from "components/PostCardStyle/Back";
import FirstContent from "./FirstContent";
import SecondContent from "./SecondContent";

export default function index() {
  return (
    <>
      <div id="about">
        <Back bg="bg-postcard-back-one" Content={FirstContent}>
          <FirstContent />
        </Back>
        <Back bg="bg-postcard-back-two bg-black bg-blend-hard-light">
          <SecondContent />
        </Back>
      </div>
    </>
  );
}
