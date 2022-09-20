import React, { useEffect } from "react";
import bronze from "../img/bronze.png";
import gold from "../img/gold.png";
import silver from "../img/silver.png";
import DispNav from "../DispNav";
import Footer from "../Footer";
import { useState } from "react";
import Image from "../Image";
import { useNavigate } from "react-router-dom";
// import "./styles/welcome-page.css"

const End = () => {
    let navigate =useNavigate()
    const [scored, setscored] = useState("")
    const [prize, setprize] = useState("")
    useEffect(()=>{
        setscored(localStorage.correct);
        setprize(localStorage.prize);

        return(()=>{
            console.log("unmount")
        //     localStorage.removeItem("correct")
        //     localStorage.removeItem("prize")
        })
        
    },[])

    
    
    
  return (
    <div className="body-highlight">
      <div className="col-12 p-4 col-sm-7 col-md-5 mx-auto shadow h-100">
        <div className="mb-5">
          <DispNav />
        </div>
        <div className="row align-items-center">
          <div className="d-flex  justify-content-center position-relative">
            
            <Image score={scored}/>
            <div className="resultImage"></div>
          </div>
          <p className="my-3 text-center small fw-bold">You answered {scored} questions correctly of 15 questions</p>{" "}
          <h1 className="text-center fw-bold text-dark-brown">Cash Prize: <br /> $ {prize}</h1>

          <button onClick={()=>navigate('/takequiz')} className="btn signin">Play Again </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default End;
