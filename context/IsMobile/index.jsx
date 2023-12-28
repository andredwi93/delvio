import React, { useState, useEffect } from "react";
import Router from "next/router";

export const isMobileContext = React.createContext(false);

const IsMobile = (props) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    Router.events.on("routeChangeComplete", () => {
      window.scrollTo(0, 0);
    });
    setIsMobile(window.innerWidth < 991);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 991);
    };

    window.addEventListener("resize", handleResize);
  }, []);
  return (
    <isMobileContext.Provider value={isMobile}>
      {props.children}
    </isMobileContext.Provider>
  );
};

export default IsMobile;
