import styles from "styled-components";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const CategorySection=styles.div`
    .category-title{
        color:${(props)=>props.theme.colors.colorPaleVoilet};
        font-size:3rem;
        font-family:${(props)=>props.theme.fontFamily.primaryFont};
    }
    .category-section{
        display:flex;
        justify-content:space-evenly;
        flex-wrap:wrap;
        align-items:center;
    }
`

export const NavBarSection=styles.div`
    display:flex;
    justify-content:space-between;
    align-items:center;    
    height:6vh;
    position:sticky;
    border-bottom:1px solid #e9d5ff;
    box-shadow: -1px 1px 1px #e9d5ff;
    padding:0.8rem;
    background:#faf5ff;
    font-family:${(props)=>props.theme.fontFamily.secondaryFont};
    top:0;
    z-index:100;
    .nav-main{
        a{
            
            color:${(props)=>props.theme.colors.colorBlack};
            text-decoration:none;
          p{
            margin:0;
          }
        }
        font-weight:500;
        font-size:1.5rem;
    }
    
    .navbar-div,.nav-desktop{
        display:flex;
        justify-content:space-around;
        align-items:center;
        padding:0 2vw;
        a{
            text-decoration:none;
        }
        button{
            padding:0.8rem 0.5rem;
        }
    }
   
    button{
        background:black;
        color:${(props)=>props.theme.colors.colorWhite};
        border-radius:2rem;
        border:none;
        font-family:${(props)=>props.theme.fontFamily.secondaryFont};
        font-weight:500;
        span{
            padding:0 0.5rem 0;
        }
    }
    .nav-div{
        position:relative;
        .items-count{
            border-radius:50%;
            font-size:12px;
            padding:1px 5px;
            background-color:${(props)=>props.theme.colors.colorBlack};
            color:${(props)=>props.theme.colors.colorWhite};
            position:absolute;
            top:-6px;
            left:16px;
        }
    }

    @media only screen and (min-width:993px){
        .nav-desktop{
            width:25vw;
        }
        .nav-hamburger-content{
            display:none;
        }
        .nav-hamburger{
            display:none;
        }
    }
    @media only screen and (max-width:992px){
        .nav-links{
            position:relative;
            .nav-desktop{
                display:none;
            }
            .nav-hamburger{
                padding:0 0 0 5vw;
                display:block;
            }
            .nav-hamburger-content{
                position:absolute;
                top:10vh;
                right:0;
                background-color:${(props)=>props.theme.colors.colorWhite};
                height:50vh;
                width:100vw;
                z-index:102;
                position:fixed;
                &:hide{
                    display:none !important; 
                }
                &:show{
                    display:block !important; 
                }
                .nav-div{
                    padding:1rem;
                    .nav-text{
                        padding-right:1rem;
                        color:${(props)=>props.theme.colors.colorBlack};
                    }
                    button>.nav-text{
                        padding-right:0rem;
                        color:${(props)=>props.theme.colors.colorWhite};
                    }
                }
            }

        }
    }
`

export const CategoryCardDiv=styles.div`

    .category-link{
        text-decoration:none;
        display:block;
        width:200px;
        height:200px;
        position:relative;
        .category-name{
            display:none;
            color:${(props)=>props.theme.colors.colorBlack};
            background:${(props)=>props.theme.colors.colorWhite};
            font-weight:bold;
            font-family:${(props)=>props.theme.fontFamily.secondaryFont};
            font-size:1.5rem;
            transform:translate(-50%,-50%);
            position:absolute;
            top:50%;
            left:50%;
        }
        &:hover{
                &::after{
                content:'';
                position:absolute;
                left:0;
                top:0;
                bottom:0;
                right:0;
                width:200px;
                height:200px;
                border-radius:50%;
                background-image:linear-gradient(to right,${(props)=>props.theme.colors.colorGreen},white);
                opacity:0.2;
            }
            & .category-name{
                display:block !important;
            }
        }
        .category-image{
            width:200px;
            height:200px;
            object-fit: cover;
            object-position:50% 50%;
            border-radius:50%;
            position:relative;
        }
        
    }
`

export const HeroBannerDiv=styles.div`
    width:100%;
    height:50%;
    margin-bottom:2rem;
    .swiper{
        width:100% !important;
    }
    .swiper-slide{
        width:100% !important;
        height:100%;
        a{
            display:flex;
            justify-content:center;
            align-items:center;
            flex-wrap:wrap;
            width:100%;
            text-decoration:none;
        }
    }
    .react-player{
        video{
            height:100% !important;
            width:100%;
        }
        @media only screen and (max-width:992px){
            width:100% !important;
        }
        @media only screen and (min-width:993px){
            width:60% !important; 
        }
    }
    @media only screen and (min-width:993px){
        background:linear-gradient(to right,${(props)=>props.theme.colors.colorPaleVoilet},white);
    }
    @media only screen and (max-width:992px){
        background:linear-gradient(to bottom,${(props)=>props.theme.colors.colorPaleVoilet},white);
    }
`

export const HeroBannerContentDiv=styles.div`
    height:100%;
    align-self:start;
    @media only screen and (max-width:992px){
        width:100% !important;
    }
    @media only screen and (min-width:993px){
        width:40% !important; 
    }
    .banner-category-div{
        padding:1rem;
        
        .banner-category-title{
            font-size:3rem;
            color:${(props)=>props.theme.colors.colorWhite};
            font-family:${(props)=>props.theme.fontFamily.primaryFont};
            background-image:linear-gardient(to right,${(props)=>props.theme.colors.colorGreen},white);
            
        }
        .banner-category-description{
            font-size:1rem;
            font-weight:bold;
            color:${(props)=>props.theme.colors.colorBlack};
            font-family:${(props)=>props.theme.fontFamily.primaryFont};
        }
    }
`