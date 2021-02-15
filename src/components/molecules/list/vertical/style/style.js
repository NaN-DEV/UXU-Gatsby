import styled, { css } from "styled-components"

export const Ul = styled.ul`
  flex: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  justify-content: flex-start;

  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    flex: none;
    width: auto;
  }
`
export const Li = styled.li`
  ${props =>
    props.tag || props.skill
      ? css`
          width: auto;
          padding: 0.2rem;
          font-size: 0.9rem;
          a {
            font-size: 1.2rem;
          }
        `
      : css`
          flex: 100%;
          width: 100%;
          padding: 0.5rem 0;
          font-size: 1.5rem;
          a {
            font-size: 1.5rem;
          }
        `}
  text-align: left;
  a {
    font-weight: bold;

    @media (min-width: ${props => props.theme.breakpoint_desktop}) {
      flex: auto;
      width: auto;
    }
  }
`

export const A = styled.a`
  font-weight: bold;
  font-size: 1.5rem;
  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    flex: auto;
    width: auto;
    padding: 0 0 0 1.5rem;
  }
`
