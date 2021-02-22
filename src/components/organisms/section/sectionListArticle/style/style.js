import styled, { css } from "styled-components"

export const Section = styled.section`
  position: relative;
  min-height: calc(100vh - 23rem);
`

export const SiteBar = styled.div`
  flex: 30rem;
  max-width: 30rem;
  position: relative;
  padding-bottom: ${props => props.theme.settings.break};

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
      font-weight: normal;
      justify-content: flex-start;
      padding: ${props => props.theme.settings.break};
      border-radius: ${props => props.theme.settings.border};

      &:hover {
        color: ${props => props.theme.settings.colorText};
        background-color: ${props => props.theme.settings.colorBoxHover};
      }
    }

    a {
      width: 100%;
      font-weight: normal;
      justify-content: flex-start;
      padding: ${props => props.theme.settings.break};

      &:hover {
        opacity: 1 !important;
      }
    }
  }

  .siteBarListSocialMedia {
    display: flex !important;
    padding-top: ${props => props.theme.settings.break};

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
      fill: ${props => props.theme.settings.colorTextActive};
    }

    &:hover {
      svg {
        fill: ${props => props.theme.settings.colorTextDisactive};
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
  color: ${props => props.theme.settings.colorTextDisactive};
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
