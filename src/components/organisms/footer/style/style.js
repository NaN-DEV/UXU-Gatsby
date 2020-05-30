import styled from "styled-components"

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  align-items: center;
  background-color: ${props => props.theme.muted};

  .row {
    padding: 10px 15px;
    align-items: center;
    justify-content: center;
  }
  .links {
    padding-top: 15px;
    a {
      font-family: ${props => props.theme.font_secondary};
    }
  }

  @media (min-width: ${props => props.theme.breakpoint_tablet}) {
    justify-content: flex-end;
    .links {
      padding-top: 0;
      margin-left: auto;
      a {
        font-size: 1.5rem;
      }
    }
  }
`

export const P = styled.p`
  display: none;
  @media (min-width: ${props => props.theme.breakpoint_tablet}) {
    display: block;
    font-weight: bold;
    font-size: 1.5rem;
    padding: 0 1.5rem;
    font-family: ${props => props.theme.font_secondary};
  }
`
