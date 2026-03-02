import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {

    const { useri,loader } = useContext(AuthContext);
    
    const location = useLocation();

    if(loader){
        return <span className="loading loading-dots loading-lg"></span>
    }

    if (useri && useri?.email) {
        return children;
    }
    
    return <Navigate state={location.pathname} to="/auth/login"></Navigate>
};

export default PrivateRoute;