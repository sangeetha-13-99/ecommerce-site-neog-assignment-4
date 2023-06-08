import styles from "styled-components";

export const CartCardDiv=styles.div`
    position:relative;
    width:600px;
    display:flex;
    justify-content:space-between;
    align-items:start;
    padding:1rem;
    background:${(props)=>props.theme.colors.colorWhite};
    border-radius:20px;
    margin:10px;
    border-right:1px solid ${(props)=>props.theme.colors.colorGray};
    box-shadow:-1px 1px 1px ${(props)=>props.theme.colors.colorGray};
    .product-image{
        border-radius:20px;
        width:200px;
        height:300px;
        border-right:1px solid ${(props)=>props.theme.colors.colorGray};
        box-shadow:-1px 1px 1px ${(props)=>props.theme.colors.colorGray};
    }
    .product-title{
        font-family:${(props)=>props.theme.fontFamily.primaryFont};
        font-size:1.5rem;
        font-weight:bold;
        color:black
    }
    .display-content{
        font-family:${(props)=>props.theme.fontFamily.secondaryFont};
        display:flex;
        justify-content:space-around;
        align-items:center;
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
    a{
        font-family:${(props)=>props.theme.fontFamily.secondaryFont};
       text-decoration:none;
       color:black;
       border-bottom:2px solid black; 
       span{
            padding-right:0.5rem;
        }
    }

`