import styles from "styled-components"

export const FooterDiv=styles.div`
    width:100%;
    padding:1rem 0 0 0;
    margin:1rem auto 0 auto;
    border-top:1px solid ${(props)=>props.theme.colors.colorBlack};
    .display-content{
        display:flex;
        justify-content:space-around;
        align-items:start;
        flex-wrap:wrap;
        margin:0.5rem auto 1rem auto;
    }
    .content-1,.content-2{
        width:20%;
        @media only screen and (max-width:992px){
            width:40%;
        }
        a{
            text-decoration:none;
            display:block;
            margin:0.5rem;
        }
    }
    .content-3{
        width:40%;
        margin:0;
        @media only screen and (max-width:992px){
            width:80%;
        }
    }
    h3,h2{
        font-family:${(props)=>props.theme.fontFamily.primaryFont};
        color:${(props)=>props.theme.colors.colorGreen};
        font-size:2rem;
        margin:0.5rem;
    }
    a,p{
        color:${(props)=>props.theme.colors.colorBlack};
        font-family:${(props)=>props.theme.fontFamily.secondaryFont};
        font-size:1rem;
    }
    a{
        text-decoration:none;
        display:block;
        margin:0.5rem;
    }

`