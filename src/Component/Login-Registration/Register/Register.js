import { getAuth } from "firebase/auth";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import app from "../../../firebase.init";
import useFirebase from "../../../Hooks/useFirebase";
import Loading from "../../Loading/Loading";

const Register = () => {
  const { loginInWithGoogle, success, createAccountWithEmailAndPassword } =
    useFirebase();
  const [user, loading] = useAuthState(getAuth(app))
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);

  if(loading){
    <Loading></Loading>
  }

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const register = (event) => {
    event.preventDefault();
    console.log(email, password);
    createAccountWithEmailAndPassword(email, password);
  };

  return (
    <Container>
      <div className="grid col-lg-4 col-sm-12 mx-auto">
        <form onSubmit={register}>
          <div className='text-center mb-3'>
            <p className='pb-2 pt-4 text-success fw-bold'>{success}</p>
            <p>Sign up with:</p>
            <div className='row my-3 d-flex justify-content-center'>
              {/* <!--Google --> */}
              <button
                type='button'
                className='btn btn-white text-danger fw-bold text-primary shadow w-25 rounded-pill'
                onClick={loginInWithGoogle}
              >
                Google
              </button>
            </div>
          </div>

          <p className='text-center'>or:</p>

          {/* Name input */}
          <div className='form-outline mb-4'>
            <input
              type='text'
              className='form-control text-center border-3 border-top-0 border-start-0 border-end-0'
              placeholder='Name'
            />
          </div>

          {/* Username input */}
          <div className='form-outline mb-4'>
            <input
              type='text'
              className='form-control text-center border-3 border-top-0 border-start-0 border-end-0'
              placeholder='Username'
            />
          </div>

          {/* Email input */}
          <div className='form-outline mb-4'>
            <input
              type='email'
              className='form-control text-center border-3 border-top-0 border-start-0 border-end-0'
              placeholder='Email'
              required
              onBlur={handleEmail}
            />
          </div>

          {/* Password input */}
          <div className='form-outline mb-4'>
            <input
              type='password'
              className='form-control text-center border-3 border-top-0 border-start-0 border-end-0'
              placeholder='Password'
              required
              onBlur={handlePassword}
            />
          </div>

          {/* Repeat Password input */}
          <div className='form-outline mb-4'>
            <input
              type='password'
              className='form-control text-center border-3 border-top-0 border-start-0 border-end-0'
              placeholder='Repeat Password'
            />
          </div>

          {/* Submit button */}
          <button type='submit' className='btn btn-dark btn-block mb-3'>
            Reister
          </button>
          <div className='text-center'>
            <h6>
              Already have an account?{" "}
              <Link to='/login' className='fw-bold text-decoration-none'>
                Login
              </Link>
            </h6>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Register;
