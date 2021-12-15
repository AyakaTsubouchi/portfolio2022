import React, { useState, useEffect } from "react";
import "./goHome.css";
import { Link } from "react-router-dom";

export default function Index() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (!isVisible && window.pageYOffset > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    document.addEventListener("scroll", function (e) {
      toggleVisibility()
    });
    
  },[]);

  return (
    <>
    <Link className={`go-to-home ${isVisible ? "visible" : null}`} to={"/"}>{"<-HOME"}</Link>
    </>
  );
}
