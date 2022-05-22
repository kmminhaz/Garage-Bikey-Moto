import { getAuth } from "firebase/auth";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import app from "../../firebase.init";
import Loading from "../Loading/Loading";
import {useAuthState, useSendEmailVerification} from "react-firebase-hooks/auth"
import {toast, ToastContainer} from "react-toastify"

const RequiredAuth = ({ children }) => {
  const auth = getAuth(app)
  const [user, loading] = useAuthState(auth);
  const [sendEmailVerification, sending] = useSendEmailVerification();
  const currentLocation = useLocation();

  if(loading || sending){
    return <Loading></Loading>
  }

  if (!user) {
    return (
      <div>
        <Navigate to='/login' state={{ from: currentLocation }} replace />
      </div>
    );
  }

  if (!user.emailVerified && user.providerData[0].providerId === 'password') {
    return (
      <div className='text-center mt-5'>
        <h3 className='text-danger fw-bold'> Your email is not verified !! </h3>
        <h3 className='text-dark fw-bold'> Please verify your email first </h3>
        <button
          className='btn btn-dark shadow rounded-3 mt-4'
          onClick={async () => {
            await sendEmailVerification();
            toast("New Verification Email Sent");
          }}
        >
          Send Verification Email Again
        </button>
        <ToastContainer></ToastContainer>
      </div>
    );
  }
  return children;
};

export default RequiredAuth;
