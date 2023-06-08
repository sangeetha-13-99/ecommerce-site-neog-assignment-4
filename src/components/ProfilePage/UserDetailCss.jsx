import styles from "styled-components"

export const UserDetailDiv=styles.div`
    display:flex;
    justify-content:space-around;
    align-items:center;

    .user-icon{
        font-size:2rem;
        margin:0.5rem;
    }
    p{
        margin:0.5rem;
        font-family:${(props)=>props.theme.fontFamily.secondaryFont};
    }

`