import React from "react";
import { FormattedMessage } from "react-intl";
import AuthorInfo from "components/AuthorInfo"

export default function LeftContent() {
  return (
    <>
      <p className="tablet:text-2xl font-hand-writing mt-4">
        <FormattedMessage id={"home_greeting"} />
      </p>
      <p className="tablet:text-2xl font-hand-writing mt-4">
        <FormattedMessage id={"home_self_one"} />{" "}
        <span className="text-3xl text-red-300">
          <FormattedMessage id={"home_self_one_strong"} />
        </span>
      </p>
      <p className="tablet:text-2xl font-hand-writing mt-4">
        <FormattedMessage id={"home_self_two"} />
      </p>
      <p className="tablet:text-2xl font-hand-writing mt-4">
        {" "}
        <FormattedMessage id={"home_self_three"} />
      </p>
      <AuthorInfo/>
    </>
  );
}
