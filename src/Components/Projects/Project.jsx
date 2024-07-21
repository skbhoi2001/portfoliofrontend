import React from "react";
import Styles from "./Projects.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";

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
              <div className={Styles.projName}>{ele?.name}</div>
              <div className={Styles.companyName}>Company Name</div>
              <div className={Styles.projeDesc}>{ele?.description}</div>
              <div className={Styles.projType}>{ele?.projectType}</div>
              <div className={Styles.projBottomArea}>
                <div className={Styles.keywordsCont}>
                  {ele?.productKeywords?.map((ele) => (
                    <div className={Styles.keywordsElem}>{ele}</div>
                  ))}
                </div>
                <div className={Styles.redirectCOnt}>
                  <GitHubIcon />
                  <span>Github</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
