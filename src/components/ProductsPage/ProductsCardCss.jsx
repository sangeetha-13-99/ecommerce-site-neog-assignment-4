import styles from "styled-components";

export const ProductsCardDiv=styles.div`
    position:relative;
    width:240px;
    height:auto;
    padding:1rem;
    background:${(props)=>props.theme.colors.colorWhite};
    border-right:1px solid ${(props)=>props.theme.colors.colorGray};
    box-shadow:-1px 1px 1px ${(props)=>props.theme.colors.colorGray};
    border-radius:20px;
    margin:10px;
    .product-wishlist{
        position:absolute;
        top:25px;
        right:20px;
    }
    .product-image{
        border-radius:20px;
        width:230px;
        height:200px;
        border-right:1px solid ${(props)=>props.theme.colors.colorGray};
        box-shadow:-1px 1px 1px ${(props)=>props.theme.colors.colorGray};
    }
    .product-title{
        font-family:${(props)=>props.theme.fontFamily.primaryFont};
        font-size:1rem;
        font-weight:bold;
        color:${(props)=>props.theme.colors.colorBlack};
    }
    .display-content{
        
        font-family:${(props)=>props.theme.fontFamily.secondaryFont};
        display:flex;
        justify-content:space-between;
        align-items:center;
    }
    button{
        font-family:${(props)=>props.theme.fontFamily.secondaryFont};
        border:none;
        background:${(props)=>props.theme.colors.colorBlack};;
        color:${(props)=>props.theme.colors.colorWhite};
        padding:0.5rem 1rem;
        border-radius:20px;
        span{
            padding-right:0.5rem;
        }
    }
    a{
        font-family:${(props)=>props.theme.fontFamily.secondaryFont};
       text-decoration:none;
       color:${(props)=>props.theme.colors.colorBlack};
       span{
            padding-right:0.5rem;
        }
    }
    p{
        padding:0;
        margin:0.5rem;
    }

`