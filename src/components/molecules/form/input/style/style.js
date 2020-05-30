import styled from "styled-components"

export const Input = styled.input`
  width: 100%;
  height: 3.7rem;
  font-size: 1.5rem;
  border-radius: 3px;
  font-weight: normal;
  -webkit-appearance: none;
  color: ${props => props.theme.primary};
  padding: 0 ${props => props.theme.break};
  font-family: ${props => props.theme.font_secondary};
  box-shadow: 3px 3px 0px ${props => props.theme.dark};
  border: ${props => props.theme.border} solid ${props => props.theme.primary};
  &::placeholder {
    opacity: 1;
    color: ${props => props.theme.primary};
    transition: ${props => props.theme.animation};
  }
  &:focus {
    outline: none;
    &::placeholder {
      opacity: 0;
    }
  }
`
