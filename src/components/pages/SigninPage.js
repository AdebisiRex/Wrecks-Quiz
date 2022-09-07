import "./styles/signin-page.css";
import { useNavigate } from "react-router-dom";
const SigninPage = () => {
    let navigate = useNavigate()
    const visitSignup=()=>{
        navigate("/signup")
    }
    const signin=()=>{
        navigate("/control")
    }
  return (
    <>
      <div className="p-4 body-orange">
        <div className="col-12 p-4 col-sm-7 col-md-5 mx-auto shadow h-100">
          <input
            type="text"
            className="form-control input-style border-5 rounded-4  mb-4"
            placeholder="Username or Email"
            name="em_username"
          />

          <input
            type="password"
            className="form-control input-style rounded-4 mb-4"
            placeholder="Password"
            name="password"
          />

          <button onClick={signin} className="mb-3 btn btn-lg signin rounded-4 form-control">
            {" "}
            Sign In
          </button>

          <hr />

          <div className="text-center">
            <small>Don't have an account?</small>
            <button onClick={visitSignup}  className="btn btn form-control signup">Sign Up</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SigninPage;
