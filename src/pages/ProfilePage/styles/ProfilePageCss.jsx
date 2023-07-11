import styles from "styled-components"

export const ProfilePageDiv=styles.div`
padding:2rem;
.profile-div{
        display:flex;
        align-items:center;
        justify-content:center;
        padding:1rem;
    }
    .tab-button{
        border:none;
        outline:none;
        font-family:${(props)=>props.theme.fontFamily.secondaryFont};
        font-size:1rem;
        font-weight:bold;
        color:${(props)=>props.theme.colors.colorBlack};
        background:${(props)=>props.theme.colors.colorPaleVoilet};
        padding:0.5rem 1rem;
        border-radius:20px;
        margin:0.5rem;
    }
`