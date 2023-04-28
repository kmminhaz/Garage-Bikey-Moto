import { getAuth } from "firebase/auth";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import {
  useAuthState,
  useSendPasswordResetEmail,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import app from "../../../firebase.init";
import useFirebase from "../../../Hooks/useFirebase";
import Loading from "../../Loading/Loading";

const LoginPage = () => {
  const { loginWithEmailAndPassword, loginInWithGoogle, success, error } =
    useFirebase();
  const [user, loading] = useAuthState(getAuth(app));
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
    getAuth(app)
  );

  if (loading || sending) {
    <Loading></Loading>;
  }

  let redirectFrom = location?.state?.from?.pathname || "/";

  if (user) {
    navigate(redirectFrom);
  }

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleForm = async (event) => {
    event.preventDefault();
    await loginWithEmailAndPassword(email, password);

    // await fetch("https://garage-bikey-moto-server.vercel.app/login", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify({ email }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     localStorage.setItem("accessToken", data.accessToken);
    //     navigate(redirectFrom);
    //     console.log(data);
    //   });
  };

  const resetPassword = async (event) => {
    handleEmail(event);
    console.log(typeof email);
    if (typeof email === "string" && email) {
      await sendPasswordResetEmail(email);
      toast("An email for password reset sent");
    } else {
      toast("please enter your email address first");
    }
  };

  return (
    <Container>
      <div className='d-grid col-lg-6 col-sm-12 mx-auto'>
        <ToastContainer></ToastContainer>
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
              </div>

              <div className='text-center mb-3'>
                <div className='d-grid col-8 mx-auto'>
                  <button
                    className='btn btn-primary rounded-pill '
                    type='submit'
                  >
                    Sign In
                  </button>
                </div>
              </div>
            </form>
            <p className='font-small blue-text d-flex justify-content-end pt-2 fw-bold fs-6 me-4'>
              <button
                onClick={resetPassword}
                className='btn btn-link blue-text mb-1 pe-2 text-decoration-none fw-bold mt-0 pt-0 shadow-sm'
              >
                Fogrot <span className='text-dark'>Password ?</span>
              </button>
            </p>
            <p className='font-small dark-grey-text text-right d-flex justify-content-center mb-3'>
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
