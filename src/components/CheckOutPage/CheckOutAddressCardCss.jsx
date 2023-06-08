import styles from "styled-components";


export const CheckOutAddressCardDiv=styles.span`
        width:50%;
        span,p{
            font-family:${(props)=>props.theme.fontFamily.secondaryFont};
            margin:0.5rem;
            text-align:start;
        }
`