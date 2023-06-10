import styles from "styled-components";

export const CategorySection=styles.div`
    .category-title{
        color:${(props)=>props.theme.colors.colorPaleVoilet};
        font-size:3rem;
        font-family:${(props)=>props.theme.fontFamily.primaryFont};
    }
    .category-section{
        display:flex;
        justify-content:space-evenly;
        flex-wrap:wrap;
        align-items:center;
    }
`