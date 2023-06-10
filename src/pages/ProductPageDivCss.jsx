import styles from "styled-components";

export const ProductPageDiv=styles.div`

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
    .products-all-div{
        width:80%;
        margin:auto;
        .product-all{
            display:flex;
            justify-content:space-around;
            flex-wrap:wrap;
            align-items:center;
        }
    }

    .filters-button{
        margin:1rem auto 0 auto;
        border:none;
        outline:none;
        font-family:${(props)=>props.theme.fontFamily.secondaryFont};
        font-size:1rem;
        font-weight:bold;
        border:${(props)=>props.theme.colors.colorBlack};
        color:${(props)=>props.theme.colors.colorBlack};
        padding:0.5rem 1rem;
        border-radius:20px;
        background-color:${(props)=>props.theme.colors.colorPaleVoilet};
        position:fixed;
        left:3%;
    }
`