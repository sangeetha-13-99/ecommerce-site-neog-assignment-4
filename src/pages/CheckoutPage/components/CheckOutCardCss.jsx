import styles from "styled-components";

export const CheckOutCardDiv=styles.div`
    width:40%;
    position:relative;
    padding:1rem;
    background:${(props)=>props.theme.colors.colorWhite};
    border-radius:20px;
    margin:10px;
    border-right:1px solid ${(props)=>props.theme.colors.colorGray};
    box-shadow:-1px 1px 1px ${(props)=>props.theme.colors.colorGray};
    @media only screen and (max-width:768px){
        width:100%;
    }
    h2{
        font-family:${(props)=>props.theme.fontFamily.primaryFont};
    }
    p,li{
        margin:0.5rem;
        display:flex;
        justify-content:space-between;
        align-items:center;
        font-family:${(props)=>props.theme.fontFamily.secondaryFont};
        span:first-child{
            font-weight:bold;
        }
    }
    ol{
        padding:0;
        margin:0;
        li{
            list-style:none;
        }
    }
    button{
        font-family:${(props)=>props.theme.fontFamily.secondaryFont};
        border:none;
        background:black;
        color:${(props)=>props.theme.colors.colorWhite};
        padding:0.5rem 1rem;
        border-radius:20px;
        margin:0.3rem;
        span{
            padding-right:0.5rem;
        }
    }

`