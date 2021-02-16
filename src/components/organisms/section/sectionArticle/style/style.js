import styled, { css } from "styled-components"

export const Section = styled.section`
  width: 100%;
  position: relative;
`

export const SiteBar = styled.div`
  position: relative;

  ${props => {
    switch (props.theme.site) {
      case "left":
        return css`
          display: none;

          @media (min-width: ${props => `${props.theme.settings.breakpoint_tablet}px`}) {
            flex: 10rem;
            display: block;
            max-width: 10rem;
            padding-right: 1.5rem;
          }
        `
      default:
        return css`
          display: none;

          @media (min-width: ${props => `${props.theme.settings.breakpoint_desktop}px`}) {
            flex: 35rem;
            display: block;
            max-width: 35rem;
            padding-left: 1.5rem;
          }
        `
    }
  }}
`

export const BoxArticle = styled.div`
  flex: 100%;
  max-width: 100%;
  position: relative;

  @media (min-width: ${props => `${props.theme.settings.breakpoint_tablet}px`}) {
    flex: calc(100% - 10rem);
    max-width: calc(100% - 10rem);
  }

  @media (min-width: ${props => `${props.theme.settings.breakpoint_desktop}px`}) {
    flex: calc(100% - 45rem);
    max-width: calc(100% - 45rem);
  }
`
