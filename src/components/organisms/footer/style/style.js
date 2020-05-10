import styled from 'styled-components';

const Footer = styled.footer`
  width: 100%;
  display: block;
  position: relative;

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
`;

export default Footer;
