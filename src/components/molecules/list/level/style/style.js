import styled from "styled-components"

export const Ul = styled.ul`
  width: 100%;
  display: block;
  list-style: none;
  @media (min-width: ${props => `${props.theme.settings.breakpoint_desktop}px`}) {
    width: auto;
    display: flex;
    flex-wrap: wrap;
  }
`

export const Li = styled.li`
  flex: 100%;
  max-width: 100%;
  text-align: center;
  padding: 0.75rem 0;
  @media (min-width: ${props => `${props.theme.settings.breakpoint_desktop}px`}) {
    flex: auto;
    max-width: max-content;
    padding-right: ${props => props.theme.settings.break};
    &:last-of-type {
      padding-right: 0;
    }
  }
`
