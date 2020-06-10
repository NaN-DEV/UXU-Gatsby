import styled from "styled-components"

export const Input = styled.input`
  width: 100%;
  height: ${props => (props.type === "search" ? "3.7rem" : "6rem")};
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
export const BoxInput = styled.div`
  position: relative;
  flex: 100%;
  width: 100%;
  padding: 1.5rem 0.3rem 1.5rem 0;
  @media (min-width: ${props => props.theme.breakpoint_tablet}) {
    flex: ${props => props.size};
    width: ${props => props.size};
    padding: 1.5rem ${props => props.paddingRight && props.paddingRight} 1.5rem
      ${props => props.paddingLeft && props.paddingLeft};
  }
`
