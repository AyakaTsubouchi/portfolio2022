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

import medMain from "images/projects/med_home.png";
import medMainMobile from "images/projects/med_mobile.png";
import medContact from "images/projects/med_contact.png";
import medFeature from "images/projects/med_feature.gif";

import ayaMain from "images/projects/aya_home.png";
import ayaMainMobile from "images/projects/aya_mobile.png";
import ayaFeature from "images/projects/aya_feature.gif";
import ayaMultilingual from "images/projects/aya_multilingual.gif";

export function getData(name) {
  const intl = getIntl();
  const str = (id, values) => intl.formatMessage({ id }, values);

  const projects = [
    {
      title: str("wordpress_theme"),
      subtitle: str("project_med_subtitle"),
      // shortDescription: "Responsive Website for medical supplier",
      link: "medproducts",
      mainImageUrl: medMain,
      bgColor: "bg-green",
      textColor: "white",
      techStack: [
        "WordPress",
        "Woocommerce",
        "CustomPostType",
        "CustomField",
        "CustomTaxonomy",
        "ContactForm",
        "Carousel",
        "Blog",
      ],
      webUrl: "http://hhmedproducts.com/",
      features: [
        str("project_med_feature1"),
        str("project_med_feature2"),
        str("project_med_feature3"),
        str("project_med_feature4"),
        str("project_med_feature5"),
        str("project_med_feature6"),
      ],
      role: [
        str("project_med_role1"),
        str("project_med_role2"),
        str("project_med_role3"),
        str("project_med_role4"),
        str("project_med_role5"),
      ],
      mobileImageUrl: medMainMobile,
      featureImageUrl: medFeature,
      imageGallery: [medContact],
    },
    {
      title: str("wordpress_plugin"),
      link: "goopter",
      mainImageUrl: goopterMain,
      bgColor: "bg-red-300",
      textColor: "black",
      techStack: [
        "ReactJS",
        "Multilingual",
        "WordPress",
        "CustomPostType",
        "Contact form",
        "Carousel",
        "WP REST API",
      ],
      webUrl: "https://www.goopter.com/",
      features: [
        str("project_goopter_feature1"),
        str("project_goopter_feature2"),
        str("project_goopter_feature3"),
        str("project_goopter_feature4"),
      ],
      role: [
        str("project_goopter_role1"),
        str("project_goopter_role2"),
        str("project_goopter_role3"),
      ],
      mobileImageUrl: goopterMainMobile,
      featureImageUrl: goopterHeader,
      imageGallery: [goopterCarousel],
    },
    {
      title: str("react_website"),
      subtitle: str("project_aya_subtitle"),
      link: "ayaka",
      mainImageUrl: ayaMain,
      bgColor: "bg-blue",
      textColor: "black",
      techStack: [
        "HTML&CSS",
        "ReactJS",
        "ReactIntl",
        "Tailwind",
        "Redux",
        "emailJS",
      ],
      webUrl: "https://localhost/",
      gitUrl: "https://github.com/AyakaTsubouchi/portfolio2022",
      features: [
        str("project_aya_feature1"),
        str("project_aya_feature2"),
        str("project_aya_feature3"),
        str("project_aya_feature4"),
      ],
      role: [
        str("project_aya_role1"),
        str("project_aya_role2"),
        str("project_aya_role3"),
      ],
      mobileImageUrl: ayaMainMobile,
      featureImageUrl: ayaFeature,
      imageGallery: [ayaMultilingual],
    },
    {
      title: str("wordpress_theme"),
      subtitle: "Responsive Website for salon",
      // shortDescription: "Responsive Website for salon",
      link: "bonalife",
      mainImageUrl: bonaMain,
      bgColor: "bg-lime-300",
      textColor: "black",
      techStack: ["WordPress", "CustomPostType", "Contact form", "Carousel"],
      webUrl: "http://bonalife.goopter.com/",
      features: [
        str("project_bona_feature1"),
        str("project_bona_feature2"),
      ],
      mobileImageUrl: bonaMainMobile,
      featureImageUrl: bonaMap,
      imageGallery: [bonaContact],
      role: [
        str("project_bona_role1"),
        str("project_bona_role2"),
        str("project_bona_role3"),
        str("project_bona_role4"),
      ],
    },
  ];
  return eval(name);
}
