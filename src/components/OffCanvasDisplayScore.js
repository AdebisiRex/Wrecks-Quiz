import React from "react";

const OffCanvasDisplayScore = ({score,dispScore}) => {
  return (
    <>
      <div
        className="offcanvas-sm offcanvas-end mx-auto"
        tabIndex="-1"
        id="offcanvasResponsive"
        aria-labelledby="offcanvasResponsiveLabel"
      >
        <div className="offcanvas-header  bg-dark-brown  bg-gradient">
          <h5
            className="offcanvas-title text-highlight"
            id="offcanvasResponsiveLabel"
          >
            Quiz Result
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            data-bs-target="#offcanvasResponsive"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body scoreB w-100  ">
          <div>
            <div className="position-relative mb-3 score-content">
              <div className="scoreDP"></div>
            </div>
            <div className="text-center"><small>Adesina Adebisi</small></div>

            <div className="text-center mb-4">
              <small className="smaller font-monospace text-secondary">
                YOU'VE ANSWERED{" "}
              </small>
              <h4 className="mb-0">
                <span className="text-orange">{score}</span>/20
              </h4>
              <small className="smaller font-monospace text-secondary">
                CORRECTLY{" "}
              </small>
            </div>
            <div className="text-center mb-4">
              <small className="smaller font-monospace text-secondary">
                YOU EARNED{" "}
              </small>
              <h4 className="mb-0">
                $<span className="text-orange"> {dispScore}</span>
              </h4>
             
            </div>
            <div>
                <button className="signin btn form-control rounded-3 mb-3">Restart</button>
                <button data-bs-dismiss="offcanvas"
            data-bs-target="#offcanvasResponsive"
            aria-label="Close" className="signup d-sm-none btn form-control rounded-3">Dismiss</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OffCanvasDisplayScore;
