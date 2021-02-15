import styled, { css } from "styled-components"

export const Ul = styled.ul`
  flex: 100%;
  width: 100%;
  display: flex;
  margin: 3rem 0;
  flex-wrap: wrap;
  list-style: none;
  justify-content: center;

  @media (min-width: ${props => props.theme.breakpoint_tablet}) {
    flex: none;
    display: inline-block;
    text-align: center;
  }
`
export const Li = styled.li`
  flex: 100%;
  width: 100%;
  border-radius: 3px;
  text-align: center;
  margin: 1.5rem 0.3rem 1.5rem 0;
  font-family: "Roboto Mono", monospace;
  ${props =>
    props.disablet
      ? css`
          cursor: no-drop;
          color: ${props => props.theme.muted};
          background-color: ${props => props.theme.dark};
          box-shadow: 3px 3px 0px ${props => props.theme.primary};
        `
      : css`
          color: ${props => props.theme.muted};
          background-color: ${props => props.theme.primary};
          box-shadow: 3px 3px 0px ${props => props.theme.dark};
          &:hover {
            color: ${props => props.theme.muted};
            background-color: ${props => props.theme.dark};
            box-shadow: 3px 3px 0px ${props => props.theme.primary};
          }
        `}
  p {
    display: block;
    line-height: 1;
    font-weight: bold;
    padding: 7.5px 15px;
    color: #ffffff !important;
  }
  a {
    display: block;
    line-height: 1;
    padding: 7.5px 15px;
    color: #ffffff !important;
  }
  @media (min-width: ${props => props.theme.breakpoint_tablet}) {
    flex: auto;
    width: auto;
    margin: 1.5rem;
    display: inline-block;
  }
`
