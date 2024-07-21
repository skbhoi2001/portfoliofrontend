import React from "react";
import Styles from "./Services.module.css";

const img = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRP9fy5-QNpKRSWAtMw1WqC4twnkQyJbaXjA&s`;

const Services = ({ data }) => {
  return (
    <div className={Styles.serviceContainer}>
      <div className={Styles.secHeading}>Comprehensive Services</div>
      <div className={Styles.serviceSectionCont}>
        {data?.services?.map((ele) => (
          <div className={Styles.eachServices}>
            <img src={ele?.image || img} alt="" className={Styles.imgIcon} />
            <div>{ele?.name}</div>
            <div>{ele?.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
