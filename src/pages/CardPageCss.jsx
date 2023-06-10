import styles from "styled-components";

export const CardPageDiv=styles.div`
    width:100%;
    margin:auto;
    .cart-all-div{
        display:flex;
        justify-content:space-evenly;
        align-items:start;
        flex-wrap:wrap;
        .cart-all{
            width:60%;
            display:flex;
            justify-content:start;
            align-items:center;
            flex-wrap:wrap;
            overflow-y:auto;
            height:100%;
            @media only screen and (max-width:768px){
                width:100%;
            }
        }
        .cart-pricecard{
            width:40%;
            @media only screen and (max-width:768px){
                width:100%;
            }
        }
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