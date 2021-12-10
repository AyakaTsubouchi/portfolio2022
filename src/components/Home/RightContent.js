import React from "react";
import { FormattedMessage } from "react-intl";
export default function RightContent() {
  return (
    <>
      <ul>
        <li className="font-hand-writing text-2xl mt-4">
          <a href="#about">
            {" "}
            <FormattedMessage id={"about"} />
          </a>
        </li>
        <li className="font-hand-writing text-2xl mt-4">
          <a href="#projects">
            {" "}
            <FormattedMessage id={"project"} />
          </a>
        </li>
        <li className="font-hand-writing text-2xl mt-4">
          <a href="#contact">
            {" "}
            <FormattedMessage id={"contact"} />
          </a>
        </li>
      </ul>
    </>
  );
}
