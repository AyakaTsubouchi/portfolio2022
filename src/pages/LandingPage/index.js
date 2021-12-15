import React from "react";
import Home from "components/Home";
import About from "components/About";
import Projects from "components/Projects";
import Contact from "components/Contact";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Back from "components/PostCardStyle/Back";
import FirstContent from "components/About/FirstContent";
import SecondContent from "components/About/SecondContent";
export default function index() {
  return (
    <>
      {/* <div className="only-mobile"> */}
        <Home />
        <About />
        <Projects />
        <Contact />

      {/* </div> */}
      {/* <div className="only-desktop">
        <Parallax pages={6}>
          <ParallaxLayer sticky={{ start: 0, end: 1 }}>
            <div id="top"></div>
            <Home />
          </ParallaxLayer>
          <ParallaxLayer sticky={{ start: 1, end: 2 }}>
            <div id="about"></div>
            <Back bg="bg-postcard-back-one" Content={FirstContent} />
          </ParallaxLayer>
          <ParallaxLayer sticky={{ start: 2, end: 3 }}>
            <Back bg="bg-postcard-back-two" Content={SecondContent} />
          </ParallaxLayer>
          <ParallaxLayer sticky={{ start: 3, end: 4 }}>
            <div id="projects"></div>
            <Back bg="bg-lime-300" Content={ProjectFirst} />
          </ParallaxLayer>
          <ParallaxLayer sticky={{ start: 4, end: 5 }}>
            <div id="projects"></div>
            <Back bg="bg-red-300" Content={ProjectSecond} />
          </ParallaxLayer>
          <ParallaxLayer sticky={{ start: 5, end: 6 }}>
            <div id="contact"></div>
            <Contact />
          </ParallaxLayer>
        </Parallax>
      </div> */}
    </>
  );
}
