import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';
import { Navigate } from 'react-router';

const PrivateRoute = ({ children }) => {

    const { useri,loader } = useContext(AuthContext);

    if(loader){
        return <span className="loading loading-dots loading-lg"></span>
    }

    if (useri && useri?.email) {
        return children;
    }
    
    return <Navigate to="/auth/login"></Navigate>
};

export default PrivateRoute;