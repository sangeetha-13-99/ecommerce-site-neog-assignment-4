export const  modalReducerFunction=(state,action)=>{
    switch (action.type){
        case "OPENMODAL":
            return {searchModal:false,formModal:false,filtersModal:false,[action.payload]:true};
        case "CLOSEMODAL":
            return {...state,[action.payload]:false};
        default:
            return state;
    }
}

export const  initialModalData={
    searchModal:false,
    formModal:false,
    filtersModal:false
}