import React from "react";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAmazone } from "@fortawesome/free-brands-svg-icons";
import useFirebase from "../../../Hooks/useFirebase";

const LoginPage = () => {
    const {loginInWithGoogle, success} = useFirebase();
  return (
    <div>
      <div
        className='card mx-auto mt-4 shadow-lg rounded-3 border-0'
        style={{ width: "28rem" }}
      >
        <div className='card-body mx-4'>
          {/* <!--Header--> */}
          <div className='text-center'>
            <h3 className='dark-grey-text mb-5'>
              <strong>Sign in</strong>
            </h3>
          </div>

          {/* <!--Body--> */}
          <div className='md-form pb-3'>
            <input
              type='text'
              id='Form-email1'
              className='form-control border-top-0 border-start-0 border-end-0 text-center'
              placeholder='Your Email'
            />
          </div>

          <div className='md-form pb-3'>
            <input
              type='password'
              id='Form-pass1'
              className='form-control border-top-0 border-start-0 border-end-0 text-center'
              placeholder='Your Password'
            />
            <p className='font-small blue-text d-flex justify-content-end pt-3 fw-bold fs-6'>
              Forgot{" "}
              <Link to='#' className='blue-text mb-1 ms-2 text-decoration-none'>
                Password?
              </Link>
            </p>
          </div>

          <div className='text-center mb-3'>
            <div class='d-grid col-8 mx-auto'>
              <button class='btn btn-primary rounded-pill ' type='button'>
                Sign In
              </button>
            </div>
          </div>
          <p className='font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2'>
            {" "}
            or Sign in with:
          </p>

          <div className='row my-3 d-flex justify-content-center'>
            {/* <!--Google --> */}
            <button
              type='button'
              className='btn btn-white text-danger fw-bold text-primary shadow w-25 rounded-pill'
              onClick={loginInWithGoogle}
            >
              Google
            </button>
            <p className='py-3 text-success fw-bold'>{success}</p>
          </div>
        </div>

        {/* <!--Footer--> */}
        <div className='modal-footer mx-5 pt-3 mb-1'>
          <p className='font-small grey-text d-flex justify-content-end'>
            Not a member?{" "}
            <Link
              to='/register'
              className='blue-text mb-1 ms-2 fw-bold fs-6 text-decoration-none'
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
