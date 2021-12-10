import React from "react";
import LangSelect from "components/LangSelect";
import { FormattedMessage } from "react-intl";

export default function HeaderContent() {
  var options = { year: "numeric", month: "short", day: "numeric" };
  var today = new Date();

  return (
    <>
      <p className="only-desktop text-xl text-left">
        {today.toLocaleDateString("en-US", options)}
      </p>
      <h1 className="text-2xl text-center text-gray-500">
        <FormattedMessage id={"portfolio"} />
      </h1>
      <div className="text-right">
        <LangSelect />
      </div>
    </>
  );
}
