import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const userData = (JSON.parse(localStorage.getItem('userInfo')));
    const {  loading } = useContext(AuthContext);
    let location = useLocation();

    if(loading)
    {
        return <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    }
    else if (userData) {
        return children;
    }
    else {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
};

export default PrivateRoute;