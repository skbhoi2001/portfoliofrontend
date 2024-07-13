import React from "react";
import Styles from "./ClientBrands.module.css";

const ClientBrands = ({ data }) => {
  return (
    <div className={Styles.clientContainer}>
      <div className={Styles.containerHeading}>Featured Clients and Brands</div>
      <div className={Styles.contDesc}>
        Highlighting collaborations in building effective digital products for
        renowned brands
      </div>
      <div className={Styles.logoContainer}>
        {data?.brands?.map((ele) => (
          <a href={ele?.url}>
            <img
              style={{ height: "80px", width: "150px", objectFit: "contain" }}
              src={ele?.logo}
              alt=""
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default ClientBrands;
