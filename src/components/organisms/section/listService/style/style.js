import styled, { css } from "styled-components"

export const Section = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  position: relative;
`

export const Header = styled.div`
  flex: 100%;
  display: flex;
  max-width: 100%;
  text-align: center;
  position: relative;
  padding-bottom: 1.5rem;
  justify-content: center;
  h1 {
    font-size: 30px;
    max-width: 300px;
  }
  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    padding-bottom: 3rem;
    h1 {
      font-size: 60px;
      max-width: 980px;
    }
  }
`
export const MainBox = styled.div`
  flex: 100%;
  display: flex;
  max-width: 100%;
  position: relative;
  padding-bottom: 15px;

  @media (min-width: ${props => props.theme.breakpoint_tablet}) {
    flex: 50%;
    max-width: 50%;
    ${props =>
      (props.index + 1) % 2 === 0
        ? css`
            padding-right: 0;
          `
        : css`
            padding-right: 15px;
          `}
  }

  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    flex: 33.333%;
    max-width: 33.333%;
    ${props =>
      (props.index + 1) % 3 === 0
        ? css`
            padding-right: 0;
          `
        : css`
            padding-right: 15px;
          `}
  }
`
