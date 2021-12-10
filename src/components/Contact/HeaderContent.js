import React,{useState} from "react";
import LangSelect from "components/LangSelect";
import {FormattedMessage} from "react-intl";
import Stamp from "images/ayaka_stamp.png";
import SentStamp from "images/sent_stamp.png";
import { useSelector, useDispatch } from "react-redux";

export default function HeaderContent() {
  var options = { year: "numeric", month: "short", day: "numeric" };
  var today = new Date();
  const title = <FormattedMessage id={"contact"} />
  const isSent = useSelector((state) => state?.settings?.isSent ?? false);

  return (
    <>
      <p className="only-desktop text-xl text-left">
        {today.toLocaleDateString("en-US", options)}
      </p>
      <h1 className="text-2xl text-center text-gray-500">
        {title}
      </h1>
      <div className="text-right relative">
        <img src={Stamp} alt="ayaka_stamp" width="150px" className="mr-0 ml-auto"/>
        {!isSent? <img src={SentStamp} alt="message is sent" className="sent-stamp"/>:null}
      </div>
    </>
  );
}
