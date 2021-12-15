import React from "react";
import { FormattedMessage } from "react-intl";
import AuthorInfo from "components/AuthorInfo";

export default function LeftContent() {
  return (
    <>
      <p className="tablet:text-2xl font-hand-writing mt-4">
        <FormattedMessage id={"contact_greeting"} />
      </p>
      <p className="tablet:text-2xl font-hand-writing mt-4">
        <FormattedMessage id={"contact_closing_one"} />
      </p>
      <p className="tablet:text-2xl font-hand-writing mt-4">
        <FormattedMessage id={"contact_closing_two"} />
      </p>
      <AuthorInfo />
    </>
  );
}
