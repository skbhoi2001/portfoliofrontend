import React from "react";
import Styles from "./Approach.module.css";

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
      <div className={Styles.leftContainer}></div>
    </div>
  );
};

export default Approach;
