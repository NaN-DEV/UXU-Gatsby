import styled, { css } from "styled-components"

export const Section = styled.section`
  flex: 100%;
  width: 100%;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: center;
  min-height: calc(100vh - 27.2rem);
`

export const BoxForm = styled.div`
  flex: 100%;
  max-width: 100%;
  position: relative;
  padding: ${props => props.theme.settings.breakFat} ${props => props.theme.settings.break};

  button {
    width: 100%;
    margin: ${props => props.theme.settings.break} 0;
  }

  &::before {
    right: 0;
    bottom: 0;
    content: "";
    width: 100%;
    height: 1px;
    position: absolute;
    border: ${props => props.theme.settings.border} solid ${props => props.theme.settings.colorBorder};
  }

  @media (min-width: ${props => `${props.theme.settings.breakpoint_tablet}px`}) {
    flex: 50%;
    max-width: 50%;
    padding: ${props => props.theme.settings.breakFat} ${props => props.theme.settings.breakBig}
      ${props => props.theme.settings.breakFat} 0;

    &::before {
      top: 0;
      width: auto;
      content: "";
      bottom: auto;
      height: 100%;
      position: absolute;
      border: solid ${props => props.theme.settings.colorBorder};
    }
  }
`
export const Box = styled.div`
  flex: 100%;
  width: 100%;
  display: block;
  position: relative;
  padding: ${props => props.theme.settings.break} 0;
`

export const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
  color: ${props => props.theme.settings.colorText};

  @media (min-width: ${props => `${props.theme.settings.breakpoint_tablet}px`}) {
    text-align: left;
  }
`
export const BoxDataCompany = styled.div`
  flex: 100%;
  max-width: 100%;
  position: relative;
  padding: ${props => props.theme.settings.breakFat} ${props => props.theme.settings.break};

  @media (min-width: ${props => `${props.theme.settings.breakpoint_tablet}px`}) {
    flex: 50%;
    max-width: 50%;
    padding: ${props => props.theme.settings.breakFat} 0 ${props => props.theme.settings.breakFat}
      ${props => props.theme.settings.breakBig};
  }
`
export const Point = styled.p`
  width: 100%;
  display: flex;
  font-size: 2.4rem;
  position: relative;
  justify-content: center;

  strong {
    color: ${props => props.theme.settings.colorText};
    padding-right: ${props => props.theme.settings.break};
  }

  a {
    opacity: 1;
    font-size: 2.4rem;
  }

  @media (min-width: ${props => `${props.theme.settings.breakpoint_tablet}px`}) {
    justify-content: flex-start;
  }
`
