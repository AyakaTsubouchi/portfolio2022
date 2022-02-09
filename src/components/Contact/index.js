import React from "react";
import Front from "components/PostCardStyle/Front";
import HeaderContent from "./HeaderContent";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

export default function index() {
  return (
    <div id="contact">
      <Front>
        <HeaderContent />
        <LeftContent />
        <RightContent />
      </Front>
    </div>
  );
}
