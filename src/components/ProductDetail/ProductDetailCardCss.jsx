import styles from "styled-components"


export const ProductDetailCardDiv=styles.div`
    width:70%;
    height:60%;
    display:flex;
    justify-content:space-between;
    padding:1rem;
    background:${(props)=>props.theme.colors.colorWhite};
    border-right:1px solid ${(props)=>props.theme.colors.colorGray};
    box-shadow:-1px 1px 1px ${(props)=>props.theme.colors.colorGray};
    border-radius:20px;
    margin:1rem auto;
    align-items:center;

    .product-detail{
        padding:1rem;
    }
    .product-image{
        width:100%;
        height:100%;
        border-radius:20px;
        img{
            width:100%;
            height:100%;
            object-fit:cover;
        }
    }

    .product-title{
        font-family:${(props)=>props.theme.fontFamily.primaryFont};
        font-size:2rem;
        font-weight:bold;
        color:${(props)=>props.theme.colors.colorBlack};
    }
    .product-description{
        font-family:${(props)=>props.theme.fontFamily.secondaryFont};
        font-size:1rem;
        color:${(props)=>props.theme.colors.colorBlack};
    }
    .display-content{
        font-family:${(props)=>props.theme.fontFamily.secondaryFont};
        display:flex;
        justify-content:space-between;
        align-items:center;
    }
    button{
        border:none;
        background:black;
        color:${(props)=>props.theme.colors.colorWhite};
        padding:0.5rem 1rem;
        border-radius:20px;
        span{
            padding-right:0.5rem;
        }
    }
    a{
       text-decoration:none;
       color:${(props)=>props.theme.colors.colorBlack};
       border-bottom:2px solid black; 
       span{
            padding-right:0.5rem;
        }
    }
    
    @media only screen and (max-width:599px){
        flex-direction:column;
    }
    @media only screen and (min-width:600px){
        flex-direction:row;
    }
   













    // .product-sub-images{
    //     display:flex;
    //     justify-content:center;
    //     @media only screen and (max-width:599px){
    //         flex-direction:column;
    //     }
    //     @media only screen and (min-width:600px){
    //         flex-direction:row;
    //     }
    //     .product-sub-image{
    //         border-radius:20px;
    //         img{
    //             width:100px;
    //             height:100px;
    //             object-fit:cover; 
    //         }
    //     }
    // }

    // @media only screen and (min-width:600px){
    //     .product-div{
    //         flex-direction:row;
    //     }
    //     .product-sub-images{
    //         flex-direction:column;
    //     }
    // }
    // @media only screen and (max-width:599px){
    //     .product-div{
    //         flex-direction:column;
    //     }
    //     .product-sub-images{
    //         flex-direction:row;
    //     }
    // }

`