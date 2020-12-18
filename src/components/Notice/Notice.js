import React from "react";
import Style from "./Notice.module.scss";

const Notice = ({ message }) => {
  return (
    <div className={Style.wrapper}>
      <div className={Style.notice}>{message}</div>
    </div>
  );
};

export default Notice;
