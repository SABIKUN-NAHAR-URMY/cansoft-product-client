import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const[resetPass, setResetPass] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (userInfo) =>{
        setLoading(true);
        return setUser(userInfo);
    }

    const resetPassword = (info) => {
        // setLoading(true)
        return setResetPass(info);
      }

    const logOut = () =>{
        localStorage.removeItem('userInfo');
        return setUser('');
    }

    const authInfo = {user, setUser, loading, setLoading, createUser, resetPass, resetPassword, logOut};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;