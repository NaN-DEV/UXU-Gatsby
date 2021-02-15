import styled, { css } from "styled-components"

export const Section = styled.section`
  flex: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;
  .row {
    padding: 0;
  }
`

export const BoxForm = styled.div`
  flex: 100%;
  max-width: 100%;
  position: relative;
  padding: 1.5rem 0rem;

  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    flex: 50%;
    max-width: 50%;
    padding: 3rem;

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
export const BoxDataCompany = styled.div`
  flex: 100%;
  display: flex;
  max-width: 100%;
  padding-top: 3rem;
  align-items: center;
  justify-content: center;
  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    flex: 50%;
    max-width: 50%;
    padding-top: 0rem;
  }
`

export const List = styled.ul`
  display: block;
  margin: 0 auto;
  padding: 1.5rem 0;
  list-style: none;
  max-width: 300px;
  font-size: 2.4rem;
`
export const ListTitle = styled.li`
  width: 100%;
  font-weight: bold;
`
export const ListLI = styled.li`
  width: 100%;
  white-space: none;
  font-weight: normal;
  display: inline-block;
  padding-top: ${props => (props.first ? "3rem" : "0")};
`

export const ListName = styled.strong`
  white-space: none;
  font-weight: bold;
  padding-right: 0.5rem;
  display: inline-block;
`

export const ListLink = styled.a`
  font-weight: normal;
`

export const BoxFormElement = styled.div`
  flex: 100%;
  max-width: 100%;
  margin: ${props => (props.margin ? "1.5rem" : 0)} 0;
  padding: ${props => props.theme.break} 3px ${props => props.theme.break} 0;

  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    flex: ${props => (props.half ? "50%" : "100%")};
    max-width: ${props => (props.half ? "50%" : "100%")};
    ${props =>
      props.left &&
      css`
        padding-left: ${props => props.theme.break};
      `}
    ${props =>
      props.right &&
      css`
        padding-right: ${props => props.theme.break};
      `}
  }
`
export const BoxFormTitle = styled.h1`
  width: 100%;
  font-size: 3.3rem;
  text-align: left;
  font-weight: bold;
  @media (min-width: ${props => props.theme.tablet}) {
    font-size: 5rem;
  }
`
export const BoxFormError = styled.p`
  width: 100%;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 1rem 0.3rem 0 0.3rem;
`
