import React from 'react'
import { FormattedMessage } from "react-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin,faGithub } from "@fortawesome/free-brands-svg-icons";

export default function index() {
    return (
        <div className="mt-10 text-right author-info">
        <p className="tablet:text-2xl font-hand-writing">
          <FormattedMessage id={"name"} />
        </p>
        <p className="tablet:text-2xl font-hand-writing">
          <FormattedMessage id={"address"} />
        </p>
        <ul className="flex justify-end">
          <li className="text-3xl my-3 mx-2">
            <a href="https://github.com/AyakaTsubouchi/" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li className="text-3xl my-3 mx-5">
            <a href="https://www.linkedin.com/in/ayaka-tsubouchi-b0474718a/" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
        </ul>
      </div>

    )
}
