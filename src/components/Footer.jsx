import footer_logo from "../assets/footer-logo.png";
import email_icon from "../assets/email-icon.png";
import phone_icon from "../assets/phone-icon.png";
import location_icon from "../assets/location-icon.png";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const direction_link =
    "https://www.google.com/maps/dir/-25.443947,30.9628904/emasa/@-25.4593794,30.9512708,14z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x1ee84bca7beb83cf:0x2522498576ddb2d3!2m2!1d30.9780883!2d-25.4730239?entry=ttu";

  return (
    <>
      <footer>
        <div className="footer-logo">
          <img src={footer_logo} alt="" />
        </div>

        <div className="introduction">
          <div className="title">WHo Are we?</div>

          <div className="text">
            EMASA is an academy formed and registered in 2006. We aim to help
            scholars improve their math and/or science. First we evaluate each
            new scholar and look at their past and current marks and then we
            formulate a lesson plan best suit for the scholar. Enroll today and
            see your child{"'"}s marks increase!
          </div>
        </div>

        <div className="navigation">
          <div className="title">quick links</div>

          <ul>
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
        </div>

        <div className="contact">
          <div className="title">Contact Details</div>

          <div className="details">
            <div className="detail">
              <img src={email_icon} alt="email-icon" /> admin@emasa.org.za
            </div>
            <div className="detail">
              <img src={phone_icon} alt="phone-icon" /> 074 826 3936
            </div>
            <div id="address">
              <div>
                <img src={location_icon} alt="phone-icon" />{" "}
              </div>
              <div>
                <ul>
                  <li>32 Bell Street,</li>
                  <li>Caltex Building, </li>
                  <li>First Floor </li>
                  <li>Office 126</li>
                  <li>Nelspruit Central</li>
                  <li>Mbombela</li>
                  <li>Mpumalanga</li>
                  <li id="last">
                    <a href={direction_link}>GET DIRECTIONS</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright">
          © 2024 Eben Mathematics & Science Academy |{" "}
          <span>A Plus Systems</span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
