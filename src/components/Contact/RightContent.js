import React, { useRef, useState } from "react";
import { FormattedMessage } from "react-intl";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { handleSend } from "app/slices/settings";

export default function RightContent() {
  const form = useRef();
  const dispatch = useDispatch();
  const isSent = useSelector((state) => state?.settings?.isSent ?? false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_MAIL_SERVICE_ID,
        process.env.REACT_APP_MAIL_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_MAIL_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          dispatch(handleSend({ isSent: true }));
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <form ref={form} onSubmit={sendEmail} className="text-xl">
        <div className="border-b border-black">
          <input
            type="text"
            name="user_name"
            placeholder="Name"
            className="w-full focus:outline-none mt-6"
          />
        </div>
        <div className="border-b border-black">
          <input
            type="email"
            name="user_email"
            placeholder="Email"
            className="w-full focus:outline-none mt-6"
          />
        </div>
        <div className="">
          <textarea
            name="message"
            placeholder="Message"
            rows="5"
            className="bg-gray-100 w-full focus:outline-none  mt-6"
          />
        </div>
        <div className="text-right mr-5 text-lg">
          <button
            type="submit"
            className="send-btn px-3 py-1 mt-3 rounded bg-red-400 hover:bg-red-600 text-white"
          >
            SEND
          </button>
        </div>
      </form>
    </>
  );
}
