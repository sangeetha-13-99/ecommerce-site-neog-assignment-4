import styles from "styled-components";

export const LoadingDiv=styles.div`
    .loader-title{
        font-size:6rem;
        font-weight:bold;
        font-family:${props=>props.theme.fontFamily.primaryFont};
        color:${props=>props.theme.colors.colorGreen};
        
    }
`;