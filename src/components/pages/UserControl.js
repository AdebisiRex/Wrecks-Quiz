import React from "react";
import DispNav from "../DispNav";
import Footer from "../Footer";

const UserControl = () => {
  return (
    <>
      <div className="body-highlight">
        <div className="col-12 p-4 col-sm-7 col-md-5 mx-auto shadow h-100">
          <div className="mb-5">
            <DispNav />
          </div>
          <div className="mb-3  p-2 text-center rounded-3 signup">
            Use Quiz Code
          </div>
          <div className="mb-3 p-3 text-center rounded-3 signin">
            <h4 className="fw-bold">Play</h4>
          </div>
          <div className="mb-3  p-3 text-center rounded-3 signin">
            Choose Category
          </div>
          <div className="mb-3  p-3 text-center rounded-3 signin">History</div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default UserControl;
