import { getIntl } from "app/locales";

import bonaMain from "images/projects/bona_home.png";
import bonaMainMobile from "images/projects/bona_mobile.png";
import bonaMap from "images/projects/bona_map.gif";
import bonaMultiLingual from "images/projects/bona_multilingual.gif";
import bonaContact from "images/projects/bona_contact.png";

import goopterMain from "images/projects/goopter_home.png";
import goopterMainMobile from "images/projects/goopter_mobile.png";
import goopterHeader from "images/projects/goopter_header.gif";
import goopterMultiLingual from "images/projects/goopter_multilingual.gif";
import goopterContact from "images/projects/goopter_contact.png";
import goopterCarousel from "images/projects/goopter_carousel.gif";

export function getData(name) {
  const intl = getIntl();
  const str = (id, values) => intl.formatMessage({ id }, values);

  const projects = [
    {
      title: "Website",
      subtitle: "Wordpress Theme Development",
      shortDescription: "Responsive Wordpress Theme for medical supplier",
      link: "medproducts",
      mainImageUrl: bonaMain,
      bgColor: "bg-green",
      textColor:"text-white",
      techStack:["WordPress","Woocommerce","Custom post type","Custom field","Custom Taxonomy","Contact form", "Carousel","Blog support"],
      webUrl:"http://hhmedproducts.com/",
      features: [
        "Responsive website",
        "Easy to import products with csv file.",
        "Limiting access to the admin panel by IP addresses",
        "All the contents are customizable from WP admin dashboard",
        "Provided the user guide",
        "Product sorting function and search bar to enable their customers to find the product easily."
      ],
      role:["This is a sample Wordpress theme of my company.","My roll in this project was building a Wordpress theme following the design mockup.","I used Woocommerce plugin to handle products.","And I overwrite the product page by php.","It took one month to finish this project."],
      mobileImageUrl: bonaMainMobile,
      featureImageUrl: bonaMap,
      imageGallery: [bonaMultiLingual, bonaContact],
    },
    {
      title: "Website",
      subtitle: "Wordpress Plugin Development",
      shortDescription: "Responsive Website for Tech Company",
      link: "goopter",
      mainImageUrl: goopterMain,
      bgColor: "bg-red-300",
      // textColor:"text-white",
      techStack:["ReactJS","Multilingual","WordPress","Custom post type","Contact form", "Carousel"],
      webUrl:"http://hhmedproducts.com/",
      features: [
        "Responsive website",
        "Easy to import products with csv file.",
        "limiting access to the admin panel for users who are logged in or allowed by IP addresses. it makes the website more secure.",
      ],
      mobileImageUrl: goopterMainMobile,
      featureImageUrl: goopterHeader,
      imageGallery: [goopterMultiLingual, goopterContact, goopterCarousel],
    },
    {
      title: "Website",
      subtitle: "Wordpress Theme Development",
      shortDescription: "Responsive Wordpress Theme for salon",
      link: "bonalife",
      mainImageUrl: bonaMain,
      bgColor: "bg-lime-300",
      techStack:["WordPress","Custom post type","Contact form", "Carousel"],
      webUrl:"http://bonalife.goopter.com/",
      features: [
        "Responsive website",
        "Easy to move in : Import products with csv file.",
        "limiting access to the admin panel for users who are logged in or allowed by IP addresses. it makes the website more secure.",
      ],
      mobileImageUrl: bonaMainMobile,
      featureImageUrl: bonaMap,
      imageGallery: [bonaMultiLingual, bonaContact],
    },
  ];
  return eval(name);
}
