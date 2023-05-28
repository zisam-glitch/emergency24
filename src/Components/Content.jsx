import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaBookOpen } from "react-icons/fa";
import { FaTeeth } from "react-icons/fa";
import { FaTeethOpen } from "react-icons/fa";
import { FaTooth } from "react-icons/fa";
import { FaCloudsmith } from "react-icons/fa";
import { FaDrumSteelpan } from "react-icons/fa";
import { FaHollyBerry } from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import img1 from "../Images/tools.jpg";
import img2 from "../Images/pain.jpg";
import img3 from "../Images/dots.png";
import FAQS from "./faqss";
import Testimonial from "./testimonial";
import TestimonialMob from "./testimonial-mob";

function Content() {
  return (
    <div>
      <section class="heros">
        <div className="hero">
          <div className="wraper-hero">
            <div className="sec-1">
              <div className="w-wrap">
                <h1>Emergency Dentist</h1>
                <h5>
                  Covering LEEDS 24 Hours 7 days of the week including National
                  and Bank Holidays
                </h5>
                <p>
                  <b>£45 consultation</b>
                </p>
                <p>£90* out-of-hours consultation</p>
              </div>
            </div>
            <div className="sec-2">
            <a href="tel:0113 322 8354">
              <button className="button">
                <span>
                  <BsFillTelephoneFill />
                </span>
                <span>
                  CALL US NOW <br /> 0113 322 8534
                </span>
              </button>
              </a>
              <a href="https://booking.setmore.com/scheduleappointment/2a6e775a-2414-4e41-aecb-c16634059d7c">
              <button className="button">
                <span>
                  <FaBookOpen />
                </span>
                <span>BOOK ONLINE</span>
              </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section class="about" id="about">
        <div class="wrap-about">
          <div className="sect-1">
            <h4>How much does it cost?</h4>
            <p>
              Consultation (include exam, X-rays and diagnosis) appointment fee
            </p>
            <ul>
              <li>£45 Monday to Friday between 9am – 5pm</li>
              <li>
                £90 Out of Hours – Weekends 9am – 8pm and Weekdays 5pm – 8pm
              </li>
              <li>contact us for prices and appointments after 8pm</li>
            </ul>
            <p>
              All patients receive an individual treatment plan with clearly
              illustrated costs prior to undergoing emergency dental treatment.
            </p>
            <ul>
              <li>Tooth Extraction – from £120</li>
              <li>Filling (temporary/ composite/ amalgam) – from £99 </li>
              <li>Antibiotics – £25</li>
              <li>Irrigation/cleaning of gums &/or wisdom tooth – £75</li>
              <li>Dry socket – £60</li>
              <li>Accessing & dressing a tooth – from £170 </li>
              <li>Surgical drainage of abscess – £160</li>
              <li>Recement bridge/crown/veneer – from £60 </li>
              <li>
                Re-make or repair temporary bridge/crown/veneer – from £70
              </li>
              <li>Re-fixing a tooth loosened by trauma – £195</li>
            </ul>
            <p>
              <b>
                Anyone can book an appointment online with a dentist 24 hours a
                day, 7 days a week.
              </b>
            </p>
          </div>
          <div className="sect-2">
            <div className="imgzz">
              <img src={img3} alt="" />
              <img src={img1} alt="" />
            </div>
            <div className="img3">
              <img
                src={img2}
                alt=""
                style={{ borderRadius: "0px 0px 170px 170px" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section class="services" id="services">
        <div className="sevice-wraper">
          <h1>Our Emergency Dentist Can Help With The Following</h1>
          <div className="icons">
            <div className="card-icon">
              <span className="icoz">
                <FaTeeth />
              </span>
              <h4>Toothache</h4>
            </div>
            <div className="card-icon">
              <span>
                <FaTeethOpen />
              </span>
              <h4>Sensitivity</h4>
            </div>
            <div className="card-icon">
              <span>
                <FaTooth />
              </span>
              <h4>Broken Filling Tooth</h4>
            </div>
            <div className="card-icon">
              <span>
                <FaCloudsmith />
              </span>
              <h4>Swelling/Abscess</h4>
            </div>
            <div className="card-icon">
              <span>
                <FaTeethOpen />
              </span>
              <h4>Denture Ajdustment</h4>
            </div>
            <div className="card-icon">
              <span>
                <FaTeeth />
              </span>
              <h4>Re-cement Crowns</h4>
            </div>
            <div className="card-icon">
              <span>
                <FaDrumSteelpan />
              </span>
              <h4>Dental Trauma</h4>
            </div>
            <div className="card-icon">
              <span>
                <FaHollyBerry />
              </span>
              <h4>Painful Gums</h4>
            </div>
          </div>
        </div>
      </section>

      <section class="Faqs-wrap" id="faqs">
        <h1>FAQ</h1>
        <h5>
          <b>Frequently Asked Question</b>
        </h5>
        <FAQS />
      </section>
      <section className="appoinment">
        <div className="wraperz">
          <div className="sectt-1">
            <h4>Book An Emergency Dental Appointment With US TODAY!</h4>
            <h1>Say Goodbye TO Your Dental Pain!</h1>
          </div>
          <div className="sectt-2">
          <a href="https://booking.setmore.com/scheduleappointment/2a6e775a-2414-4e41-aecb-c16634059d7c">
            <button>
              <span>
                {" "}
                <FaRegCalendarCheck />{" "}
              </span>
              <span>Book Here</span>
            </button>
          </a>
          </div>
        </div>
      </section>
      <section className="reviews" id="reviews">
        <div className="aa-reviews">
          <h1>What Patients Say About Us</h1>
          <div className="test">
            <Testimonial />
          </div>
          <div className="test-mob">
            <TestimonialMob />
          </div>
        </div>
      </section>
      <section className="contact" id="contact">
        <div className="card-contact">
          <div className="red-part">
            <div className="address">
              <span>
                <FaMapMarkerAlt />
              </span>
              <span>
                <h4>Address</h4>
                <p>
                  7 – 9 Branch Road,
                  <br />
                  LEEDS,
                  <br />
                  LS12 3AQ
                </p>
              </span>
            </div>
            <div className="address">
              <span>
                <FaPhone />
              </span>
              <span>
                <h4>Phone</h4>
                <p>0113 322 8354</p>
              </span>
            </div>
            <div className="address">
              <span>
                <HiMail />
              </span>
              <span>
                <h4>Email</h4>
                <p>hello@emergency247dentist.co.uk</p>
              </span>
            </div>
          </div>
        </div>
        <div className="white-part">
          <div className="contact-form">
            <h3>Send us a message</h3>
            <form
              action="https://formspree.io/f/meqwwrvl"
              method="POST"
              className="contact-inputs"
            >
              <input
                className="inputs"
                type="text"
                name="username"
                placeholder="Your Name"
                autoComplete="off"
                required
              />

              <input
                className="inputs"
                type="email"
                name="Email"
                placeholder="Your Email"
                autoComplete="off"
                required
              />
              <input
                className="inputs"
                type="number"
                name="number"
                placeholder="Your Phone Number"
                autoComplete="off"
                required
              />

              <textarea
                className="inputs"
                name="message"
                placeholder="What's your emergency?"
                cols="30"
                rows="6"
                autoComplete="off"
                required
              ></textarea>

              <input type="submit" value="Send Request" className="submit" />
            </form>
          </div>
          <div className="button-part">
          <a href="tel:0113 322 8354">
            <button className="button">
              <span>
                <BsFillTelephoneFill />
              </span>
              <span>
                CALL US NOW <br /> 0113 322 8534
              </span>
            </button>
            </a>
            <a href="https://booking.setmore.com/scheduleappointment/2a6e775a-2414-4e41-aecb-c16634059d7c">
            <button className="button">
              <span>
                <FaBookOpen />
              </span>
              <span>BOOK ONLINE</span>
            </button>
             </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Content;
