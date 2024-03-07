import menu_burger from "../assets/menu-burger.png";
import menu_burger_close from "../assets/menu-burger-close.png"
import site_logo from "../assets/site_logo.png";
import "./Header.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = (prop) => {
  const [MobileNavState, setMobileNavState] = useState(true);

  const handleMobileNav = () => {
    setMobileNavState((prevValue) => !prevValue);
  };

  return (
    <>
      <div className="header">
        <Link to={"/"}>
          <img src={site_logo} alt="site logo" />
        </Link>

        <ul className="header-desktop">
          <Link
            to={"/"}
            style={{
              textDecoration: prop.page === 1 ? "underline" : "none",
              textDecorationColor: "black",
            }}
          >
            <li>HOME</li>
          </Link>
          <Link
            to={"/about"}
            style={{
              textDecoration: prop.page === 2 ? "underline" : "none",
              textDecorationColor: "black",
            }}
          >
            <li>WHY CHOOSE US?</li>
          </Link>
          <Link
            to={"/contact"}
            style={{
              textDecoration: prop.page === 3 ? "underline" : "none",
              textDecorationColor: "black",
            }}
          >
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
            <li>WHY CHOOSE US?</li>
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

        {MobileNavState ? <img
          src={menu_burger}
          alt="menu_burger"
          className="menu-burger"
          onClick={handleMobileNav}
        /> : 
        
        <img
          src={menu_burger_close}
          alt="menu_burger-close"
          className="menu-burger-close"
          onClick={handleMobileNav}
        />
}
      </div>
    </>
  );
};

export default Header;
