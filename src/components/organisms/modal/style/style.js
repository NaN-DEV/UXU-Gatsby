import styled, { css } from "styled-components"

export const Wrapper = styled.div`
  top: 0;
  left: 0;
  outline: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  z-index: 1050;
  display: block;
  position: fixed;
  overflow-y: auto;
  overflow-x: hidden;
`

export const Modal = styled.div`
  top: 0;
  left: 0;
  outline: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  z-index: 1050;
  display: block;
  position: fixed;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: ${props => props.theme.secondary};
`

export const Header = styled.header`
  display: flex;
  flex: 0 0 100%;
  max-width: 100%;
  max-height: 30px;

  .button-clouse {
    margin-left: auto;
  }

  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    max-height: 60px;
  }
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: flex-start;
  min-height: calc(100vh - 150px);
  padding: ${props => props.theme.break_mobile} 0;

  a {
    font-size: 30px;
  }

  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    justify-content: center;
    min-height: calc(100vh - 180px);
    padding: ${props => props.theme.break_desctop} 0;
    a {
      font-size: 5rem;
    }
    li {
      margin: 1rem 0 !important;
    }
  }
`

export const Footer = styled.div`
  display: flex;
  flex: 0 0 100%;
  max-width: 100%;
  flex-wrap: wrap;
  min-height: 60px;
  position: relative;
  align-items: center;
  ul {
    li {
      justify-content: flex-start !important;
    }
  }
`

export const Left = styled.div`
  display: none;
  flex: 0 0 100%;
  max-width: 100%;
  overflow: hidden;
  position: relative;
  justify-content: flex-start;

  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    flex: 50%;
    display: flex;
    max-width: 50%;
  }
`

export const Right = styled.div`
  flex: 100%;
  display: flex;
  max-width: 100%;
  overflow: hidden;
  position: relative;
  justify-content: flex-start;
  a {
    font-size: 1.5rem;
  }
  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    flex: 50%;
    max-width: 50%;
    justify-content: flex-end;
    a {
      font-size: 2.4rem;
    }
  }
`

export const ContentMain = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  margin-right: 15px;
  flex: calc(50% - 30px);
  max-width: calc(50% - 30px);

  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    flex: 50%;
    max-width: 50%;
    margin-right: 0;
  }
`

export const ContentAdditional = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 15px;
  flex: calc(50% - 30px);
  max-width: calc(50% - 30px);

  form {
    top: 50px;
  }

  .mascot {
    top: auto;
    bottom: -8rem;
    height: 175px;
    position: absolute;
    left: calc(50% - 76px);
    transform: rotate(0deg);
  }

  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    flex: 50%;
    max-width: 50%;
    margin-left: 0;
    .mascot {
      top: auto;
      left: -60px;
      bottom: 10px;
      height: 175px;
      margin-left: 0;
      position: absolute;
      transform: rotate(0deg);
    }
  }
`
