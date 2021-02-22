import styled, { css } from "styled-components"

export const Section = styled.section`
  min-height: calc(100vh - 23rem);
  padding: ${props => props.theme.settings.break} 0;
`

export const SiteBar = styled.div`
  flex: 35rem;
  max-width: 35rem;
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
      color: ${props => props.theme.settings.colorTextDisactive};
      background-color: ${props => props.theme.settings.colorBox};


      &:hover {
        color: ${props => props.theme.settings.colorTextDisactive};
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
  font-weight: bold;
  font-size: 1.5rem;
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
    flex: calc(100% - 35rem);
    max-width: calc(100% - 35rem);
    padding: 0 ${props => props.theme.settings.break};
  }
`
