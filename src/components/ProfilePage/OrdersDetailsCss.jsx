import styles from "styled-components";

export const OrdersDetailsDiv=styles.div`
    
.order-details-div,.card{
    display:flex;
    justify-content:space-around;
    align-items:center;
    flex-wrap:wrap;
}
.order-address{
    width:240px;
    p{
        font-family:${(props)=>props.theme.fontFamily.primaryFont};
        color:${(props)=>props.theme.colors.colorGreen};  
    }
}
.results-text{
    padding:1.5rem;
    font-size:2.5rem;
    font-family:${(props)=>props.theme.fontFamily.primaryFont};
    color:${(props)=>props.theme.colors.colorPaleVoilet};
    margin:0;
    a{
        text-decoration:none;
        color:${(props)=>props.theme.colors.colorBlack};
    }
}
.card{
    padding:1rem;
    margin:1rem;
    background:${(props)=>props.theme.colors.colorWhite};
    border-right:1px solid ${(props)=>props.theme.colors.colorGray};
    box-shadow:-1px 1px 1px ${(props)=>props.theme.colors.colorGray};
    border-right:1px solid ${(props)=>props.theme.colors.colorBlack};
    border-radius:20px;
    @media only screen and (max-width:768px){
        width:100%;
    }
    a{
        display:none;
    }
}
`