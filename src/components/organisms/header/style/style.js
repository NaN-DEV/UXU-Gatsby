import styled from "styled-components"

export const Header = styled.header`
  top: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  z-index: 999;
  display: flex;
  position: fixed;
  background-color: ${props => props.theme.settings.secondary};

  .hamburger {
    &:hover {
      opacity: 1 !important;
      .box {
        display: block;
      }
    }
  }
`

export const MenuBox = styled.div`
  top: 3rem;
  left: -9rem;
  display: none;
  padding: ${props => props.theme.settings.break} 0;
  position: absolute;
`

export const ListLink = styled.div`
  border-radius: 3px;
  padding: ${props => props.theme.settings.break};
  background-color: ${props => props.theme.settings.muted};
  box-shadow: 3px 3px 0px ${props => props.theme.settings.dark};
  border: ${props => props.theme.settings.border} solid ${props => props.theme.settings.primary};
  a {
    padding: 0.3rem ${props => props.theme.settings.break};
  }
`

export const BreakHeader = styled.div`
  width: 100%;
  height: 6rem;
  display: block;
  position: relative;
`
