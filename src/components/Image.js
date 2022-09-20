import React from "react";
import gold from "./img/gold.png";
import silver from "./img/silver.png";
import bronze from "./img/bronze.png";

const Image = ({ score }) => {
  if (score >= 12) {
    return (
      <>
        <img  src={gold} width={170} alt="" />
      </>
    );
  } else if (score >= 7) {
    return (
      <>
        <img  src={silver} width={220} alt="" />
      </>
    );
  }
  return (
    <>
      <img  src={bronze} width={170} alt="" />
    </>
  );
};

export default Image;
