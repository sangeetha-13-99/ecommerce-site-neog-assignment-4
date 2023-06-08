import styles from "styled-components";

// font-family: 'Varela Round', sans-serif;
// font-family: 'Ysabeau', sans-serif;
export const NavBarSection=styles.section`
    display:flex;
    justify-content:space-between;
    align-items:center;    
    height:6vh;
    position:sticky;
    border-bottom:1px solid #e9d5ff;
    box-shadow: -1px 1px 1px #e9d5ff;
    padding:0.8rem;
    background:#faf5ff;
    font-family: 'Varela Round', sans-serif;
    top:0;
    z-index:100;
    .nav-main{
        a{
            color:black;
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
        color:white;
        border-radius:2rem;
        border:none;
        font-family: 'Varela Round', sans-serif;
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
            background-color:black;
            color:white;
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
                top:6vh;
                right:0;
                background-color:white;
                height:50vh;
                width:100vw;
                z-index:102;
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
                        color:black;
                    }
                    button>.nav-text{
                        padding-right:0rem;
                        color:white;
                    }
                }
            }

        }
    }
`

export const CategoryCardDiv=styles.section`

    .category-link{
        text-decoration:none;

        .category-image{
            width:300px;
            height:300px;
            margin:1rem;
            object-fit: cover;
            border-radius:10px;
        }
        .category-name{
            color:black;
            font-weight:bold;
            font-family: 'Varela Round', sans-serif;
            fonr-size:2rem;
            background:black;
            width:300px;
            color:white;
            padding:1rem;
        }
    }
`