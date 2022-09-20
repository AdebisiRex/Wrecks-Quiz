import "./styles/signin-page.css";
import { useNavigate } from "react-router-dom";
import DispNav from "../DispNav";
import Footer from "../Footer";
const AdminControl = () => {
  
  return (
    <>
      <div className="body-orange">
        <div className="col-12 p-4 col-sm-7 col-md-5 mx-auto shadow h-100">
          <div className="mb-5">
          <DispNav />
          </div>
          <div className="mb-3  p-3 text-center rounded-3 signin">
            My Quizs
          </div>
          <div className="mb-3 p-3 text-center rounded-3 signup">
            Generate Quiz Code
          </div>
          <div className="mb-3  p-3 text-center rounded-3 signin">
            Add Quiz Questions
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default AdminControl;
