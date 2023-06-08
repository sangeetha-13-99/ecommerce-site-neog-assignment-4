import styles from "styled-components"


export const ProductDetailCardDiv=styles.div`
    width:70%;
    height:60%;
    margin:auto;
    display:flex;
    justify-content:space-between;
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
        font-family: 'Ysabeau', sans-serif;
        font-size:2rem;
        font-weight:bold;
        color:black
    }
    .product-description{
        font-family: 'Varela Round', sans-serif;
        font-size:1rem;
        color:black
    }
    .display-content{
        font-family: 'Varela Round', sans-serif;
        display:flex;
        justify-content:space-between;
        align-items:center;
    }
    button{
        border:none;
        background:black;
        color:white;
        padding:0.5rem 1rem;
        border-radius:20px;
        span{
            padding-right:0.5rem;
        }
    }
    a{
       text-decoration:none;
       color:black;
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