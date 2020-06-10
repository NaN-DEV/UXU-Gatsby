import styled, { createGlobalStyle } from "styled-components"

export const Section = styled.section`
  flex: 100%;
  width: 100%;
  overflow: hidden;
  .row {
    padding: 0.3rem;
  }
  @media (min-width: ${props => props.theme.breakpoint_mobile}) {
    padding: ${props => props.theme.break};
  }
  @media (min-width: ${props => props.theme.breakpoint_tablet}) {
    flex: calc(100% - 250px);
    width: calc(100% - 250px);
  }
  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    flex: calc(100% - 500px);
    width: calc(100% - 500px);
  }
`
