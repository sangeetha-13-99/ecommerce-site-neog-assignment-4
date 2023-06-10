import styles from "styled-components";


export const CheckOutAddressCardDiv=styles.div`
        display:flex;
        justify-content:space-between;
        align-items:center;
        flex-direction:column;
        width:100%;
        p{
            color:${(props)=>props.theme.colors.colorBlack};
            font-family:${(props)=>props.theme.fontFamily.secondaryFont};
            margin:0.5rem;
            text-align:start;
        }
`