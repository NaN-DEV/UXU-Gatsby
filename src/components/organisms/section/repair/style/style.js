import styled, { css } from "styled-components"

export const Section = styled.section`
  flex: 100%;
  width: 100%;
  overflow: hidden;
  .row {
    padding: 0.3rem;
  }
  @media (min-width: ${props => props.theme.breakpoint_mobile}) {
    padding: ${props => props.theme.break};
  }
  @media (min-width: ${props => props.theme.breakpoint_tablet}) {
    flex: calc(100% - 250px);
    width: calc(100% - 250px);
  }
  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    flex: calc(100% - 500px);
    width: calc(100% - 500px);
  }
`

export const Box = styled.div`
  flex: 100%;
  display: flex;
  max-width: 100%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: ${props => (props.margin ? "1.5rem" : 0)} 0;
  min-height: ${props => (props.half ? "50vh" : "100vh")};
  padding: ${props => props.theme.break} 3px ${props => props.theme.break} 0;
`
export const BoxAllElement = styled.div`
  flex: 100%;
  display: flex;
  max-width: 100%;
  flex-wrap: wrap;
  padding: 0 1.5rem 0 1.5rem;
  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    flex: 70%;
    max-width: 70%;
  }
`

export const BoxElement = styled.div`
  flex: 100%;
  max-width: 100%;
  flex-wrap: wrap;
  padding: 1.5rem 0;
  display: inline-flex;
  @media (min-width: ${props => props.theme.breakpoint_tablet}) {
    flex: 100%;
    max-width: 100%;
    ${props =>
      props.mobile
        ? css`
            display: none;
          `
        : css`
            display: flex;
          `}
    flex: ${props => (props.size ? props.size : "100%")};
    max-width: ${props => (props.size ? props.size : "100%")};
    ${props =>
      props.left &&
      css`
        padding-left: 1.5rem;
      `}
    ${props =>
      props.right &&
      css`
        padding-right: 1.5rem;
      `}
  }
`

export const BoxTitle = styled.h1`
  width: 100%;
  text-align: left;
  font-size: 1.5rem;
  font-weight: bold;
  @media (min-width: ${props => props.theme.tablet}) {
    font-size: 5rem;
    font-size: 3.3rem;
  }
`
export const BoxError = styled.p`
  width: 100%;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 1rem 0.3rem 0 0.3rem;
`

export const BoxTag = styled.ul`
  display: none;
  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    flex: 30%;
    display: flex;
    max-width: 30%;
    flex-wrap: wrap;
    list-style: none;
    align-content: stretch;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column-reverse;
  }
`
export const BoxTagPkt = styled.li`
  font-size: 1.5rem;
  font-weight: bold;
  padding: 1.5rem;
`

export const Step = styled.div`
  z-index: 0;
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
`
