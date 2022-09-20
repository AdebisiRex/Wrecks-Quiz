import React from "react";
import DispNav from "../DispNav";
import "../pages/styles/takequiz.css";
import next from "../pages/styles/resources/settings-clear.webp";
import Footer from "../Footer";
import OffCanvasDisplayScore from "../OffCanvasDisplayScore";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const TakeQuiz = () => {
  let navigate = useNavigate();
  const [questiosArray, setquestiosArray] = useState([]);
  const [dispQuestion, setdispQuestion] = useState("");
  const [dispScore, setdispScore] = useState("");
  const [selected, setselected] = useState("");
  const [played, setplayed] = useState(0);
  const [score, setscore] = useState(0);

  useEffect(() => {
    // setdispScore(scores[played])
    // let endpoint
    // axios.get(endpoint).then((response) => {
    //   if (response.data.status) {
    //     setquestiosArray(response.data.result);
    //   } else {
    //     alert("Check Server Error");
    //   }
    // });
    setdispScore(0)
    let allQuestions = JSON.parse(localStorage.set_questions);
    let ab = Math.floor(Math.random() * 10);
    setquestiosArray(allQuestions);
    setdispQuestion(() => allQuestions[ab]);
  }, []);

  let scores = [
    "0",
    "500",
    "1,000",
    "2,000",
    "3,000",
    "7,500",
    "10,000",
    "12,500",
    "15,000",
    "25,000",
    "50,000",
    "100,000",
    "250,000",
    "500,000",
    "1 Million",
  ];

  let index = 0;
  const nextQuestion = () => {
    let a = Math.floor(Math.random() * 10);
    setplayed((prev) => prev + 1);

    if (played <= 14) {
      setdispQuestion(questiosArray[a]);
      if (selected === dispQuestion.answer) {
        setscore((prev) => prev + 1);
        setdispScore(scores[score + 1]);
      }
      setselected("");
    }else{
      localStorage.prize = dispScore;
      localStorage.correct = score;
      navigate("/end")
    }

    // window.location.reload()
    // if (played <= 15) {
    //   setdispScore(scores[played]);
    //   if (selected === dispQuestion.answer) {
    //   }
    // }
  };

  return (
    <>
      <div className="body-highlight">
        <div className="row h-100">
          <div className="col-12  col-sm-7 position-relative h-100">
            <div className="divider p-4 h-50 ">
              <DispNav />

              <div className="d-flex space mt-3">
                <h6>{played}/15</h6>
                <h6>${dispScore}</h6>
                <div>
                  <button
                    className="btn p-0 px-3 rounded-pill d-sm-none"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasResponsive"
                    aria-controls="offcanvasResponsive"
                  >
                    Score
                  </button>
                </div>
              </div>
            </div>

            <div className="question p-4">
              <small className="smaller ;lh-0">
                Read The Question Carefully
              </small>
              <p className="fw-bold">{dispQuestion.question} </p>
            </div>
            <div onClick={nextQuestion} className="next-cont">
              <div className="next p-2">
                <img src={next} width={30} alt="Next" />
              </div>
              <small className="small fw-bold">Next</small>
            </div>

            <div className="p-4">
              <div className="answers">
                <label
                  htmlFor="a1"
                  className="form-label postion-relative  w-100"
                >
                  <input
                    onClick={(e) => setselected(e.target.value)}
                    type="radio"
                    value="A"
                    name="answers"
                    className=" form-radio"
                  />
                  <span className="rounded-4  p-2 px-3 w-100">
                    a. {dispQuestion.optionA}
                  </span>
                </label>
              </div>

              <div className="answers">
                <label htmlFor="a1" className="form-label w-100">
                  <input
                    onClick={(e) => setselected(e.target.value)}
                    type="radio"
                    value="B"
                    name="answers"
                    className="form-radio"
                  />
                  <span className="rounded-4 p-2 px-3 w-100">
                    b. {dispQuestion.optionB}
                  </span>
                </label>
              </div>
              <div className="answers">
                <label htmlFor="a1" className="form-label w-100">
                  <input
                    onClick={(e) => setselected(e.target.value)}
                    type="radio"
                    value="C"
                    name="answers"
                    className="form-radio"
                  />
                  <span className="rounded-4 p-2 px-3 w-100">
                    c. {dispQuestion.optionC}
                  </span>
                </label>
              </div>
              <div className="answers ">
                <label htmlFor="a1" className="form-label w-100">
                  <input
                    onClick={(e) => setselected(e.target.value)}
                    type="radio"
                    value="D"
                    name="answers"
                    className="form-radio"
                  />
                  <span className="rounded-4 p-2 px-3 w-100">
                    d. {dispQuestion.optionD}
                  </span>
                </label>
              </div>
            </div>
          </div>
          <div className="col-5 h-100">
            <OffCanvasDisplayScore score={score} dispScore={dispScore}/>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default TakeQuiz;
