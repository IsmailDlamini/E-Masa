import Header from "../components/Header";
import "./Contact.css";
import email_icon from "../assets/email-icon.png";
import phone_icon from "../assets/phone-icon.png";
import location_icon from "../assets/location-icon.png";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <div className="contact-page-container">
        <Header />

        <div className="main">
          <div className="text-one">
            CONTACT <span>US</span>
          </div>

          <div className="text-two">
            Are you looking for extra classes?
            <br /> Please fill in the form below and we{"'"}ll get back to you
            in due time.
          </div>

          <div className="form-container">
            <form action="" method="POST">
              <label htmlFor="name">NAME:</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Please enter your name & surname."
              />
              <label htmlFor="number">PHONE NUMBER:</label>
              <input
                type="text"
                name="number"
                id="number"
                placeholder="Please enter your phone number."
              />

              <label htmlFor="grade">GRADE:</label>
              <select name="grade" id="grade">
                <option value="Please select the appropriate grade">
                  Please select the appropriate grade
                </option>
                <option value="Grade 1">Grade 1</option>
                <option value="Grade 2">Grade 2</option>
                <option value="Grade 3">Grade 3</option>
                <option value="Grade 4">Grade 4</option>
                <option value="Grade 5">Grade 5</option>
                <option value="Grade 6">Grade 6</option>
                <option value="Grade 7">Grade 7</option>
                <option value="Grade 8">Grade 8</option>
                <option value="Grade 9">Grade 9</option>
                <option value="Grade 10">Grade 10</option>
                <option value="Grade 11">Grade 11</option>
                <option value="Grade 12">Grade 12</option>
              </select>

              <label htmlFor="subject">SUBJECT:</label>
              <select name="subject" id="subject">
                <option value="Please pick the appropriate subject/s">
                  Please pick the appropriate subject/s
                </option>
                <option value="Mathematics">Mathematics</option>
                <option value="Science">Science</option>
                <option value="Maths and science">Maths and Science</option>
              </select>

              <label htmlFor="enquiry">ENQUIRY:</label>
              <textarea
                name="enquiry"
                id="enquiry"
                placeholder="Please type out your enquiry."
              ></textarea>

              <div className="submit-button">
                <button>SUBMIT</button>
              </div>
            </form>
          </div>


          <div className="more-info">
            <div className="left">
                <div className="info-1">Alternatively  you can come see us at:</div>
                <div className="info-2">
                  <div><img src={location_icon} alt="location" /></div>
                  <ul>
                    <li>32 Bell Street,</li>
                    <li>Caltex Building, </li>
                    <li>First Floor Office 126</li>
                    <li>get directions</li>
                  </ul>
                </div>
            </div>
            <div className="right">
                    <div className="info-1">
                    Or you can get in touch directly with us at one of contact details:
                    </div>

                    <div className="info-2"><img src={email_icon} alt="email" /> admin@emasa.org.za</div>
                    <div className="info-2"><img src={phone_icon} alt="phone" /> 074 826 3936</div>
            </div>

          </div>


        </div>

        <Footer />
      </div>
    </>
  );
};

export default Contact;
