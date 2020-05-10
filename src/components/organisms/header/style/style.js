import styled from "styled-components"

export const Header = styled.header`
  top: 0;
  width: 100%;
  z-index: 999;
  position: fixed;
  transition: ${props => props.theme.animation_time};
  background-color: ${props => props.theme.secondary};

  form {
    padding: 0 3rem;
    display: none;
  }

  .button-hamburger {
    margin-left: auto;
  }

  .bottom-element {
    padding: 0;
  }

  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    form {
      display: block;
    }
  }
`

export const HeaderBox = styled.div`
  width: 100%;
  height: 204px;
  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    height: 181px;
  }
`

export const HeaderElement = styled.div`
  flex: 100%;
  width: 100%;
  display: flex;
`
export const BottomElement = styled.div`
  flex: 100%;
  width: 100%;
  display: flex;
  overflow: hidden;
  position: relative;
  border-top: solid ${props => props.theme.border} ${props => props.theme.light};
  border-bottom: solid ${props => props.theme.border}
    ${props => props.theme.light};
`
export const ListElement = styled.ul`
  flex: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  list-style: none;

  li {
    flex: 100%;
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    a {
      text-align: center;
      font-size: ${props => props.theme.font_size_mobile_button};
    }
    p {
      font-size: 12px;
    }
  }
  li:nth-child(2) {
    border-top: solid ${props => props.theme.border}
      ${props => props.theme.light};
    border-bottom: solid ${props => props.theme.border}
      ${props => props.theme.light};
  }
  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    li {
      flex: 33.3333%;
      max-width: 33.3333%;
      a {
        font-size: 2rem;
      }
      p {
        font-size: 1.5rem;
      }
    }
    li:nth-child(2) {
      border-top: solid 0 transparent;
      border-bottom: solid 0 transparent;
      border-left: solid ${props => props.theme.border}
        ${props => props.theme.light};
      border-right: solid ${props => props.theme.border}
        ${props => props.theme.light};
    }
  }
`

export default Header
