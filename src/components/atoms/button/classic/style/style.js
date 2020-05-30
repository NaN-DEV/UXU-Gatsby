import { Link } from "gatsby"
import styled, { css } from "styled-components"

const button = css`
  height: 3.7rem;
  font-size: 1.5rem;
  text-align: center;
  border-radius: 3px;
  padding: 7.5px 15px;
  white-space: nowrap;
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

export const ButtonClassic = styled.button`
  ${button}
`

export const ButtonClassicLink = styled.a`
  ${button}
`

export const ButtonClassicSlug = styled(Link)`
  ${button}
`
