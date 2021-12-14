import { getIntl } from "app/locales";
import bonaMain from "images/projects/bona_home.png";
import goopterMain from "images/projects/goopter_home.png";
import bonaMainMobile from "images/projects/bona_mobile.png";
import bonaMap from "images/projects/bona_map.gif";
import bonaMultiLingual from "images/projects/bona_multilingual.gif";
import bonaContact from "images/projects/bona_contact.png";
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
      title: "Bonalife Website",
      subtitle: "Wordpress Theme Development",
      shortDescription: "Responsive Website for Salon",
      link: "bonalife",
      mainImageUrl: bonaMain,
      bgColor: "bg-lime-300",
      features: [
        "Responsive website",
        "Easy to move in : Import products with csv file.",
        "limiting access to the admin panel for users who are logged in or allowed by IP addresses. it makes the website more secure.",
      ],
      mobileImageUrl: bonaMainMobile,
      featureImageUrl: bonaMap,
      imageGallery: [bonaMultiLingual, bonaContact],
    },
    {
      title: "Goopter Website",
      subtitle: "Wordpress Plugin Development",
      shortDescription: "Responsive Website for Tech Company",
      link: "goopter",
      mainImageUrl: goopterMain,
      bgColor: "bg-red-300",
      features: [
        "Responsive website",
        "Easy to move in : Import products with csv file.",
        "limiting access to the admin panel for users who are logged in or allowed by IP addresses. it makes the website more secure.",
      ],
      mobileImageUrl: goopterMainMobile,
      featureImageUrl: goopterHeader,
      imageGallery: [goopterMultiLingual, goopterContact, goopterCarousel],
    },
  ];
  return eval(name);
}
