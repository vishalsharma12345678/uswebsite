import React from "react";
import { Link } from "react-router-dom"; // Adjust if using Next.js or another routing library
import Accordion from "react-bootstrap/Accordion";

const GoogleMap = () => {
  return (
    <section className="google-map-one">
      <div className="container clearfix">
        <div className="google-map-one__content clearfix">
          <div className="inner-box">
            <div className="title-box text-center">
              <h2>Contact With Us</h2>
            </div>
            <Accordion
              defaultActiveKey="0"
              className="accordion-two map-accordion"
              style={{ backgroundColor: "black" }}
            >
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <h2 style={{ color: "white" }}>
                    <span></span>
                    US Office
                  </h2>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="accordion-content">
                    <div className="inner">
                      <ul className="accordion-content-list">
                        <li>
                          <div className="icon-box">
                            <span className="icon-pin"></span>
                          </div>
                          <p>11569 S HWY 6 #250 SUGAR LAND TX 77498</p>
                        </li>
                        <li>
                          <div className="icon-box">
                            <span className="icon-paper-plane"></span>
                          </div>
                          <p>
                            <Link to="mailto:info@usfrn.com">
                              info@usfrn.com
                            </Link>
                          </p>
                        </li>
                        <li>
                          <div className="icon-box">
                            <span className="icon-out-call"></span>
                          </div>
                          <p>
                            <Link to="tel:+(629)555-0129">+(629)555-0129</Link>
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
        className="google-map-one__map"
        allowFullScreen
        title="Google Map"
      ></iframe>
    </section>
  );
};

export default GoogleMap;
