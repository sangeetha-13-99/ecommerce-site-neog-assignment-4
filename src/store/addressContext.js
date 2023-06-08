import { createContext, useContext, useReducer } from "react";
import { addressReducerFunction, initialAddressData } from "./addressReducer";

//  default address for test user
//  add new address
//  delete address
//  edit address
//  form for providing the address which contains add ,clear, dummy data
//  portals/modals should open on form fill which contains close button as well

const AddressContext=createContext({
    addressData:{
        usersAddress:[],
        dummyData:{},
        editAddress:{},
        currentAddress:{}
    },
    dispatchAddressData:()=>{}
});

export const AddressContextProvider=({children})=>{
    const [addressData,dispatchAddressData]=useReducer(addressReducerFunction,initialAddressData);
 
    return (
        <AddressContext.Provider value={{addressData,dispatchAddressData}}>
            {children}
        </AddressContext.Provider>
    )
}

export const useAddressContext=()=>{
    return useContext(AddressContext);
}


