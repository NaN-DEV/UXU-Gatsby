import { createGlobalStyle, css } from "styled-components"

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
   font-size: 2rem;
   line-height: 1.3;
   font-style: normal;
   font-weight: normal;
   color: ${props => props.theme.settings.primary};
   font-family: 'Montserrat', sans-serif;
   ${props => {
     switch (props.theme.theme) {
       case "secondary":
         return css`
           color: ${props => props.theme.settings.primary};
           background-color: ${props.theme.settings.secondary};
         `
       default:
         return css`
           color: ${props => props.theme.settings.primary};
           background-color: ${props.theme.settings.light};
         `
     }
   }}
}

p,
h1,
h2,
h3,
h4,
h5,
h6{
    margin: 0;
    padding: 0;
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
   color: ${props => props.theme.settings.primary};
   transition: ${props => props.theme.settings.animation};
}

button{
   margin:0;
   padding: 0;
   border: none;
   display: block;
   position: relative;
   cursor: pointer !important;
   background-color: transparent;
   transition: ${props => props.theme.settings.animation};

     &:focus{
       outline: none;
     }
}

ol,
ul{
   margin: 0;
   padding: 0;
}
section{
    width: 100%;
    overflow: hidden;
    position: relative;
}

form{
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  position: relative;
}
`

export default GlobalStyle
