// import React from "react";
import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import CircleTextThree from "../ui/circle/CircleText"; // Adjust the import path as per your project structure

const AboutSection = () => {
  const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(window.matchMedia(query).matches);

    useEffect(() => {
      const mediaQueryList = window.matchMedia(query);
      const listener = (event) => setMatches(event.matches);
      mediaQueryList.addListener(listener);
      return () => mediaQueryList.removeListener(listener);
    }, [query]);

    return matches;
  };
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  return (
    <section className="about-three padding">
      <div className="container">
        <div className="row">
          {/* <!--Start About Three Img--> */}
          <div
            className="col-xl-6"
            style={isSmallScreen ? { display: "none" } : {}}
          >
            <div className="about-three__img">
              <div className="shape1">
                <img src="/img/shape/about-v3-shape1.png" alt="Shape" />
              </div>
              <div
                className="about-three__img1 wow fadeInLeft"
                data-wow-delay=".1s"
              >
                <img src="/img/about/about-v3-img1.jpg" alt="About Image 1" />
              </div>
              <div
                className="about-three__img2 wow fadeInRight"
                data-wow-delay=".1s"
              >
                <img src="/img/about/about-v3-img2.jpg" alt="About Image 2" />
              </div>
              {/* <CircleTextThree /> */}
            </div>
          </div>
          {/* <!--End About Three Img--> */}

          {/* <!--Start About Three Content--> */}
          <div className="col-xl-6">
            <div className="about-three__content">
              <div className="sec-title-style3">
                <div className="sub-title">
                  <div className="icon">
                    <img
                      src="/img/icon/title-marker-4.png"
                      alt="Title Marker"
                    />
                  </div>
                  {/* <h5>About Company</h5> */}
                  <h2>Benefits of Partnering with Us</h2>
                </div>
              </div>
              <div className="about-three__content-text">
                <p>
                  US Freight now is a truck dispatch company that offers
                  professional truck dispatch services for fleet owner operators
                  & truck transport companies. Our team of skilled dispatchers
                  in USA & Canada specializes in managing freight operations,
                  ensuring efficient coordination between shippers, carriers,
                  and receivers.
                </p>
              </div>

              <ul className="about-three__content-list">
                <li>
                  <div className="icon-box">
                    <span className="icon-global-network"></span>
                  </div>

                  <div className="text-box">
                    <h3>Quicker deliveries, satisfied customers.</h3>
                    <p>Improved delivery times and customer satisfaction.</p>
                  </div>
                </li>

                <li>
                  <div className="icon-box">
                    <span className="icon-enter-product-details"></span>
                  </div>

                  <div className="text-box">
                    <h3>Lower costs, greater efficiency.</h3>
                    <p>Reduced logistics costs and increased efficiency</p>
                  </div>
                </li>
                <li>
                  <div className="icon-box">
                    <span className="icon-enter-product-details"></span>
                  </div>

                  <div className="text-box">
                    <h3>Technology and expertise.</h3>
                    <p>Access to advanced technology and expertise</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* <!--End About Three Content--> */}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
