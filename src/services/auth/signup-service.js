import axios from "axios";

export const  signUpService=async(authData)=>{
    return await axios.post('api/auth/signup',{
        ...authData
    });
}



