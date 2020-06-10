import styled, { css } from "styled-components"

const Input = styled.input`
  width: 100%;
  font-weight: bold;
  font-size: 1.5rem;
  border-radius: 3px;
  -webkit-appearance: none;
  color: ${props => props.theme.primary};
  padding: 0 ${props => props.theme.break};
  transition: ${props => props.theme.animation};
  font-family: ${props => props.theme.font_secondary};
  height: ${props => (props.type === "search" ? "3.7rem" : "6rem")};

  ${props =>
    props.className === "error"
      ? css`
          box-shadow: 3px 3px 0px ${props => props.theme.danger};
          border: ${props => props.theme.border} solid red;
        `
      : css`
          box-shadow: 3px 3px 0px ${props => props.theme.dark};
          border: ${props => props.theme.border} solid ${props => props.theme.primary};
        `}

  &::placeholder {
    opacity: 1;
    font-weight: normal;
    color: ${props => props.theme.primary};
    transition: ${props => props.theme.animation};
  }

  &:focus {
    outline: none;
    box-shadow: 3px 3px 0px ${props => props.theme.primary};
    border: ${props => props.theme.border} solid ${props => props.theme.primary};

    &::placeholder {
      opacity: 0;
    }
  }
`
export default Input
