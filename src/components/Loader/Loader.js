import React from "react";
import Style from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={Style.wrapper}>
      <div className={Style.loader}></div>
    </div>
  );
};

export default Loader;
