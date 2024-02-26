import menu_burger from "../assets/menu-burger.png";
//please do not use this main menu burger 
//only in the case of an emergency
import site_logo from "../assets/site_logo.png";
import "./Header.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [MobileNavState, setMobileNavState] = useState(true);

  const handleMobileNav = () => {
    setMobileNavState((prevValue) => !prevValue);
  };

  return (
    <>
      <div className="header">
        <img src={site_logo} alt="site logo" />

        <ul className="header-desktop">
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <li>HOME</li>
          </Link>
          <Link to={"/about"} style={{ textDecoration: "none" }}>
            <li>WHY CHOOSE US?</li>
          </Link>
          <Link to={"/contact"} style={{ textDecoration: "none" }}>
            <li>GET IN TOUCH</li>
          </Link>
        </ul>

        <ul
          className={`header-mobile ${
            MobileNavState ? "show-mobile-nav" : "hide-mobile-nav"
          }`}
        >
          <Link
            to={"/"}
            style={{ textDecoration: "none" }}
            onClick={handleMobileNav}
          >
            <li>HOME</li>
          </Link>
          <Link
            to={"/about"}
            style={{ textDecoration: "none" }}
            onClick={handleMobileNav}
          >
            <li>WHY CHOSE US?</li>
          </Link>
          <Link
            to={"/contact"}
            style={{ textDecoration: "none" }}
            onClick={handleMobileNav}
          >
            <li>GET IN TOUCH</li>
          </Link>
        </ul>

        {/* <ul className="navigation-bar" onClick={handleMobileNav}>
          <li className={`${MobileNavState ? "" : "rotate-first-nav-stick"}`}></li>
          <li className={`${MobileNavState ? "" : "rotate-second-nav-stick"}`}></li>
          <li className={`${MobileNavState ? "" : "slide-last-stick"}`}></li>
         
        </ul> */}

        <img
          src={menu_burger}
          alt="menu_burger"
          className="menu-burger"
          onClick={handleMobileNav}
        />
      </div>
    </>
  );
};

export default Header;
