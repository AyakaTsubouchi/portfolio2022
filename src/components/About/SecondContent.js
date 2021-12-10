import React from "react";

export default function SecondContent() {
  return (
    <>
      <h1 className="text-2xl tablet:text-4xl card-back-title text-shadow text-center text-white">
        I’d like to help deliver your idea to the real world.
      </h1>
      <div className="text-box transparent-white">
        <p className="only-desktop text-lg tablet:text-xl font-hand-writing">
          My first task at my first job was make a WordPress theme for a
          company. I hadn’t had any experience of building WordPress theme. I
          learned a lot from a senior developer and we launch the website in one
          month.
        </p>
        <p className="text-lg tablet:text-xl mt-0 tablet:mt-3 font-hand-writing">
          I made more than 10 websites in HTML & CSS, JS (JQuery, ReactJS)
          and PHP within one year.
        </p>
      </div>

      <div className="mt-4 tablet:mt-0 text-box bottom-right transparent-white">
        <h5 className="text-lg tablet:text-xl font-hand-writing">
          What I keep in mind when I make websites.
        </h5>
        <ul className="pl-5 mt-3 list-disc">
          <li className="text-xl font-hand-writing">
            I’ve been visually detail oriented.
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
