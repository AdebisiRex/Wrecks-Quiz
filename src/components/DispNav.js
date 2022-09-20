import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DispNav = () => {
  let navigate = useNavigate()
  const [userObj, setuserObj] = useState({});
  let token = localStorage.token;
  let endpoint = "http://localhost:2300/user/dashboard"
  // useEffect(() => {
    
  //   axios
  //     .get(endpoint, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //       },
  //     })
  //     .then((res) => {
        // if (!res.data.status) {
        //   localStorage.removeItem("token");
        //   navigate("/signin");
        // } else {
        //   console.log(res.data);
        //   setuserObj(res.data)
        // }
  //     });
  // }, []);
  return (
    <>
      <div className="head bg-highlight bg-gradient rounded-4 shadow">
        <div className="row h-100 align-items-center g-0 px-1 ">
          <div className="col-2 d-flex justify-content-center ">
            <img className="dp" src={userObj.displayPicture} alt="" />
          </div>
          <div className="col-7">
            <small>Rex {userObj.firstname} {userObj.lastname}</small>
          </div>
          <div className="col-3">
            <small className="smaller "> High Score </small>
            <p className="fw-bold small m-0 ">${userObj.highestScore}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DispNav;
