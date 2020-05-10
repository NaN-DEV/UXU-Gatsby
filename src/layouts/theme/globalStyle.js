import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

*,
*::before,
*::after {
   box-sizing: border-box;
   -moz-osx-font-smoothing: grayscale;
   -webkit-font-smoothing: antialiased;
}

html{
   font-size: 62.5%;
}

body {
   margin: 0;
   padding: 0;
   font-weight: 400;
   line-height: 1.3;
   font-size: 2.4rem;
   min-height: 100vh;
   font-style: normal;
   font-family: "Noto Sans", sans-serif;
   color: ${props => props.theme.primary};
   background-color:${props => props.theme.light};
}

p,
h1,
h2,
h3,
h4,
h5,
h6{
    margin:0;
    padding:0;
}

h1,
h2,
h3,
h4,
h5,
h6,
b,
strong{
    font-weight: bold;
}

p,
span{
   font-weight: normal;
}

a {
   font-weight: bold;
   text-decoration: none;
   color: ${props => props.theme.primary};
   transition: ${props => props.theme.animation_time};
   &:hover{
         color:  ${props => props.theme.primary_hover};
   }
}

button{
   margin:0;
   padding: 0;
   border: none;
   display: block;
   position: relative;
   cursor: pointer !important;
   background-color: transparent;
   transition: ${props => props.theme.animation_time};

     &:focus{
       outline:none;
     }
}

ol,
ul{
   margin:0;
   padding:0;
}
section{
    overflow: hidden;
    position: relative;
}



`

export default GlobalStyle
