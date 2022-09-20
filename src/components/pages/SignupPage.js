import "./styles/signup-page.css";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";
const SignupPage = () => {
  let navigate = useNavigate()
  const [myImage, setmyImage] = useState("");

  let formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      firstname: yup.string().required("Firstname is Required"),
      lastname: yup.string().required("Lastname is Required"),
      username: yup.string().required("Username is required"),
      email: yup
        .string()
        .required("Email is required")
        .email("Must be a valid email"),
      password: yup
        .string()
        .matches(
          /^.*(?=.{4,10})(?=.*\d)(?=.*[a-zA-Z]).*$/,
          "Password must contain 4-10 Characters, at least One number and at least one UPPERCASE letter"
        )
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      if (myImage) {
        let img = new FileReader();
        img.readAsDataURL(myImage);
        img.onload = () => {
          let endpoint = "http://localhost:2300/user/register";
          let signinDetails = { ...values,d_picture: img.result };
          axios.post(endpoint, signinDetails).then((result) => {
            console.log(result.data);
          });
        };
      } else {
        let endpoint = "http://localhost:2300/user/register";
        let signinDetails = { ...values };
        axios.post(endpoint, signinDetails).then((result) => {
          console.log(result.data);
        });
      }
    },
  });

  const visitSignin = () => {navigate("/signin")};
  return (
    <>
      <div className="body-highlight">
        <div className="col-12 p-4 col-sm-7 col-md-5 mx-auto shadow h-100">
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                className={
                  formik.errors.firstname && formik.touched.firstname
                    ? "form-control input-style border-5 rounded-4 is-invalid"
                    : "form-control input-style border-5 rounded-4"
                }
                placeholder="Firstname"
                name="firstname"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.firstname && formik.touched.firstname ? (
                <small className="text-danger  small m-0">
                  {formik.errors.firstname}
                </small>
              ) : (
                ""
              )}
            </div>
            <div className="mb-4">
              <input
                type="text"
                className={
                  formik.errors.lastname && formik.touched.lastname
                    ? "form-control input-style border-5 rounded-4 is-invalid"
                    : "form-control input-style border-5 rounded-4"
                }
                placeholder="Lastname"
                name="lastname"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.lastname && formik.touched.lastname ? (
                <small className="text-danger  small m-0">
                  {formik.errors.lastname}
                </small>
              ) : (
                ""
              )}
            </div>
            <div className="mb-4">
              <input
                type="text"
                className={
                  formik.errors.username && formik.touched.username
                    ? "form-control input-style border-5 rounded-4 is-invalid"
                    : "form-control input-style border-5 rounded-4"
                }
                placeholder="Username"
                name="username"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.username && formik.touched.username ? (
                <small className="text-danger  small m-0">
                  {formik.errors.username}
                </small>
              ) : (
                ""
              )}
            </div>
            <label htmlFor="dp" className="form-label">
              Display Picture
              <input
                id="dp"
                name="displayPicture"
                accept="image/jpeg,image/png,image/webp"
                type="File"
                className="form-control input-style border-5 rounded-4  mb-4 "
                onChange={(e) => setmyImage(e.target.files[0])}
              />
            </label>

            <div className="mb-4">
              <input
                type="text"
                className={
                  formik.errors.email && formik.touched.email
                    ? "form-control input-style border-5 rounded-4 is-invalid"
                    : "form-control input-style border-5 rounded-4"
                }
                placeholder="Email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.email && formik.touched.email ? (
                <small className="text-danger  small m-0">
                  {formik.errors.email}
                </small>
              ) : (
                ""
              )}
            </div>
            <div className="mb-4">
              <input
                type="password"
                className={
                  formik.errors.password && formik.touched.password
                    ? "form-control input-style border-5 rounded-4 is-invalid"
                    : "form-control input-style border-5 rounded-4"
                }
                placeholder="Password"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.password && formik.touched.password ? (
                <small className="text-danger small m-0">
                  {formik.errors.password}
                </small>
              ) : (
                ""
              )}
            </div>

            <button type="submit" className="mb-3 btn btn-lg sign-up rounded-4 form-control">
              {" "}
              Sign Up
            </button>
          </form>

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
        <Footer />
      </div>
    </>
  );
};

export default SignupPage;
