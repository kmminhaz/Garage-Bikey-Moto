import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";

const RequiredAuth = ({ children }) => {
  const { user } = useFirebase();
  const currentLocation = useLocation();

  if (!user) {
    return (
      <div>
        <Navigate to='/login' state={{ from: currentLocation }} replace />
      </div>
    );
  }

  if (!user.emailVerified) {
    return (
      <div className='text-center mt-5'>
        <h3 className='text-danger fw-bold'> Your email is not verified !! </h3>
        <h3 className='text-dark fw-bold'> Please verify your email first </h3>
        {/* <button
          className='btn btn-primary'
        onClick={async () => {
            await sendEmailVerification();
            Toast("Sent email");
          }}
        >
          Send Verification Email Again
        </button> */}
        {/* <ToastContainer></ToastContainer> */}
      </div>
    );
  } else {
    // console.log(loginType);
  }
  // console.log(user?.providerData[0]);
  return children;
};

export default RequiredAuth;
