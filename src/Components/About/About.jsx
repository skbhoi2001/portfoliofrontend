import React from "react";
import Styles from "./About.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";

const About = ({ data }) => {
  console.debug(data);
  return (
    <div className={Styles.aboutContainer}>
      <div>
        <img src={data?.profileImage} alt="" className={Styles.imageProfile} />
      </div>
      <div className={Styles.aboutTextContainer}>
        <div className={Styles.topName}>
          I am <span className={Styles.nameBrand}>{data?.name}</span>,
        </div>
        <div className={Styles.textAboutCont}>{data?.aboutMeLayer1}</div>
        <div className={Styles.textAboutCont}>{data?.aboutMeLayer2}</div>
        <div className={Styles.iconsMainCont}>
          {data?.aboutKit?.map((ele) => (
            <div className={Styles.iconsContainer}>
              <img
                src={ele?.logo}
                style={{ height: "40px", width: "40px" }}
                alt=""
              />
              <div className={Styles.iconText}>{ele?.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
