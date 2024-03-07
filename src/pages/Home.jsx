import "./Home.css";
import home_page_image_1 from "../assets/home-page-image-1.png";
import home_page_image_2 from "../assets/home-page-image-2.png";
import home_page_image_3 from "../assets/home-page-image-3.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home-page-container">
        <Header page={1} />
        <div className="main">
          <div className="main-text">
            Unlock your <span>child{"'"}s full potential</span> With our{" "}
            <span>Expert tutors!</span>
          </div>
          <div className="description">
            Welcome to EMASA, your gateway to excellence in math and science!
            Our expert tutors are dedicated to enhancing your child{"’"}s
            academic performance with personalized lesson plans. Enrol today and
            witness the transformation!
          </div>

          <div className="learn-more-button">
            <Link to="/about" style={{ textDecoration: "none" }}>
              <button>LEARN MORE</button>
            </Link>
          </div>
        </div>

        <div className="images">
          <img src={home_page_image_1} alt="image-1" />
          <img src={home_page_image_2} alt="image-2" />
          <img src={home_page_image_3} alt="image-3" />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
