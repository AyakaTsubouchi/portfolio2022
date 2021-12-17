import React from "react";
import { FormattedMessage } from "react-intl";
import { HashLink as Link } from 'react-router-hash-link';

export default function RightContent() {
  return (
    <>
      <ul>
        <li className="border-b-gray font-hand-writing tablet:text-2xl mt-4">
          <Link to="#about">
            {" "}
            <FormattedMessage id={"about"} />
          </Link>
        </li>
        <li className="border-b-gray font-hand-writing tablet:text-2xl mt-4">
          <Link to="#projects">
            {" "}
            <FormattedMessage id={"projects"} />
          </Link>
        </li>
        <li className="border-b-gray font-hand-writing tablet:text-2xl mt-4">
          <Link to="#contact">
            {" "}
            <FormattedMessage id={"contact"} />
          </Link>
        </li>
      </ul>
    </>
  );
}
