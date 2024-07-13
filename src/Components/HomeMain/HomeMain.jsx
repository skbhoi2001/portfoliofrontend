import React from "react";
import Styles from "./HomeMain.module.css";

const HomeMain = ({ data }) => {
  console.debug(data);
  const keyrole = data?.roleKeys?.[0]?.split(",");

  return (
    <div className={Styles.mainContainer}>
      <div className={Styles.roleContainer}>
        <div className={Styles.mainRoleText}>{data?.mainrole}</div>
        <div className={Styles.nameMyself}>{data?.name}</div>
      </div>
      <div className={Styles.keyroleContainer}>
        <div className={Styles.keyLev1}>
          <div className={Styles.type1TextLeft}>{keyrole?.[0]}</div>
          <div className={`${Styles.commonType2} ${Styles.commonT2Lem}`}>
            {keyrole?.[1]}
          </div>
        </div>
        <div className={Styles.keyLev2}>
          <div className={`${Styles.commonType2} ${Styles.commonT3Lem}`}>
            {keyrole?.[2]}
          </div>
          <div className={`${Styles.commonType2} ${Styles.commonT4Lem}`}>
            {keyrole?.[3]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMain;
