import React from "react";
import Styles from "./Approach.module.css";
import gifImage from "./Defination.gif";

const Approach = ({ data }) => {
  return (
    <div className={Styles.approachContainer}>
      <div className={Styles.appLeftSec}>
        <div className={Styles.appHeading}>
          Approach towards the <br /> project
        </div>
        <div className={Styles.eachApproachSec}>
          {data?.approach?.map((ele) => (
            <div className={Styles.eachElemApp}>{ele?.name}</div>
          ))}
        </div>
      </div>
      <div className={Styles.leftContainer}>
        <img src={gifImage} alt="" style={{ height: "100%", width: "100%" }} />
      </div>
    </div>
  );
};

export default Approach;
