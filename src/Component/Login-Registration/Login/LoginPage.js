import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useFirebase from "../../../Hooks/useFirebase";

const LoginPage = () => {
  const { user, loginWithEmailAndPassword, loginInWithGoogle, success, error } = useFirebase();
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  let redirectFrom = location?.state?.from?.pathname || '/';

  if(user){
    navigate(redirectFrom);
  }

  const handleEmail = (event) =>{
    setEmail(event.target.value)
  }
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleForm = (event) =>{
    event.preventDefault();
    loginWithEmailAndPassword(email, password);
  }
  return (
    <Container>
      <div className='d-grid col-lg-6 col-sm-12 mx-auto'>
        <div className='d-grid col-lg-8 col-sm-12 card mx-auto mt-4 shadow-lg rounded-3 border-0'>
          <div className='card-body mx-4'>
            {/* <!--Header--> */}
            <div className='text-center'>
              <h3 className='dark-grey-text mb-5'>
                <strong>Sign in</strong>
              </h3>
              <p className='text-success fw-bold shadow'>{success}</p>
              <p className='text-danger fw-bold shadow'>{error}</p>
            </div>

            <form onSubmit={handleForm}>
              {/* <!--Body--> */}
              <div className='md-form pb-3'>
                <input
                  type='text'
                  name='email'
                  className='form-control border-top-0 border-start-0 border-end-0 text-center'
                  placeholder='Your Email'
                  required
                  onBlur={handleEmail}
                />
              </div>

              <div className='md-form pb-3'>
                <input
                  type='password'
                  name='password'
                  className='form-control border-top-0 border-start-0 border-end-0 text-center'
                  placeholder='Your Password'
                  required
                  onBlur={handlePassword}
                />
                <p className='font-small blue-text d-flex justify-content-end pt-3 fw-bold fs-6'>
                  Forgot{" "}
                  <Link
                    to='#'
                    className='blue-text mb-1 ms-2 text-decoration-none'
                  >
                    Password?
                  </Link>
                </p>
              </div>

              <div className='text-center mb-3'>
                <div class='d-grid col-8 mx-auto'>
                  <button class='btn btn-primary rounded-pill ' type='submit'>
                    Sign In
                  </button>
                </div>
              </div>
            </form>
            <p className='font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2'>
              {" "}
              or Sign in with:
            </p>

            <div className='d-grid col-4 mx-auto'>
              {/* <!--Google --> */}
              <button
                type='button'
                className='btn btn-white text-danger fw-bold text-primary shadow rounded-pill'
                onClick={loginInWithGoogle}
              >
                Google
              </button>
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
    </Container>
  );
};

export default LoginPage;
