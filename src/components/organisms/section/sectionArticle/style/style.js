import styled, { css } from "styled-components"

export const Section = styled.section`
  min-height: calc(100vh - 23rem);
  padding: ${props => props.theme.settings.break} 0;
`

export const SiteBar = styled.div`
  ${props => {
    switch (props.theme.site) {
      case "left":
        return css`
          flex: 8rem;
          max-width: 8rem;
        `
      default:
        return css`
          flex: 30rem;
          max-width: 30rem;
        `
    }
  }}

  position: relative;
`

export const BoxArticle = styled.div`
  position: relative;
  flex: calc(100% - 38rem);
  max-width: calc(100% - 38rem);
`
