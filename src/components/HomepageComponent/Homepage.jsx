import React from "react";
import { Link } from "react-router-dom";
import ExampleServices from "./ExampleServices";
import Jumbotron from "./Jumbotron";
import Section3 from "./Section3";
import Testimonial from "./Testimonial";
import Fade from "react-reveal/Fade";

function Homepage() {
  return (
    <div>
      <Fade bottom>
        <Jumbotron />
        <ExampleServices />
        <Section3 />
        <Testimonial />
      </Fade>
    </div>
  );
}

export default Homepage;
