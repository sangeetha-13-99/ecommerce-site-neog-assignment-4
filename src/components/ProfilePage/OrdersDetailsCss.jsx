import styles from "styled-components";

export const OrdersDetailsDiv=styles.div`

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
.Card{
    width:240px;
    @media only screen and (max-width:768px){
        width:100%;
    }
    a{
        display:none;
    }
}
`