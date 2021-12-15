import React from "react";
import {FormattedMessage} from "react-intl"


export default function SecondContent() {
  return (
    <>
      <h1 className="tablet:mt-4 text-2xl tablet:text-4xl card-back-title text-shadow text-center text-white">
       <FormattedMessage id={"about_second_title"}/>
      </h1>
      <div className="text-box transparent-white">
        <p className="only-desktop text-lg tablet:text-xl font-hand-writing">
        <FormattedMessage id={"about_second_text1"}/>
        </p>
        <p className="text-lg tablet:text-xl mt-0 tablet:mt-3 font-hand-writing">
        <FormattedMessage id={"about_second_text2"}/>
        </p>
      </div>

      <div className="mt-4 tablet:mt-0 text-box bottom-right transparent-white">
        <h5 className="text-lg tablet:text-xl font-hand-writing">
        <FormattedMessage id={"about_second_text3"}/>
        </h5>
        <ul className="pl-5 mt-3 list-disc">
          <li className="text-xl font-hand-writing">
          <FormattedMessage id={"about_second_list1"}/>
          </li>
          <li className="text-xl font-hand-writing">  <FormattedMessage id={"about_second_list2"}/></li>
          <li className="text-xl font-hand-writing">
          <FormattedMessage id={"about_second_list3"}/>
          </li>
        </ul>
      </div>
    </>
  );
}
