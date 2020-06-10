import styled, { css } from "styled-components"

const button = css`
  padding: 15px;
  margin: 0 auto;
  font-size: 2.4rem;
  text-align: center;
  border-radius: 3px;
  white-space: nowrap;
  width: 100%;
  color: ${props => props.theme.muted};
  background-color: ${props => props.theme.primary};
  font-family: ${props => props.theme.font_secondary};
  box-shadow: 3px 3px 0px ${props => props.theme.dark};
  &:hover {
    color: ${props => props.theme.muted};
    background-color: ${props => props.theme.dark};
    box-shadow: 3px 3px 0px ${props => props.theme.primary};
  }

  @media (min-width: ${props => props.theme.breakpoint_tablet}) {
    ${props =>
      props.big &&
      css`
        height: auto;
        font-size: 2.4rem;
        padding: 15px 30px;
      `}
  }
  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    ${props =>
      props.big &&
      css`
        height: auto;
        font-size: 3rem;
        padding: 15px 30px;
      `}
  }
`

const ButtonSumbit = styled.button`
  ${button}
`

export default ButtonSumbit
