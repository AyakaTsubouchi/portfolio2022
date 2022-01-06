import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { IntlProvider } from "react-intl";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import qs from "query-string";
import { changeLanguage } from "app/slices/settings";
import history from "app/history";
import MetaTags from "react-meta-tags";
import locales from "app/locales";
import LandingPage from "pages/LandingPage";
import SingleProject from "pages/SingleProject";
import Projects from "pages/Projects";
import ScrollToTop from "components/ScrollToTop";

export default function Index() {
  const dispatch = useDispatch();
  const queryLan = qs.parse(window?.location.search).lan;
  if (queryLan) {
    dispatch(changeLanguage({ language: queryLan }));
  }
  const lan = useSelector((state) => state?.settings?.lan ?? "en");

  const ShowMetaTag = (page) => {
    return (
      <MetaTags>
        <title>{metaTag[page].title}</title>
      </MetaTags>
    );
  };
  return (
    <Router history={history}>
      <IntlProvider
        locale={queryLan || lan}
        messages={locales.getIntlMessages(queryLan || lan)}
      >
        <div className="main-page" id="main-page">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {ShowMetaTag("Home")}
                  <LandingPage />
                </>
              }
            />
            <Route path={`projects/:name`} element={<SingleProject />} />
            <Route path={`projects`} element={<Projects />} />
          </Routes>
          <ScrollToTop bgColor={"#cfe7ed"} />
        </div>
      </IntlProvider>
    </Router>
  );
}
const metaTag = {
  Home: {
    title: "Ayaka:Home",
  },
  Projects: {
    title: "Ayaka:Projects",
  },
  Project: {
    title: "Ayaka:Project",
  },
};
