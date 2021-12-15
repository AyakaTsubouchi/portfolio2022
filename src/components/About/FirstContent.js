import React from "react";
import {FormattedMessage} from "react-intl"

export default function FirstContent() {
  return (
    <>
      <div className="text-box bottom-right transparent-black">
        <h3 className="tablet:text-3xl font-hand-writing text-white"><FormattedMessage id={"about_first_title"}/></h3>
        <p className="tablet:text-2xl font-hand-writing text-white">
        <FormattedMessage id={"about_first_text1"}/>
        </p>
      </div>
    </>
  );
}
