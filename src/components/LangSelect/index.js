import React, { useState, useEffect } from "react";
import "./langSelect.css"
import { useSelector, useDispatch } from "react-redux";
import { changeLanguage } from "app/slices/settings";
import { replace } from "../../app/history";
import English from "assets/images/en_stamp.png";
import Japanese from "assets/images/jp_stamp.png";

export default function LangSelect() {
  const lan = useSelector((state) => state?.settings?.lan ?? "en");
  const dispatch = useDispatch();
  const [isEn, setIsEn] = useState(true);

  const onChangeHandler = (e) => {
    dispatch(changeLanguage({ language: e.target.value }));
    replace(newUrl(e.target.value));
  };
  const onClickHandler = (e) => {
    setIsEn(!isEn);
    dispatch(changeLanguage({ language: isEn ? "en" : "ja" }));
    replace(newUrl(lan));
    console.log(isEn);
  };

  const getUrlParameters = () => {
    var a = window.location.search.substr(1).split("&");
    if (String(a) === "") return {};
    var b = {};
    for (var i = 0; i < a.length; ++i) {
      var p = a[i].split("=", 2);
      if (p.length !== 2) continue;
      b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
    }
    return b;
  };

  const objectToQueryString = (obj) => {
    return Object.keys(obj)
      .filter((key) => obj[key] !== "" && obj[key] !== null)
      .map((key, index) => {
        var startWith = index === 0 ? "?" : "&";
        return startWith + key + "=" + obj[key];
      })
      .join("");
  };

  const newUrl = (lan) => {
    let url = "";
    let query = getUrlParameters();
    query["lan"] = lan;
    let queryString = objectToQueryString(query);
    url = window.location.pathname + queryString;
    return url;
  };

  return (
    <>
      <div className="language-selector">
        {/* <button onClick={onClickHandler} className="block mr-0 ml-auto"> */}
          <img
            src={lan ? (lan === "en" ? English : Japanese) : null}
            alt=""
            className="mr-0 ml-auto"
          />
        {/* </button> */}
        <select
          name="language"
          id="language"
          onChange={onChangeHandler}
          value={lan}
          className="mr-5 focus:outline-none"
        >
          <option value="en" defaultValue="en">
            English
          </option>
          <option value="ja">日本語</option>
        </select>
      </div>
    </>
  );
}
