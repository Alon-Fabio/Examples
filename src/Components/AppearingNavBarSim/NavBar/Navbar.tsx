import React, { useEffect, useState } from "react";

// Style
import "./NavBar.scss";
// import your logo here↓
// import NavLogo from ;

import Burger from "../Burger/Burger";

const Navbar: React.FC<{ onRouteChange: Function }> = ({ onRouteChange }) => {
  const [scrollTop, setScrollTop] = useState(true);
  const [burgerStyle, setBurgerStyle] = useState({ burger: "", navLinks: "" });

  // In most cases this seeEffect will suffice, but this project has a overFlowY: hidden which tacks the scrolling from the body.

  // useEffect(() => {
  //   window.addEventListener("scroll", scrollDetect);
  //   return () => {
  //     window.removeEventListener("scroll", scrollDetect);
  //     console.log("removed");
  //   };
  // }, []);

  // const scrollDetect = () => {
  //   if (window.scrollY >= 200) {
  //     setScrollTop(false);
  //   } else {
  //     setScrollTop(true);
  //   }
  // };

  // The event listener is directed at the element which tacks the scrolling from the body.
  // If you don't have an element with a overFlowY: hidden, then use the above section instead.

  useEffect(() => {
    const overFlowDiv = document.getElementById("mainScrollEl");
    if (overFlowDiv === null) return;
    overFlowDiv.addEventListener("scroll", scrollDetect);
    console.log("effect");

    return () => {
      overFlowDiv.addEventListener("scroll", scrollDetect);
    };
  }, []);

  const scrollDetect = () => {
    console.log("trigger");
    const scrollElement = document.getElementById("mainScrollEl");
    if (scrollElement === null) return;

    if (scrollElement.scrollTop >= 200) {
      setScrollTop(false);
    } else {
      setScrollTop(true);
    }
  };

  const onBurgerClick = (): void => {
    setBurgerStyle((prvState) => {
      if (prvState.burger === "burgerAni") {
        return { burger: "", navLinks: "" };
      } else {
        return { burger: "burgerAni", navLinks: "navLinksShow" };
      }
    });
  };

  return (
    <nav className={scrollTop ? "navbarTop" : ""}>
      {/* {NavLogo ? <img src={NavLogo} alt="Logo" /> : null} */}
      <div className="navLinksMain">
        <ul className={`navLinks ${burgerStyle.navLinks}`}>
          <li
            onClick={() => {
              onBurgerClick();
              onRouteChange("Contact");
            }}
          >
            Contact
          </li>
          <li
            onClick={() => {
              onBurgerClick();
              onRouteChange("Dox");
            }}
          >
            Dox
          </li>
          <li
            onClick={() => {
              onBurgerClick();
              onRouteChange("Projects");
            }}
          >
            Projects
          </li>
          <li
            onClick={() => {
              onBurgerClick();
              onRouteChange("About");
            }}
          >
            About
          </li>
        </ul>
      </div>
      <Burger burgerStyle={burgerStyle} burgerClick={onBurgerClick} />
    </nav>
  );
};

export default Navbar;
