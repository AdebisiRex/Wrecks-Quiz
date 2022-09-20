import axios from "axios";
import React from "react";
import { useState } from "react";
import ConfirmCreateModal from "../ConfirmCreateModal";
import DispNav from "../DispNav";
import Footer from "../Footer";
import "../pages/styles/createquiz.css";

const CreateQuiz = () => {
  const [question, setquestion] = useState("");
  const [optionA, setoptionA] = useState("");
  const [optionB, setoptionB] = useState("");
  const [optionC, setoptionC] = useState("");
  const [optionD, setoptionD] = useState("");

  const publishQuestion = (obj) => {
    let setQuestions;
    if (localStorage.set_questions) {
      setQuestions = JSON.parse(localStorage.set_questions);
    } else {
      setQuestions = [];
    }

    let creatorID = localStorage.sessionID;
    let { category, answer } = obj;
    let published = {
      question,
      optionA,
      optionB,
      optionC,
      optionD,
      category,
      answer,
      creatorID,
    };
    let newString = [...setQuestions, published]
    let newTime = JSON.stringify(newString);
    localStorage.set_questions = newTime;

    window.location.reload()
    // console.log(setQuestions);

    // localStorage.questions = [...question, published]

    // let endpoint = "http://localhost:2300/question/publish"
    // axios.post(endpoint, published).then((response)=>{
    //   if(response.data.status){
    //     alert(response.data.message)
    //     window.location.reload()
    //   }else{
    //     alert(response.data.message)
    //   }

    // })
  };

  return (
    <>
      <div className="body-highlight bg-gradient">
        <div className="col-12 col-sm-7 col-md-5 mx-auto shadow position-relative h-100">
          <div className="divider-create p-4 h-50 shadow ">
            <DispNav />

            <div className="d-flex mt-3">
              <h5 className="">Add Quiz</h5>
            </div>
          </div>

          <div className="create-questions p-4 shadow">
            <small className="smaller ;lh-0">
              Make the questions as clear as possible
            </small>
            <textarea
              placeholder="Input questions here"
              name=""
              id=""
              cols="28"
              rows="5"
              onChange={(e) => setquestion(e.target.value)}
            ></textarea>
          </div>

          <div className="p-4">
            <input
              type="text"
              className="form-control input-style border-5 rounded-4  mb-3"
              placeholder="Option A"
              onChange={(e) => setoptionA(e.target.value)}
            />
            <input
              type="text"
              className="form-control input-style border-5 rounded-4  mb-3"
              placeholder="Option B"
              onChange={(e) => setoptionB(e.target.value)}
            />
            <input
              type="text"
              className="form-control input-style border-5 rounded-4  mb-3"
              placeholder="Option C"
              onChange={(e) => setoptionC(e.target.value)}
            />
            <input
              type="text"
              className="form-control input-style border-5 rounded-4  mb-3"
              placeholder="Option D"
              onChange={(e) => setoptionD(e.target.value)}
            />
            <button
              data-bs-toggle="modal"
              data-bs-target="#confirmCreate"
              className="btn form-control signin"
            >
              Submit
            </button>
            <ConfirmCreateModal publish={publishQuestion} />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default CreateQuiz;
