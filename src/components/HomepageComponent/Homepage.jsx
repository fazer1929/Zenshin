import React from "react";
import { Link } from "react-router-dom";
import ExampleServices from "./ExampleServices";
import Jumbotron from "./Jumbotron";
import Section3 from "./Section3";
import Testimonial from "./Testimonial";

function Homepage() {
  return (
    <div>
      <Jumbotron />
      <ExampleServices />
      <Section3 />
      <Testimonial />
    </div>
  );
}

export default Homepage;
