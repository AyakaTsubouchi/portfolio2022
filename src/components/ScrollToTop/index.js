import React, { Component } from "react";
import "./ScrollToTop.css";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_visible: false,
    };
  }

  componentDidMount() {
    var scrollComponent = this;
    document.addEventListener("scroll", function (e) {
      scrollComponent.toggleVisibility();
    });
  }

  toggleVisibility() {
    if (window.pageYOffset > 500) {
      this.setState({
        is_visible: true,
      });
    } else {
      this.setState({
        is_visible: false,
      });
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  render() {
    const { is_visible } = this.state;
    return (
      <div className={`scroll-to-top ${is_visible && "visible"}`}>
        {is_visible && (
          <div onClick={() => this.scrollToTop()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="null"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.71879 12.0938C8.28831 11.5243 9.21167 11.5243 9.78119 12.0938L17.5 19.8126L25.2188 12.0938C25.7883 11.5243 26.7117 11.5243 27.2812 12.0938C27.8507 12.6633 27.8507 13.5867 27.2812 14.1562L18.5312 22.9062C17.9617 23.4757 17.0383 23.4757 16.4688 22.9062L7.71879 14.1562C7.14928 13.5867 7.14928 12.6633 7.71879 12.0938Z"
                fill="#fff"
                // fill="#11B7B5" oroginal
              />
            </svg>
          </div>
        )}
      </div>
    );
  }
}