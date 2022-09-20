import React from "react";
import DispNav from "../DispNav";
import about from "../pages/styles/resources/abouut.png"
import take from "../pages/styles/resources/take.png"
import create from "../pages/styles/resources/addnew.png"
import info from "../pages/styles/resources/about.png"
import setting from "../pages/styles/resources/settings.webp";
import axios from "axios";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";

import { useEffect } from "react";
const Control = () => {
  let navigate = useNavigate()
  let token = localStorage.token;
  let endpoint = "http://localhost:2300/user/dashboard"

  // useEffect(() => {
  //   axios.get(endpoint, { 
  //     headers: {
  //       "Authorization":`Bearer ${token}`,
  //       "Content-Type":"application/json",
  //       "Accept":"application/json"
  //   } 
  // }).then((res)=>{
    // if(!res.data.status){
    //   localStorage.removeItem("token");
    //   navigate("/signin")
    // }else{
    //   console.log(res.data)
    // }
  // })
  // }, []);

  const takeQuiz=()=>{
    navigate("/takequiz")
  }
  const createQuiz=()=>{
    navigate("/createQuiz")
  }
  return (
    <>
      <div className="body-highlight ">
        <div className="col-12  col-sm-7 col-md-5 mx-auto shadow position-relative h-100">
          <div className="divider p-4 h-50 ">
          <DispNav />
          </div>
          <div className="p-4 over h-50 mb-4">
            <div className="shadow bg-highlight bg-gradient h-100 rounded-4 p-2">

            <div  className="row align-items-center g-2 h-100">
                <div onClick={takeQuiz} className="col-6 h-50 p-3 ">
                    <div className="options bg-highlight shadow-sm rounded-2 text-center py-2 h-100">
                    <img src={take} alt="Take Quiz JPG" width={60} />
                    
                    <p className="m-0 small fw-bold text-orange">Take Quiz</p>
                    </div>
                </div>
                <div onClick={createQuiz} className="col-6 h-50 p-3 ">
                    <div className="options bg-highlight shadow-sm rounded-2 text-center py-2 h-100">
                    <img src={create} alt="Create Quiz JPG" width={50} />
                        <p className="m-0 small fw-bold">Create Quiz</p>
                    </div>
                </div>
                <div className="col-6 h-50 p-3 ">
                    <div className="options bg-highlight shadow-sm rounded-2 text-center py-3 h-100">
                    <img src={setting} alt="Create Quiz JPG" width={60} />
                        <p className="m-0 small fw-bold">Settings</p>
                    </div>
                </div>
                <div className="col-6 h-50 p-3 ">
                    <div className="options bg-highlight shadow-sm rounded-2 text-center py-3 h-100">
                        <img src={about} alt="About JPG" width={80} />
                        <p className="m-0 small fw-bold">About</p>
                    </div>
                </div>

            </div>
            </div>

          </div>
          <div className="h-25"></div>
          <div className="p-4">
            <div className="p-2 btn w-100 mb-3 rounded-2 bg-white">
              <img width={25} src={info} alt="" /> <span className="small text-orange fw-bold">More Information</span>
            </div>
            <div className="p-2 btn w-100 mb-3 rounded-2 bg-white">
              <img width={25} src={info} alt="" /> <span className="small text-orange fw-bold">Sign Out</span>
            </div>
         
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default Control;
