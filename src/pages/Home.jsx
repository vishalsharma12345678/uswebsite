import {
  Hero,
  About,
  AboutSection,
  Fact,
  ServiceSection,
  CompanyBenefit,
  Testimonials,
  // Pricing,
  FaqSection,
  LatestProject,
  Teams,
  GoogleMap,
  // LatestPost,
  CtaThree,
} from "../components/index";

import { useRef } from "react";

const Home = () => {
  const pricingRef = useRef(null);

  const scrollToPricing = () => {
    pricingRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Hero scrollToPricing={scrollToPricing} />

      <About />
      <Fact />
      <AboutSection />
      <ServiceSection />
      <CompanyBenefit />
      <Testimonials />
      {/* <div ref={pricingRef}>
        <Pricing />
      </div> */}
      <FaqSection />
      <LatestProject />
      <Teams />
      <GoogleMap />
      {/* <LatestPost /> */}
      <CtaThree />
    </>
  );
};

export default Home;
