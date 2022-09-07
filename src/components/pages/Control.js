import React from "react";
import DispNav from "../DispNav";
import about from "../pages/styles/resources/abouut.png"
import take from "../pages/styles/resources/take.png"
import create from "../pages/styles/resources/addnew.png"
import setting from "../pages/styles/resources/settings.webp"

const Control = () => {
  return (
    <>
      <div className="p-2 body-highlight ">
        <div className="col-12  col-sm-7 col-md-5 mx-auto shadow position-relative h-100">
          <div className="divider p-4 h-50 ">
          <DispNav />
          </div>
          <div className="p-4 over h-50">
            <div className="shadow bg-highlight bg-gradient h-100 rounded-4 p-2">

            <div className="row align-items-center g-2 h-100">
                <div className="col-6 h-50 p-3 ">
                    <div className="options bg-highlight shadow-sm rounded-2 text-center py-2 h-100">
                    <img src={take} alt="Take Quiz JPG" width={60} />
                    
                    <p className="m-0 small fw-bold text-orange">Take Quiz</p>
                    </div>
                </div>
                <div className="col-6 h-50 p-3 ">
                    <div className="options bg-highlight shadow-sm rounded-2 text-center py-2 h-100">
                    <img src={create} alt="Create Quiz JPG" width={60} />
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
                        <img src={about} alt="About JPG" width={100} />
                        <p className="m-0 small fw-bold">About App</p>
                    </div>
                </div>

            </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Control;
