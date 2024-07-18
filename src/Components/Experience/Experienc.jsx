import React from "react";
import Styles from "./Experience.module.css";

const Experienc = ({ data }) => {
  return (
    <div className={Styles.expContainer}>
      <div className={Styles.expHeader}>Experience</div>
      <div className={Styles.expDetailsCont}>
        <div className={Styles.leftCont}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={Styles.rightCont}>sdf</div>
      </div>
    </div>
  );
};

export default Experienc;
