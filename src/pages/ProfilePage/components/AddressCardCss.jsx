import styles from "styled-components"

export const AddressCardDiv=styles.div`
    background:${(props)=>props.theme.colors.colorWhite};
    border-right:1px solid ${(props)=>props.theme.colors.colorGray};
    box-shadow:-1px 1px 1px ${(props)=>props.theme.colors.colorGray};
    border-radius:20px;
    margin:10px;
    padding:1rem;
    width:300px;
h2{
    font-family:${(props)=>props.theme.fontFamily.secondaryFont};
}
.address-div{
    display:flex;
    justify-content:space-around;
    align-items:center;
}
.address-icon{
    font-size:2rem;
    margin:0.5rem;
}
p{
    margin:0.5rem;
    font-family:${(props)=>props.theme.fontFamily.secondaryFont};
}
.address-button{
    border:none;
    background:${(props)=>props.theme.colors.colorBlack};
    padding:1rem;
    border-radius:50%;
    margin:1rem;
    span{
        // font-size:1rem;
    }
}
.address-details{
    display:flex;
    justify-content:space-around;
    align-items:center;
    flex-direction:column;
    p{  
        font-size:12px;
        width:200px;
        & span:first-child{
            font-weight:bold;
        }
        span{
            display:inline-block;
        }
        display:flex;
        justify-content:space-between;
        align-items:center; 
    }
}
`

export const AddressDetailDiv=styles.div`
.address-list{
    display:flex;
    justify-content:space-around;
    align-items:center;
    flex-wrap:wrap;
}
.address-button-2{
    font-family:${(props)=>props.theme.fontFamily.secondaryFont};
    border:none;
    background:black;
    color:${(props)=>props.theme.colors.colorWhite};
    padding:0.5rem 1rem;
    border-radius:20px;
    span{
        padding-right:0.5rem;
    }
}
`