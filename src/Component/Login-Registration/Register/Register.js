import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';

const Register = () => {
    const {loginInWithGoogle, success} = useFirebase();
    return (
      <Container>
        <div className='grid col-lg-4 col-12 mx-auto mt-3 p-2 rounded-3 shadow-lg'>
          <form>
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
                id='registerName'
                className='form-control text-center border-3 border-top-0 border-start-0 border-end-0'
                placeholder='Name'
              />
            </div>

            {/* Username input */}
            <div className='form-outline mb-4'>
              <input
                type='text'
                id='registerUsername'
                className='form-control text-center border-3 border-top-0 border-start-0 border-end-0'
                placeholder='Username'
              />
            </div>

            {/* Email input */}
            <div className='form-outline mb-4'>
              <input
                type='email'
                id='registerEmail'
                className='form-control text-center border-3 border-top-0 border-start-0 border-end-0'
                placeholder='Email'
              />
            </div>

            {/* Password input */}
            <div className='form-outline mb-4'>
              <input
                type='password'
                id='registerPassword'
                className='form-control text-center border-3 border-top-0 border-start-0 border-end-0'
                placeholder='Password'
              />
            </div>

            {/* Repeat Password input */}
            <div className='form-outline mb-4'>
              <input
                type='password'
                id='registerRepeatPassword'
                className='form-control text-center border-3 border-top-0 border-start-0 border-end-0'
                placeholder='Repeat Password'
              />
            </div>

            {/* Checkbox */}
            {/* <div className='form-check d-flex justify-content-center mb-4'>
              <input
                className='form-check-input me-2'
                type='checkbox'
                value=''
                id='registerCheck'
                checked
                aria-describedby='registerCheckHelpText'
              />
              <label className='form-check-label' for='registerCheck'>
                I have read and agree to the terms
              </label>
            </div> */}

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