import React from "react";
import Styles from "./Projects.module.css";

let imgT = "https://placehold.co/600x400/orange/white";

const Project = ({ data }) => {
  return (
    <div className={Styles.projectContainer}>
      <div className={Styles.heading}>My Work</div>
      <div className={Styles.projMainCont}>
        {data?.projects?.map((ele) => (
          <div className={Styles.projCOnt}>
            <div className={Styles.imgSec}>
              <img
                src={ele?.images || imgT}
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: "0px 8px 8px 0px",
                }}
                alt=""
              />
            </div>
            <div className={Styles.leftCOnt}>
              <div>{ele?.name}</div>
              <div>{ele?.projectType}</div>
              <div>{ele?.description}</div>
              <div>
                {ele?.productKeywords?.map((ele) => (
                  <div>{ele}</div>
                ))}
              </div>
              <div></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
