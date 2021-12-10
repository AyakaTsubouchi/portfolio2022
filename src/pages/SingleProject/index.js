import React from "react";
import bonaMainDesktop from "images/projects/bona_home.png";
import bonaMainMobile from "images/projects/bona_mobile.png";
import bonaMap from "images/projects/bona_map.gif";
import bonaCustompost from "images/projects/bona_custompost.png";

export default function index() {
  return (
    <>
      <div className="header">
        <h5 className="font-hand-writing text-xl">
          Wordpress Theme Development
        </h5>
        <h1 className="font-hand-writing text-3xl">Bonalife Website</h1>
        <h5 className="font-hand-writing text-xl">
          Responsive Website for Salon
        </h5>
      </div>
      <div className="grid grid-col-1 deskvvtop:grid-cols-2">
        <div className="left-column">
          <img className="m-3" src={bonaMainMobile} alt="" />
        </div>
        <div className="right-colum">
          <div className="">
            <img className="m-3" src={bonaMainDesktop} alt="" />
          </div>
        </div>
        <div className="left-column">
          <h5>Features</h5>
          <ul>
            <li>Responsive website</li>
            <li>Easy to move in : Import products with csv file.</li>
            <li>
              Product rarings and reviews: Show customer feedback directly on
              the product page.
            </li>
            <li>
              Customizable categories, sorting function make products easier to
              find.
            </li>
            <li>
              limiting access to the admin panel for users who are logged in or
              allowed by IP addresses. it makes the website more secure.
            </li>
            <li>
              Blog system: Publish greate content helps build a strong brand.{" "}
            </li>
            <li>
              SEO friendly : Using header tags properly, adding discription for
              each page, creating a sitemap and more. These tips increase the
              chance to get new customers.
            </li>
          </ul>
        </div>
        <div className="right-colum">
          <div className="">
            <img className="m-3" src={bonaMap} alt="bonalife map" />
          </div>
        </div>
      </div>
    </>
  );
}
