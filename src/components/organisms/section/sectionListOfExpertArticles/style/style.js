import styled, { css } from "styled-components"

export const Section = styled.section`
  min-height: calc(100vh - 23rem);
  padding: ${props => props.theme.settings.break} 0;
`

export const SiteBar = styled.div`
  flex: 30rem;
  max-width: 30rem;
  position: relative;


  .skills{
    a {
      width: 100%;
      font-weight: normal;
      justify-content: flex-start;

      &:hover {
        opacity: 1 !important;
      }
    }
  }

    .tag {
  
 

    li {
      padding: 0;
    }

    .menuLink {
      width: 100%;
      padding: 1.5rem;
      font-weight: normal;
      justify-content: flex-start;
      border-radius: ${props => props.theme.settings.border};

      &:hover {
        background-color: rgba(0, 0, 0, 0.1);
        color: ${props => props.theme.settings.primary};
      }
    }

    a {
      width: 100%;
      padding: 1.5rem;
      font-weight: normal;
      justify-content: flex-start;

      &:hover {
        opacity: 1 !important;
      }
    }
  }

  ${props => {
    switch (props.theme.breakPoint) {
      case "mobile":
        return css`
          display: block;
        `
      default:
        return css`
          display: none;
        `
    }
  }}


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

  svg {
    padding-right: 0.6rem;
    fill: ${props => props.theme.settings.dark};
  }
`

export const Title = styled.h6`
  font-size: 2rem;
  padding-top: 3rem;
  padding-bottom: ${props => props.theme.settings.break};
`

export const BoxArticle = styled.div`
  flex: 100%;
  max-width: 100%;
  padding: 0 1.5rem;
  position: relative;

  @media (min-width: ${props => `${props.theme.settings.breakpoint_tablet}px`}) {
    flex: calc(100% - 30rem);
    max-width: calc(100% - 30rem);
  }

  @media (min-width: ${props => `${props.theme.settings.breakpoint_desktop}px`}) {
    flex: calc(100% - 60rem);
    max-width: calc(100% - 60rem);
  }
`
