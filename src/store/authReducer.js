export const authReducer=(state,action)=>{
    switch (action.type) {
        case "ADDAUTHDETAILS":
            return {...state,user:action.payload,isLoggedIN:true};
        case "DELETEAUTHDETAILS":
            return {...state,user:{},isLoggedIN:false};
        case "SETLOADER":
            return {...state,loader:action.payload};
        default:
            return state;
    }
}

export const initialAuthData={
    user:{},
    isLoggedIN:false,
    loader:false
}