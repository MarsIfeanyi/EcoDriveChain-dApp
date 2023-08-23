import { createContext, useState, useEffect } from "react";

const AuthContext = createContext({});


export const AuthProvider = ({ children }) => {

    const getInitialState = () => {
    const authString = sessionStorage.getItem("userAuth")
    const authDetails = JSON.parse(authString)
    return authDetails
    }

    const [auth, setAuth] = useState(getInitialState);

    useEffect(() => {
         sessionStorage.setItem('userAuth', JSON.stringify(auth))
    }, [auth])
    

        return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;