import React, { useState, useRef, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import emailjs from "emailjs-com";
import { useDispatch } from "react-redux";
import { handleSend } from "app/slices/settings";

export default function RightContent() {
  const form = useRef();
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [message, setMessage] = useState();

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
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
          dispatch(handleSend({ isSent: false }));
        }
      );
    };
    useEffect(()=>{
      dispatch(handleSend({ isSent: false }));
    },[])
  return (
    <>
      <form ref={form} onSubmit={sendEmail} className="text-xl">
        <div className="border-b border-black">
          <input
            type="text"
            name="user_name"
            placeholder="Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            className="w-full focus:outline-none mt-6"
            required
          />
        </div>
        <div className="border-b border-black">
          <input
            type="email"
            name="user_email"
            value={email}
            placeholder="Email"
            className="w-full focus:outline-none mt-6"
            required
          />
        </div>
        <div className="">
          <textarea
            name="message"
            value={message}
            placeholder="Message"
            rows="5"
            className="bg-gray-100 w-full focus:outline-none  mt-6"
            required
          />
        </div>
        <div className="text-right mr-5 tablet:text-lg">
          <button
            type="submit"
            className="send-btn px-3 py-1 mt-3 rounded bg-red-400 hover:bg-red-600 text-white"
          >
           <FormattedMessage id={"send"}/>
          </button>
        </div>
      </form>
    </>
  );
}
