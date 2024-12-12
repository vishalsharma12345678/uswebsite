// Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import BrandLogo from "../ui/logo/BrandLogo";
import "../../assets/css/color-1.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-one footer-one--two">
      <ScrollToTop
        smooth
        top="80"
        color="white"
        style={{
          backgroundColor: "#FFD550",
          "&:hover": { backgroundColor: "#186265" },
        }}
      />
      <div
        className="footer-one__bg"
        style={{ backgroundImage: "url(/img/footer/footer-v2-bg.jpg)" }}
      ></div>
      <div className="shape1 float-bob-y">
        <img src="/img/shape/footer-v2-shape1.png" alt="Decoration Shape 1" />
      </div>
      <div className="shape2 float-bob-y">
        <img src="/img/shape/footer-v2-shape2.png" alt="Decoration Shape 2" />
      </div>
      <div className="footer-main">
        <div className="container">
          <div className="footer-main__bottom">
            <div
              className="row"
              style={{ display: "flex", justifyItems: "center " }}
            >
              {/* About Section */}
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".1s"
              >
                <div className="single-footer-widget footer-widget__about">
                  <div className="logo-box">
                    <Link to="/">
                      <BrandLogo imageSrc="/img/logo/logo.jpg" />
                    </Link>
                  </div>
                  <div className="footer-widget__about-inner">
                    <p className="text1">
                      At US freight Now LLC, we are committed to providing
                      innovative, reliable Dispatch solutions. With a focus on
                      timely, secure deliveries, we ensure your shipments reach
                      their destination with efficiency and care.
                    </p>
                    <p className="text2">We are available</p>
                    <p className="text3">Mon-Fri: 08:00AM to 06:00PM</p>

                    <div className="footer-social-link">
                      <a
                        target="_blank"
                        href="https://www.facebook.com/usfreightnow?mibextid=LQQJ4d"
                      >
                        <span className="icon-facebook"></span>
                      </a>
                      <a
                        target="_blank"
                        href="https://www.instagram.com/usfreightnow/"
                      >
                        <span className="icon-instagram"></span>
                      </a>
                      <a
                        target="_blank"
                        href="https://www.linkedin.com/company/us-freight-now/about/"
                      >
                        <span className="icon-linkedin"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links Section */}
              <div
                className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".2s"
              >
                {/* <div className="single-footer-widget footer-widget__links">
                  <div className="title">
                    <h2>Quick Links</h2>
                  </div>

                  <div className="footer-widget__links-box">
                    <ul>
                      <li><Link to="/about">Mission & Vision</Link></li>
                      <li><Link to="/pricing">Get Pricing Plan</Link></li>
                      <li><Link to="/team">Meet The Team</Link></li>
                      <li><Link to="/clients">Our Clients</Link></li>
                      <li><Link to="/careers">Available Positions</Link></li>
                      <li><Link to="/jobs">Job Application</Link></li>
                    </ul>
                  </div>
                </div> */}
              </div>

              {/* Our Services Section */}
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="single-footer-widget footer-widget__links services">
                  <div className="title">
                    <h2>Our Services</h2>
                  </div>

                  <div className="footer-widget__links-box">
                    <ul>
                      <li>
                        <Link to="/services">Tracking</Link>
                      </li>
                      <li>
                        <Link to="/services">Roadside Assistance</Link>
                      </li>
                      <li>
                        <Link to="/services">Load Booking</Link>
                      </li>
                      <li>
                        <Link to="/services">Invoicing</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Newsletter Section */}
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="single-footer-widget single-footer__newsletter">
                  <div className="title">
                    <h2>Newsletter</h2>
                  </div>
                  <div className="single-footer__newsletter-box">
                    <div className="single-footer__newsletter-text1">
                      <p>
                        Subscribe to our weekly newsletter to <br />
                        get information.
                      </p>
                    </div>
                    <form className="single-footer__newsletter-form">
                      <div className="single-footer__newsletter-form-input">
                        <input
                          type="email"
                          placeholder="Enter Your Email"
                          name="email"
                        />
                      </div>

                      <div className="single-footer__newsletter-btn">
                        <button className="thm-btn" type="submit">
                          <span className="txt">Subscribe Now</span>
                          <i className="icon-right-arrow"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom__inner">
            <div className="copyright-text">
              <p>
                © {currentYear} <Link to="/">US freight Now LLC,</Link> All
                Rights Reserved.
              </p>
            </div>
            <div className="copyright-menu">
              <ul>
                <li>
                  <Link to="/terms">Terms &amp; Conditions</Link>
                </li>
                <li>
                  <Link to="/privacy">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/support">Support</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
