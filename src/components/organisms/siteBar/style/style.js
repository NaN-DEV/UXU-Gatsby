import styled, { css } from "styled-components"

export const SiteBar = styled.div`
  ${props =>
    props.desctop
      ? css`
          display: none;
          @media (min-width: ${props => props.theme.breakpoint_desktop}) {
            display: block;
            padding-top: ${props => `${props.top}rem`};
            ${props =>
              props.share
                ? css`
                    flex: 114px;
                    max-width: 114px;
                  `
                : css`
                    flex: 200px;
                    max-width: 215px;
                  `};
          }
        `
      : css`
          display: block;
          ${props =>
            props.share &&
            css`
              left: 0;
              bottom: 0;
              flex: 100%;
              height: 60px;
              width: 100vw;
              display: flex;
              z-index: 99999;
              position: fixed;
              max-width: 100%;
              background-color: ${props => props.theme.secondary};
              border-top: 3px solid ${props => props.theme.primary};
            `};

          @media (min-width: ${props => props.theme.breakpoint_desktop}) {
            padding-top: ${props => `${props.top}rem`};
            ${props =>
              props.share
                ? css`
                    left: auto;
                    flex: 114px;
                    bottom: auto;
                    max-width: 114px;
                    position: relative;
                    background-color: transparent;
                    border-top: 0px solid transparent;
                  `
                : css`
                    flex: 200px;
                    max-width: 215px;
                  `};
          }
        `}
`

export const Header = styled.div`
  font-size: 2.4rem;
  font-weight: bold;
  padding-bottom: 1.5rem;
  color: ${props => props.theme.primary};
  font-family: ${props => props.theme.font_secondary};
`
export const BoxSiteBar = styled.div`
  width: 100%;
  display: block;
  position: ${props => (props.glue ? "fixed" : "relative")};
  width: ${props => (props.glue ? `${props.share ? "114px" : "215px"}` : "100%")};
  ${props =>
    props.share &&
    css`
      width: 100vw;
      height: 60px;
      display: flex;
      align-items: center;
      padding: 0 1.5rem;
      a {
        margin-left: auto;
      }
      ul {
        height: 42px;
        display: flex;
        li {
          height: 42px;
          a {
            display: flex;
          }
        }
      }
    `}
     @media (min-width: ${props => props.theme.breakpoint_desktop}) {
         padding: 0 0 3rem 0;
         ${props =>
           props.share &&
           css`
             padding: 0;
             height: 100%;
             display: block;
             align-items: none;
             width: ${props => (props.glue ? `${props.share ? "114px" : "215px"}` : "100%")};
             a {
               display: none;
             }
             ul {
               height: auto;
               display: flex;
               li {
                 height: auto;
                 padding: auto;
               }
             }
           `}
     }
`
