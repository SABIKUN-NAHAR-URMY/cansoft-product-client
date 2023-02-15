import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const[localUser, setLocalUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // const providerLogin = (provider) =>{
    //     setLoading(true);
    //     return signInWithPopup(auth, provider);
    // }

    // setUser(JSON.parse(localStorage.getItem('userInfo')));
    const createUser = (userInfo) =>{
        return setUser(userInfo);
    }

    // const login = (email, password) =>{
    //     setLoading(true);
    //     return signInWithEmailAndPassword(auth, email, password);
    // }

    // const currentUser = () =>{
    //     const localStorage.getItem('UserInfo');
    //     return setUser(profile);
    // }

    const logOut = () =>{
        localStorage.removeItem('userInfo');
        return setUser('');
    }

    // useEffect(()=>{
    //     const unsubscribe = (user) =>{
    //         setUser(user);
    //         setLoading(false);
    //     };
    //     return ()=>{
    //         return unsubscribe();
    //     }
    // },[]);

    const authInfo = {user, setUser, loading, createUser,localUser, logOut};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;