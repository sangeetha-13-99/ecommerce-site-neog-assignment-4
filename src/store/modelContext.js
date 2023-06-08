import { createContext, useContext, useReducer } from "react";
import { initialModalData, modalReducerFunction } from "./modelReducer";


const ModalContext=createContext({
    modal:{},
    dispatchModalData:()=>{}
});

export const ModalContextProvider=({children})=>{
    
    const [modal,dispatchModalData]=useReducer(modalReducerFunction,initialModalData);
    return (
        <ModalContext.Provider value={{modal,dispatchModalData}}>
            {children}
        </ModalContext.Provider>
    )
}


export const useModalContext=()=>{
    return useContext(ModalContext);
}