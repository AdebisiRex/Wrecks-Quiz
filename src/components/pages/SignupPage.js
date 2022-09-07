import "./styles/signup-page.css";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
    let navigate = useNavigate();
    const visitSignin=()=>{
        navigate('/signin')
    }
  return (
    <>
      <div className="p-2 body-highlight">
        <div className="col-12 p-4 col-sm-7 col-md-5 mx-auto shadow h-100">
          <input
            type="text"
            className="form-control input-style border-5 rounded-4  mb-4"
            placeholder="Firstname"
            name="firstname"
          />
          <input
            type="text"
            className="form-control input-style border-5 rounded-4  mb-4"
            placeholder="Lastname"
            name="lastname"
          />
          <input
            type="text"
            className="form-control input-style border-5 rounded-4  mb-4"
            placeholder="Username"
            name="username"
          />
          <label htmlFor="dp" className="form-label">
            Display Picture
            <input id="dp" name="displayPicture" type="File" className="form-control input-style border-5 rounded-4  mb-4 " />
          </label>
          
          <input
            type="text"
            className="form-control input-style border-5 rounded-4  mb-4"
            placeholder="Email"
            name="email"
          />

          <input
            type="password"
            className="form-control input-style rounded-4 mb-4"
            placeholder="Password"
            name="password"
          />

          <button className="mb-3 btn btn-lg sign-up rounded-4 form-control">
            {" "}
            Sign Up
          </button>

          <hr />

          <div className="text-center">
            <small>Already have an account?</small>
            <button
              onClick={visitSignin}
              className="btn btn form-control signup"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
