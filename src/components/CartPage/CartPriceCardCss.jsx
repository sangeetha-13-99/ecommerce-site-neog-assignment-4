import styles from "styled-components";

export const CartPriceCardDiv=styles.div`
    position:relative;
    padding:1rem;
    background:${(props)=>props.theme.colors.colorWhite};
    border-radius:20px;
    margin:10px;
    border-right:1px solid ${(props)=>props.theme.colors.colorGray};
    box-shadow:-1px 1px 1px ${(props)=>props.theme.colors.colorGray};
    h2{
        font-family:${(props)=>props.theme.fontFamily.primaryFont};
    }
    p{
        font-family:${(props)=>props.theme.fontFamily.secondaryFont};
    }
    ol{
        padding:0;
        margin:0;
        li{
            list-style:none;
        }
    }
    button{
        font-family:${(props)=>props.theme.fontFamily.secondaryFont};
        border:none;
        background:black;
        color:white;
        padding:0.5rem 1rem;
        border-radius:20px;
        margin:0.3rem;
        span{
            padding-right:0.5rem;
        }
    }


`