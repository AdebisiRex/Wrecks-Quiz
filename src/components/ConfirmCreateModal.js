import React from "react";
import { useState } from "react";

const ConfirmCreateModal = ({publish}) => {
  const [answer, setanswer] = useState("")
  const [category, setcategory] = useState("")
  return (
    <>
      <div
        className="modal fade"
        id="confirmCreate"
        tabIndex="-1"
        aria-labelledby="confirmCreateLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content ">
            <div className="modal-header bg-highlight">
              <h5 className="modal-title " id="confirmCreateLabel">
                Confirm Quiz Creation
              </h5>
            </div>
            <div className="modal-body">
              <div className="">
                <h6 className="fw-bold mb-1">Set Answer</h6> <span className="text-danger fw-bold small">Choose A, B,C, or D</span>
                <select onChange={(e)=>setanswer(e.target.value)} name="answer" className="form-select mb-3 input-style" id="">
                  <option value="-">Important!!! Click one of the options</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  <option value="D">D</option>
                </select>

                <h6 className="fw-bold mb-1">Set Category</h6>
                <select onChange={(e)=>setcategory(e.target.value)} name="category" className="form-select mb-3 input-style" id="">
                  <option value="Random">Random</option>
                  <option value="Animals">Animals</option>
                  <option value="Celebrity">Celebrity</option>
                  <option value="Sports">Sports</option>
                  <option value="World">World</option>
                </select>

                <div className="text-danger">
                  <small><b>Warning:</b> After clicking publish, you cannot edit
                  Question/Answer any errors on your part will lead to negative
                  evaluation. Be sure all your inputs are intended. All unclear questions or obviously wrongly answered questions will be automatically removed. Dont play</small>
                </div>
              </div>
            </div>
            <div className="modal-footer bg-highlight">
              <button
                type="button"
                className="btn signup"
                data-bs-dismiss="modal"
              >
                Dismiss
              </button>
              <button data-bs-dismiss="modal" onClick={()=>publish({answer, category})} type="button" className="btn px-4 signin">
                Publish
              </button>
            </div>
          </div>
        </div>
      </div>

      
    </>
  );
};

export default ConfirmCreateModal;
