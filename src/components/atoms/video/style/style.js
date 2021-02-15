import styled, { css } from "styled-components"

export const Video = styled.div`
  width: 100%;
  iframe {
    width: 100%;
    ${props =>
      props.big
        ? css`
            height: 200px;
          `
        : css`
            height: 200px;
          `}
  }
  @media (min-width: ${props => props.theme.breakpoint_tablet}) {
    iframe {
      ${props =>
        props.big
          ? css`
              height: 300px;
            `
          : css`
              height: 200px;
            `}
    }
  }
  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    iframe {
      ${props =>
        props.big
          ? css`
              height: 500px;
            `
          : css`
              height: 300px;
            `}
    }
  }
`
