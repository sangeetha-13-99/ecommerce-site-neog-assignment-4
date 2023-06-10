import styles from "styled-components";

export const FiltersDiv=styles.div`
   
    justify-content:start;
    flex-direction:column;
    align-items:center;
    width:200px;
    height:90vh;
    position:fixed;
    left:0;
    top:10vh;
    padding:0 1rem;
    overflow-y:auto;
    z-index:101;
    background-color:${(props)=>props.theme.colors.colorWhite};
    border:1px solid ${(props)=>props.theme.colors.colorGray};
    h3{
        margin:0;
        padding:0.5rem 0;
        text-align:left;
        font-family:${(props)=>props.theme.fontFamily.primaryFont};
    }
    
    .filters-clear{
        display:flex;
        justify-content:space-between;
        align-items:center;
        width:100%;
        button{
            border:none;
            background-color:${(props)=>props.theme.colors.colorBlack};
            color:${(props)=>props.theme.colors.colorWhite};
            padding:0.5rem 1rem;
            border-radius:20px;
        }
    }
    button{
        margin:1rem auto 0 auto;
            border:none;
            outline:none;
            font-family:${(props)=>props.theme.fontFamily.secondaryFont};
            font-size:1rem;
            font-weight:bold;
            border:${(props)=>props.theme.colors.colorBlack};
            color:${(props)=>props.theme.colors.colorBlack};
            padding:0.5rem 1rem;
            border-radius:20px;
            background-color:${(props)=>props.theme.colors.colorPaleVoilet};

    }

`
export const CategorySort=styles.div`

width:100%;
 ul{
     padding:0;
     margin:0;
    li{
        list-style:none;
    }
}

.category-label{
    font-family:${(props)=>props.theme.fontFamily.secondaryFont};
    display:flex;
    justify-content:space-between;
    align-items:center;
    .category-name,.category-checkbox{
        display:block;
    }
    .category-checkbox[type:'checked']{
        background-color:#7e22ce;
    }
    .category-name{
        text-align:center;
        color:#7e22ce;
    }
}

`

export const PriceSortDiv=styles.div`
width:100%;
ul{
    padding:0;
    margin:0;
   li{
       list-style:none;
   }
} 
.price-label{

    font-family:${(props)=>props.theme.fontFamily.secondaryFont};
    display:flex;
    justify-content:space-between;
    align-items:center;
    .price-name,.price-radio{
        display:block;
    }
    .price-name{
        text-align:center;
        color:#7e22ce;
    }
}
`

export const RangeBarDiv=styles.div`
    width:100%;
    .range-div{
        font-family:${(props)=>props.theme.fontFamily.secondaryFont};
        display:flex;
        justify-content:space-between;
        align-items:center;
        span{
            color:#7e22ce;
            display:block;
        }
    }
    .range-input{
        width:100%;
        color:#7e22ce;
    }
`;

export const RatindDiv=styles.div`
width:100%;
ul{
    padding:0;
    margin:0;
   li{
       list-style:none;
   }
} 
.rating-label{
    font-family:${(props)=>props.theme.fontFamily.secondaryFont};
    display:flex;
    justify-content:space-between;
    align-items:center;
    .rating-name,.rating-radio{
        display:block;
    }
    .rating-name{
        text-align:center;
        color:#7e22ce;
    }
}
`