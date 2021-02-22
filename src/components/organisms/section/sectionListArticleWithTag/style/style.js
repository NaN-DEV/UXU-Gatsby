import styled, { css } from "styled-components"

export const Section = styled.section`
  min-height: calc(100vh - 23rem);
  padding: ${props => props.theme.settings.break} 0;
`

export const SiteBar = styled.div`
  flex: 35rem;
  max-width: 35rem;
  position: relative;

  @media (min-width: ${props => `${props.theme.settings.breakpoint_tablet}px`}) {
    ${props => {
      switch (props.theme.breakPoint) {
        case "tablet":
          return css`
            display: block;
          `
        default:
          return css`
            display: none;
          `
      }
    }}
  }

  @media (min-width: ${props => `${props.theme.settings.breakpoint_desktop}px`}) {
    display: block;
  }
`

export const Point = styled.p`
  display: flex;
  font-size: 1.5rem;
  font-weight: bold;
  color: ${props => props.theme.settings.colorTextDisactive};
`

export const Title = styled.h6`
  font-size: 2rem;
  padding-top: 3rem;
  padding-bottom: ${props => props.theme.settings.break};
`

export const BoxArticle = styled.div`
  flex: 100%;
  max-width: 100%;
  position: relative;

  @media (min-width: ${props => `${props.theme.settings.breakpoint_tablet}px`}) {
    padding: 0 1.5rem;
    flex: calc(100% - 35rem);
    max-width: calc(100% - 35rem);
  }
`
