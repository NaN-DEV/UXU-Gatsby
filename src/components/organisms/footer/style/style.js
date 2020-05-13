import styled from "styled-components"

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  background-color: ${props => props.theme.muted};

  .row {
    align-items: center;
    justify-content: center;
  }

  .logo {
    flex: 100%;
    width: 100%;
  }

  p {
    font-size: 15px;
    text-align: center;
    margin: 15px 0 15px 0;
  }

  ul {
    flex: 100%;
    width: 100%;
    margin-left: auto;

    a {
      font-size: 15px;
    }
  }

  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    .row {
      justify-content: flex-start;
    }

    .logo {
      flex: none;
      width: auto;
    }

    p {
      text-align: left;
      margin: 0 0 0 30px;
    }

    ul {
      flex: auto;
      width: auto;
      margin-left: auto;
      justify-content: flex-end;
    }
  }
`

export const BoxLeft = styled.div`
  flex: 50%;
  max-width: 50%;
  min-height: 300px;
  position: relative;
  background-color: ${props => props.theme.secondary};
`

export const BoxRight = styled.div``
