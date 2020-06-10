import styled from "styled-components"

export const Textarea = styled.textarea`
  width: 100%;
  height: 15rem;
  font-size: 1.5rem;
  border-radius: 3px;
  font-weight: normal;
  -webkit-appearance: none;
  color: ${props => props.theme.primary};
  padding: ${props => props.theme.break};
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
export const BoxInput = styled.div`
  padding: 1.5rem 0.3rem 1.5rem 0;
  position: relative;
  flex: ${props => props.size};
  width: ${props => props.size};
`
