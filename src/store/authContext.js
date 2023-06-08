import { createContext, useContext, useReducer } from "react";

import { authReducer,initialAuthData } from "./authReducer";

const AuthContext=createContext({
    authData:{},
    dispatchAuthData:()=>{},
})


export const AuthContextProvider=({children})=>{
    const [authData,dispatchAuthData]=useReducer(authReducer,initialAuthData);
    return(
        <AuthContext.Provider value={{authData,dispatchAuthData}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext=()=>{
    return useContext(AuthContext);
}
