import styled from "styled-components"

export const Section = styled.section`
  flex: 100%;
  width: 100%;
  overflow: hidden;

  position: relative;
  .row {
    padding: 0;
  }
  @media (min-width: ${props => props.theme.breakpoint_tablet}) {
    flex: calc(100% - 250px);
    width: calc(100% - 250px);
  }
  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    flex: calc(100% - 500px);
    width: calc(100% - 500px);
    .row {
      padding: 1.5rem;
    }
  }
`
