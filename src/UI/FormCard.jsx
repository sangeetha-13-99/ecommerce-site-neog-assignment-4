import styles from "styled-components"

export const FormCard=styles.div`
    width:50%;
    margin:5vh auto;
    padding:1rem;
    background-color:${(props)=>props.theme.colors.colorWhite};
    box-shadow: -1px 1px 2px ${(props)=>props.theme.colors.colorGray};
    border-radius:20px;
    @media only screen and (max-width:599px){
        width:80%;
    }
    .form-name{
        font-family:${(props)=>props.theme.fontFamily.primaryFont};
        color:${(props)=>props.theme.colors.colorPaleVoilet};
        font-size:3rem;
        margin:0;
        padding-bottom:0.5rem;
    }
    .form-error{
        font-family:${(props)=>props.theme.fontFamily.secondaryFont};
        color:${(props)=>props.theme.colors.colorRed}
    }
    .form-field-div{
        display:flex;
        justify-content:space-between;
        align-items:center;
        
        padding:1rem;
        .form-label{
            width:30%;
            font-family:${(props)=>props.theme.fontFamily.primaryFont};
            font-size:1.5rem;
            font-weight:bold;
            text-align:left;
        }
        .form-input-div{
            position:relative;
            width:70%;
            border-bottom:2px solid ${(props)=>props.theme.colors.colorGray};
            input{
                width:100%;
                font-family:${(props)=>props.theme.fontFamily.secondaryFont};
                font-size:1rem;
                font-weight:bold;
                padding:0.5rem 0;
                border:none;
                outline:none;
                text-align:center;
                &:placeholder{
                    color:${(props)=>props.theme.colors.colorGray};
                }
            }
            span{
                position:absolute;
                right:0;
            }

        }
    }
    .button-align{
        display:flex;
        justify-content:space-around;
        align-items:center;
        flex-wrap:wrap;
         @media only screen and (max-width:599px){
            flex-direction:column;
         }
    }
    .form-button{
        border:none;
        outline:none;
        font-family:${(props)=>props.theme.fontFamily.secondaryFont};
        font-size:1rem;
        font-weight:bold;
        color:${(props)=>props.theme.colors.colorWhite};
        background:${(props)=>props.theme.colors.colorBlack};
        padding:0.5rem 1rem;
        border-radius:20px;
        margin:0.5rem;
    }
    .form-navigate-link{
        padding-top:1rem;
        text-underline:${(props)=>props.theme.colors.colorBlack};
        color:${(props)=>props.theme.colors.colorBlack};
        font-family:${(props)=>props.theme.fontFamily.secondaryFont};
        font-size:1rem;
        span:first-child{
            padding:0 0.5rem;
        }
    }
    .form-label-radio,.form-label-checkbox{
        font-family:${(props)=>props.theme.fontFamily.secondaryFont};
        font-size:1rem;
        font-weight:bold;
        padding-left:0.5rem;
    }
    .checkbox{
        justify-content:center;
    }
    
`