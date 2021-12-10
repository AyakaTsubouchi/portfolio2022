 import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export  const formatText = (title) => {
    return title.toLowerCase().replaceAll(" ", "_");
  };

  
  export const ShowTop=()=> {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  }
  