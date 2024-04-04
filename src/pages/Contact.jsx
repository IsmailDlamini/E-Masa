import Header from "../components/Header";
import "./Contact.css";
import email_icon from "../assets/email-icon.png";
import phone_icon from "../assets/phone-icon.png";
import location_icon from "../assets/location-icon.png";
import Footer from "../components/Footer";
import { useState } from "react";

const Contact = () => {
  const direction_link =
    "https://www.google.com/maps/dir/-25.443947,30.9628904/emasa/@-25.4593794,30.9512708,14z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x1ee84bca7beb83cf:0x2522498576ddb2d3!2m2!1d30.9780883!2d-25.4730239?entry=ttu";

  const [formData, setFormData] = useState({
    name: "",
    number: "",
    grade: "",
    subject: "",
    enquiry: "",
  });

  const handleSubmit = async (e) => {
    // https://emasa.cibs.tech/send-mail.php --> external use
    // /send-mail.php --> use on server

    e.preventDefault();
    try {
      const response = await fetch("https://emasa.cibs.tech/send-mail.php", {
        // if you are testing refer to the top line of the function to find all the links that you need to use

        //we are using a php server and it needs to be used on Xamp if you are testing locally to make sure that the email sending does work
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      // const data = await response.text();
      alert("Email sent successfully!");
    } catch (error) {
      console.error("There was a problem with sending the email:", error);
      // we need to console the information for testing purposes

      alert(
        "An error occurred while sending the email. Please try again later."
      );
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="contact-page-container">
        <Header page={3} />

        <div className="main">
          <div className="text-one">
            CONTACT <span>US</span>
          </div>

          <div className="text-two">
            Are you looking for extra classes? Please fill in the form below and
            we{"'"}ll get back to you in due time.
          </div>

          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">NAME:</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Please enter your name & surname."
                onChange={handleChange}
                value={formData.name}
                required
              />
              <label htmlFor="number">PHONE NUMBER:</label>
              <input
                type="text"
                name="number"
                id="number"
                placeholder="Please enter your phone number."
                onChange={handleChange}
                value={formData.number}
                required
              />

              <label htmlFor="grade">GRADE:</label>
              <select
                name="grade"
                id="grade"
                onChange={handleChange}
                value={formData.grade}
                required
              >
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
              <select
                name="subject"
                id="subject"
                onChange={handleChange}
                value={formData.subject}
                required
              >
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
                onChange={handleChange}
                value={formData.enquiry}
                required
              ></textarea>

              <div className="submit-button">
                <button>SUBMIT</button>
              </div>
            </form>
          </div>

          <div className="more-info">
            <div className="left">
              <div className="info-1">
                Alternatively you can come see us at:
              </div>
              <div className="info-2">
                <div>
                  <img src={location_icon} alt="location" />
                </div>
                <ul>
                  <li>32 Bell Street,</li>
                  <li>Caltex Building, </li>
                  <li>First Floor Office 126</li>
                  <br />
                  <li id="direction">
                    <a href={direction_link}>Get Directions</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="right">
              <div className="info-1">
                Or you can get in touch directly with us at one of contact
                details:
              </div>

              <div className="info-2">
                <img src={email_icon} alt="email" /> admin@emasa.org.za
              </div>
              <div className="info-2">
                <img src={phone_icon} alt="phone" /> 074 826 3936
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Contact;
