import styled from "styled-components"

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  align-items: center;
  background-color: white;

  .logo {
    margin: 0 auto;

    &:hover {
      svg {
        fill: ${props => props.theme.settings.colorTextDisactive};
      }
    }
  }

  .row {
    padding: 10px 15px;
    align-items: center;
    justify-content: center;
  }

  .links {
    padding-top: 15px;
  }

  @media (min-width: ${props => `${props.theme.settings.breakpoint_desktop}px`}) {
    .logo {
      margin: 0;
    }

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

  @media (min-width: ${props => `${props.theme.settings.breakpoint_desktop}px`}) {
    display: flex;
    font-weight: bold;
    font-size: 1.5rem;
    align-items: center;
    color: ${props => props.theme.settings.colorText};
    padding: 0 ${props => props.theme.settings.break};
  }
`
