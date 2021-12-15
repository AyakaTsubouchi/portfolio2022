import React from "react";
import { FormattedMessage } from "react-intl";
export default function RightContent() {
  return (
    <>
      <ul>
        <li className="border-b-gray font-hand-writing tablet:text-2xl mt-4">
          <a href="#about">
            {" "}
            <FormattedMessage id={"about"} />
          </a>
        </li>
        <li className="border-b-gray font-hand-writing tablet:text-2xl mt-4">
          <a href="#projects">
            {" "}
            <FormattedMessage id={"project"} />
          </a>
        </li>
        <li className="border-b-gray font-hand-writing tablet:text-2xl mt-4">
          <a href="#contact">
            {" "}
            <FormattedMessage id={"contact"} />
          </a>
        </li>
      </ul>
    </>
  );
}
