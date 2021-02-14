import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  body {
    overflow: hidden;
  }
`

export const ModalBox = styled.div`
  top: 0;
  left: 0;
  outline: 0;
  width: 100%;
  height: 100%;
  z-index: 99999;
  display: block;
  position: fixed;
  overflow-y: auto;
  padding-left: 0px;
  overflow-x: hidden;
`

export const Modal = styled.div`
  top: 0;
  left: 0;
  display: block;
  overflow: auto;
  flex-wrap: wrap;
  min-width: 100vw;
  min-height: 100vh;
  position: relative;
  background-color: ${props => props.theme.settings.secondary};

  .closed {
    opacity: 1;
    margin-left: auto;

    &:hover {
      opacity: 0.3;
    }
  }
`

export const Header = styled.div`
  min-height: 7rem;
  position: relative;
`

export const Content = styled.div`
  flex: 100%;
  display: flex;
  max-width: 100%;
  position: relative;
  align-items: center;
  min-height: calc(100vh - 14rem);
`

export const Footer = styled.div`
  flex: 100%;
  max-width: 100%;
  min-height: 7rem;
`
