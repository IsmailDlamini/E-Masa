import "./Home.css";
import home_page_image_1 from "../assets/home-page-image-1.png";
import home_page_image_2 from "../assets/home-page-image-2.png";
import home_page_image_3 from "../assets/home-page-image-3.png";
import footer_logo from "../assets/footer-logo.png";
import email_icon from "../assets/email-icon.png"
import phone_icon from "../assets/phone-icon.png"
import location_icon from "../assets/location-icon.png"
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <div className="home-page-container">
        <Header />
        <div className="main">
          <div className="main-text">
            Unlock your <span>child{"'"}s full potential</span> With our{" "}
            <span>Expert tutors!</span>
          </div>
          <div className="description">
            Welcome to EMASA, your gateway to excellence in math and science!
            Our expert tutors are dedicated to enhancing your child’s academic
            performance with personalized lesson plans. Enrol today and witness
            the transformation!
          </div>

          <div className="learn-more-button">
            <button>LEARN MORE</button>
          </div>
        </div>

        <div className="images">
          <img src={home_page_image_1} alt="image-1" />
          <img src={home_page_image_2} alt="image-2" />
          <img src={home_page_image_3} alt="image-3" />
        </div>

        <Footer />

        {/* <footer>
          <div className="footer-logo">
            <img src={footer_logo} alt="" />
          </div>

          <div className="introduction">
            <div className="title">WHo Are we?</div>

            <div className="text">
              EMASA is an academy formed and registered in 2006. We aim to help
              scholars improve their math and/or science. First we evaluate each
              new scholar and look at their past and current marks and then we
              formulate a lesson plan best suit for the scholar. Enroll today
              and see your child{"'"}s marks increase!
            </div>
          </div>


          <div className="navigation">
                <div className="title">
                quick links
                </div>

                <ul>
                    <li>HOME</li>
                    <li>WHY CHOSE US?</li>
                    <li>GET IN TOUCH</li>
                    <li>2023 FEES</li>
                </ul>
          </div>

            <div className="contact">
                <div className="title">
                Contact Details
                </div>

                <div className="details">
                        <div className="detail"><img src={email_icon} alt="email-icon" /> admin@emasa.org.za</div>
                        <div className="detail"><img src={phone_icon} alt="phone-icon" /> 074 826 3936</div>
                        <div id="address"><div><img src={location_icon} alt="phone-icon" /> </div>
                        <div >
                          <ul>
                            <li>32 Bell Street,</li>
                            <li>Caltex Building, </li>
                            <li>First Floor </li>
                            <li>Office 126</li>
                            <li>Nelspruit Central</li>
                            <li>Mbombela</li>
                            <li>Mpumalanga</li>
                            <li id="last">GET DIRECTIONS</li>
                          </ul>
                          </div>
                          </div>
                </div>

            </div>

            <div className="copyright">
            © 2024 Eben Mathematics & Science Academy | <span>A Plus Systems</span> 
            </div>


        </footer> */}
      </div>
    </>
  );
};

export default Home;
