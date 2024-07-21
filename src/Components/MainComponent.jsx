import React from "react";
import Navbar from "./Navbar/Navbar";
import HomeMain from "./HomeMain/HomeMain";
import ClientBrands from "./ClientsBrands/ClientBrands";
import About from "./About/About";
import Approach from "./Approach/Approach";
import Experienc from "./Experience/Experienc";
import Project from "./Projects/Project";
import Services from "./Services/Services";
import Contact from "./Contact/Contact";

const MainComponent = ({ data }) => {
  return (
    <div>
      <Navbar data={data} />
      <div style={{ paddingTop: "80px" }}>
        <HomeMain data={data} />
        <ClientBrands data={data} />
        <About data={data} />
        <Approach data={data} />
        <Experienc data={data} />
        <Project data={data} />
        <Services data={data} />
        <Contact data={data} />
      </div>
    </div>
  );
};

export default MainComponent;
