import styles from "styled-components";

export const WishListCardDiv=styles.div`
position:relative;
width:240px;
height:auto;
padding:1rem;
background:${(props)=>props.theme.colors.colorWhite};
border-right:1px solid ${(props)=>props.theme.colors.colorGray};
box-shadow:-1px 1px 1px ${(props)=>props.theme.colors.colorGray};
border-radius:20px;
margin:10px;

.product-image{
    border-radius:20px;
    width:230px;
    height:200px;
    border-right:1px solid ${(props)=>props.theme.colors.colorGray};
    box-shadow:-1px 1px 1px ${(props)=>props.theme.colors.colorGray};
}
.product-title{
    font-family:${(props)=>props.theme.fontFamily.primaryFont};
    font-size:1rem;
    font-weight:bold;
    color:black
}
.display-content{
    
    font-family:${(props)=>props.theme.fontFamily.secondaryFont};
    display:flex;
    justify-content:space-between;
    align-items:center;
}
button{
    font-family:${(props)=>props.theme.fontFamily.secondaryFont};
    border:none;
    background:black;
    color:white;
    padding:0.5rem 1rem;
    border-radius:20px;
    margin:0.5rem 0;
    span{
        padding-right:0.5rem;
    }
}
a{
    font-family:${(props)=>props.theme.fontFamily.secondaryFont};
   text-decoration:none;
   color:black;
   border-bottom:2px solid black; 
   span{
        padding-right:0.5rem;
    }
}
p{
    padding:0;
    margin:0.5rem;
}


`