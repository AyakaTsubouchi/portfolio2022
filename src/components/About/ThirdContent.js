import React from "react";

export default function ThirdContent() {
  return (
    <>
      <h1 className="text-3xl tablet:text-4xl card-back-title text-shadow text-center text-white">
        What I keep in mind when I make websites.
      </h1>
      <div className="text-box bottom-right transparent-white">
        <ul className="pl-5 mt-3 list-disc">
          <li className="text-xl font-hand-writing">
            I’ve been visually detail oriented. I respect the designers intent.
          </li>
          <li className="text-xl font-hand-writing">SEO optimization</li>
          <li className="text-xl font-hand-writing">
            Website should be easy-to-maintain.{" "}
          </li>
        </ul>
      </div>
    </>
  );
}
