import Header from "../components/Header";
import "./About.css";
import reason_image_1 from "../assets/reason-image-1.png";
import reason_image_2 from "../assets/reason-image-2.png";
import reason_image_3 from "../assets/reason-image-3.png";
import reason_image_4 from "../assets/reason-image-4.png";
import about_image_1 from "../assets/about-image-1.png";
import about_image_2 from "../assets/about-image-2.png";
import about_image_3 from "../assets/about-image-3.png";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="about-page-container">
        <Header page={2} />

        <div className="main-content">
          <div className="text-one">Why Choose Us?</div>

          <div className="reasons">
            <div className="reason">
              <div className="image">
                <img src={reason_image_1} alt="" />
              </div>
              <div className="text">
                Our experienced teachers and individualized instruction have a
                proven track record of helping students excel in math and
                science.
              </div>
            </div>
            <div className="reason">
              <div className="image">
                <img src={reason_image_2} alt="" />
              </div>
              <div className="text">
                We offer flexible scheduling options to accommodate busy
                students and parents
              </div>
            </div>

            <div className="reason">
              <div className="image">
                <img src={reason_image_3} alt="" />
              </div>
              <div className="text">
                Our school is conveniently located, making it easy for students
                to attend extra lessons after school.
              </div>
            </div>

            <div className="reason">
              <div className="image">
                <img src={reason_image_4} alt="" />
              </div>
              <div className="text">
                We keep the class size small for more personal attention for
                each student
              </div>
            </div>
          </div>

          <div className="text-two">OUR APPROACH</div>
          <div className="approach">
            Our resident math teacher uses a personalized approach to teaching.
            They first evaluate each scholar{"'"}s curriculum and past
            performance in math to gain a better understanding of their
            strengths and weaknesses. Based on this information, the teacher
            then creates a tailored curriculum specifically for that student.
            This personalized curriculum includes a variety of practice
            resources and materials from different schools and curriculums,
            allowing the student to receive a well-rounded education and achieve
            the best possible results. Our ultimate goal is to help the student
            succeed in math by providing them with the resources and support
            they need to improve their skills and understanding of the subject.
          </div>

          <div className="enrol-button">
            <Link to={"/contact"}>
              <button>ENROL TODAY</button>
            </Link>
          </div>

          <div className="images">
            <img src={about_image_1} alt="about-image" />
            <img src={about_image_2} alt="about-image" />
            <img src={about_image_3} alt="about-image" />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default About;
