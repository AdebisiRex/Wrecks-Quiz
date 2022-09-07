import React from "react";

const DispNav = () => {
  return (
    <>
      <div className="head bg-highlight bg-gradient rounded-4 shadow">
        <div className="row h-100 align-items-center g-0 px-1 ">
          <div className="col-2 d-flex justify-content-center ">
            <div className="dp"></div>
          </div>
          <div className="col-7">
            <small>Adesina Adebisi</small>
          </div>
          <div className="col-3">
            <small className="smaller "> Highest Score </small>
            <p className="fw-bold small m-0 ">$25,000</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DispNav;
