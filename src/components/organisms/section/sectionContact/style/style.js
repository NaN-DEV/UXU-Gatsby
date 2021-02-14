import styled, { css } from "styled-components"

export const Section = styled.section`
  flex: 100%;
  width: 100%;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: center;
  min-height: calc(100vh - 22rem);
`

export const BoxForm = styled.div`
  flex: 100%;
  max-width: 100%;
  position: relative;
  padding: 3rem 1.5rem;

  button {
    width: 100%;
    margin: 1.5rem 0;
  }

  &::before {
    right: 0;
    bottom: 0;
    content: "";
    width: 100%;
    height: 1px;
    position: absolute;
    border: solid #000000;
    box-shadow: 3px 3px 0px #64707d;
  }

  @media (min-width: ${props => `${props.theme.settings.breakpoint_tablet}px`}) {
    flex: 50%;
    max-width: 50%;
    padding: 3rem 6rem 3rem 0;

    &::before {
      top: 0;
      width: auto;
      content: "";
      bottom: auto;
      height: 100%;
      position: absolute;
      border: solid #000000;
      box-shadow: 3px 3px 0px #64707d;
    }
  }
`
export const Box = styled.div`
  flex: 100%;
  width: 100%;
  display: block;
  padding: 1.5rem 0;
  position: relative;
`

export const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
  @media (min-width: ${props => `${props.theme.settings.breakpoint_tablet}px`}) {
    text-align: left;
  }
`
export const BoxDataCompany = styled.div`
  flex: 100%;
  max-width: 100%;
  position: relative;
  padding: 3rem 1.5rem;

  @media (min-width: ${props => `${props.theme.settings.breakpoint_tablet}px`}) {
    flex: 50%;
    max-width: 50%;
    padding: 3rem 0 3rem 6rem;
  }
`
export const Point = styled.p`
  width: 100%;
  display: flex;
  font-size: 2.4rem;
  position: relative;
  justify-content: center;

  strong {
    padding-right: 1.5rem;
  }
  a {
    opacity: 1;
    font-size: 2.4rem;
    &:hover {
      opacity: 0.6;
    }
  }
  @media (min-width: ${props => `${props.theme.settings.breakpoint_tablet}px`}) {
    justify-content: flex-start;
  }
`
