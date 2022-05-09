import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';

const RequiredAuth = ({children}) => {
    const {user} = useFirebase();
    const currentLocation = useLocation();

    if(!user){
        return (
          <Navigate to='/login' state={{ from: currentLocation }} replace />
        );
    }
    return children;
};

export default RequiredAuth;