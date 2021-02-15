import styled from "styled-components"

const Logo = styled.div`
  width: auto;
  height: 40px;
  display: block;

  a {
    width: auto;
    height: 40px;
  }

  svg {
    height: 40px;
    display: block;
    margin: 0 auto;
    display: block;
    fill: ${props => props.theme.primary};
    transition: ${props => props.theme.animation};
  }

  &:hover {
    svg {
      fill: ${props => props.theme.dark};
    }
  }
  &:focus {
    outline: none;
  }
`

export default Logo
