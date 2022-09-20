import "./styles/signin-page.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../Footer";
import { useState } from "react";
const SigninPage = () => {
  const [message, setmessage] = useState("");
  const [em_username, setem_username] = useState("");
  const [password, setpassword] = useState("");
  let navigate = useNavigate();
  const visitSignup = () => {
    navigate("/signup");
  };

  const signin = () => {
    // let endpoint = "http://localhost:2300/user/signin";
    // axios.post(endpoint, { em_username, password }).then((response) => {
    //   if (response.data.status) {
    //     localStorage.sessionID = response.data.sessionID
    //     localStorage.token = response.data.sessionToken;
    //     navigate("/control");
    //   } else {
    //     setmessage(response.data.message);
    //   }
    // });
  };
  return (
    <>
      <div className="body-orange">
        <div className="col-12 p-4 col-sm-7 col-md-5 mx-auto shadow h-100">
          {message ? <div className="fw-bold alert text-white">{message}</div> : ""}
          <input
            type="text"
            className="form-control input-style border-5 rounded-4  mb-4"
            placeholder="Username or Email"
            name="em_username"
            onChange={(e) => setem_username(e.target.value)}
          />

          <input
            type="password"
            className="form-control input-style rounded-4 mb-4"
            placeholder="Password"
            name="password"
            onChange={(e) => setpassword(e.target.value)}
          />

          <button
            onClick={signin}
            className="mb-3 btn btn-lg signin rounded-4 form-control"
          >
            {" "}
            Sign In
          </button>

          <hr />

          <div className="text-center">
            <small>Don't have an account?</small>
            <button
              onClick={visitSignup}
              className="btn btn form-control signup"
            >
              Sign Up
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default SigninPage;
