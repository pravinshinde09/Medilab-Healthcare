import React from "react";
import About from "./About"
import WhyChooseUS from "./WhyChooseUS";
import Gallery from "./Gallery";
import LocationMap from "./LocationMap";
import Pramotors from "./Pramotors";
import AreaOfServices from "./AreaOfServices";
import OurMission from "./OurMission";
import StickyForm from "../../components/common/StickyForm";

const AboutUs = () => {
  return (
    <>
      <About />
      <WhyChooseUS />
      <AreaOfServices />
      <Pramotors />
      <OurMission />
      <Gallery />
      <LocationMap />
      <StickyForm />
    </>
  );
};

export default AboutUs;
