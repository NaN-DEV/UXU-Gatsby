import styled, { css } from "styled-components"

export const Form = styled.form`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  position: relative;
`
export const Title = styled.h1`
  width: 100%;
  font-size: 3.3rem;
  text-align: left;
  font-weight: bold;
  @media (min-width: ${props => props.theme.tablet}) {
    font-size: 5rem;
  }
`
export const InfoTxt = styled.p`
  width: 100%;
  text-align: left;
  font-weight: 600;
  font-size: 1.2rem;
  padding-bottom: 1.5rem;
  font-family: ${props => props.theme.font_secondary};
`
export const Box = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  padding: 1.5rem 0;
  position: relative;
  align-items: center;
  justify-content: center;
  @media (min-width: ${props => props.theme.breakpoint_mobile}) {
    ${props =>
      props.height
        ? css`
            min-height: ${props.height};
          `
        : css`
            min-height: auto;
          `}
  }
`

export const BoxElement = styled.div`
  display: flex;
  flex: 100%;
  padding: 3rem 0;
  flex-wrap: wrap;
  max-width: 100%;
  position: relative;

  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    flex: 66.666%;
    max-width: 66.666%;
    padding: 1.5rem;
    &::after {
      content: "";
      top: 0;
      width: 3px;
      right: 0px;
      height: 100%;
      display: block;
      position: absolute;
      border-radius: 3px;
      background-color: ${props => props.theme.primary};
      box-shadow: 2px 2px 0px ${props => props.theme.dark};
    }
  }
`
export const BoxTag = styled.div`
  display: none;

  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    display: flex;
    flex: 33.333%;
    flex-wrap: wrap;
    padding: 1.5rem;
    max-width: 33.333%;
  }
`
export const Tag = styled.p`
  flex: 100%;
  display: block;
  max-width: 100%;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0.5rem 0;
  &::before {
    content: "#";
    display: inline-block;
  }
`
export const BoxElementTitle = styled.h2`
  flex: 100%;
  max-width: 100%;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 1.5rem 0;
  text-align: center;
  font-family: ${props => props.theme.font_secondary};
  @media (min-width: ${props => props.theme.breakpoint_tablet}) {
    font-size: 2.4rem;
    text-align: left;
  }
`
export const Step = styled.div`
  z-index: 0;
  top: 8.5rem;
  width: 18rem;
  display: flex;
  height: 16rem;
  margin: 0 auto;
  overflow: hidden;
  font-size: 2.4rem;
  font-weight: bold;
  position: relative;
  text-align: center;
  align-items: center;
  font-family: ${props => props.theme.font_secondary};
  &::before {
    z-index: -1;
    width: 100%;
    ${props =>
      props.number === 1
        ? css`
            content: "1";
          `
        : `${
            props.number === 2
              ? css`
                  content: "2";
                `
              : css`
                  content: "3";
                `
          }`}
    font-size: 20rem;
    position: absolute;
    color: ${props => props.theme.muted};
  }
  @media (min-width: ${props => props.theme.breakpoint_tablet}) {
    display: none;
  }
`
