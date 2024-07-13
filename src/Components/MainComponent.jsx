import React from "react";
import Navbar from "./Navbar/Navbar";
import HomeMain from "./HomeMain/HomeMain";
import ClientBrands from "./ClientsBrands/ClientBrands";

const MainComponent = ({ data }) => {
  return (
    <div>
      <Navbar data={data} />
      <div style={{ paddingTop: "80px" }}>
        <HomeMain data={data} />
        <ClientBrands data={data} />
      </div>
    </div>
  );
};

export default MainComponent;
