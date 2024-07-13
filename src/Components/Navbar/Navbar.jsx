import React from "react";
import Styles from "./Navbar.module.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import GitHubIcon from "@mui/icons-material/GitHub";

const Navbar = ({ data }) => {
  return (
    <div className={Styles.navContainer}>
      <div className={Styles.desktopCOntainer}>
        <div className={Styles.leftNavData}>
          <div className={Styles.navNameText}>{data?.name},</div>
          <div className={Styles.rolenavText}>{data?.navRole}</div>
        </div>
        <div className={Styles.rightNav}>
          <div className={Styles.navCont}>
            <div className={Styles.activeButton}>Home</div>
            <div>About</div>
            <div>Works</div>
            <div>Contact</div>
            <div className={Styles.cvButton}>CV</div>
          </div>
          <div className={`${Styles.navContT2}`}>
            <div>
              <LinkedInIcon style={{ fontSize: "22px" }} />
            </div>
            <MoreVertIcon style={{ fontSize: "22px", color: "#fff" }} />
            <div>
              <GitHubIcon style={{ fontSize: "22px" }} />
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;
