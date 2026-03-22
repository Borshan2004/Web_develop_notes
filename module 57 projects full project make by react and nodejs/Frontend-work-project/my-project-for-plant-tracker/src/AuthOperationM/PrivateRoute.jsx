import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
   
    const {userA} = useContext(AuthContext);

    const location = useLocation();

    if(userA&& userA?.email){
        return children
    }

    return <Navigate state={location.pathname}  to='/login'></Navigate>

};

export default PrivateRoute;