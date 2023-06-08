import styles from "styled-components";

export const CheckOutPageDiv=styles.div`
    display:flex;
    justify-content:space-around;
    align-items:start;

.checkout-div,.checkout-div2{
    display:flex;
    justify-content:space-around;
    align-items:start;
    flex-direction:row;
    flex-wrap:wrap;
    padding:2rem; 
    // @media only screen and (max-width:768px){
    //     width:100%;
    // }
} 
.checkout-div2{
    padding:0;
    width:50%;
    @media only screen and (max-width:768px){
        width:100%;
    }
}
label{
    
    background:${(props)=>props.theme.colors.colorWhite};
    border-radius:20px;
    margin:10px;
    border-right:1px solid ${(props)=>props.theme.colors.colorGray};
    box-shadow:-1px 1px 1px ${(props)=>props.theme.colors.colorGray};
    padding:1rem;
    
}

.results-text{
    padding:1.5rem;
    font-size:2.5rem;
    font-family:${(props)=>props.theme.fontFamily.primaryFont};
    color:${(props)=>props.theme.colors.colorPaleVoilet};

    a{
        text-decoration:none;
        color:${(props)=>props.theme.colors.colorBlack};
    }
}
`
