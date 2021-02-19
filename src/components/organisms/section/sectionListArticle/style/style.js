import styled, { css } from "styled-components"

export const Section = styled.section`
  position: relative;
  min-height: calc(100vh - 23rem);
`

export const SiteBar = styled.div`
  flex: 30rem;
  max-width: 30rem;
  position: relative;
  padding-bottom: 1.5rem;

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

  .siteBarList {
    left: -1.5rem;
    position: relative;
    width: calc(100% + 1.5rem);

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

  .siteBarListSocialMedia {
    padding-top: 1.5rem;
    display: flex !important;

    li {
      flex: auto !important;
      max-width: max-content !important;
    }
  }

  .social {
    width: 3rem;
    height: 3rem;
    display: flex;
    border-radius: 50%;
    align-items: center;
    justify-content: center;

    svg {
      fill: ${props => props.theme.settings.dark};
    }

    &:hover {
      opacity: 1 !important;

      svg {
        fill: ${props => props.theme.settings.primary};
      }
    }
  }

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
    flex: calc(100% - 30rem);
    max-width: calc(100% - 30rem);
    padding: 0 ${props => props.theme.settings.break};
  }

  @media (min-width: ${props => `${props.theme.settings.breakpoint_desktop}px`}) {
    flex: calc(100% - 60rem);
    max-width: calc(100% - 60rem);
  }
`
