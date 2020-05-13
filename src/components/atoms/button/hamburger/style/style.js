import styled, { css } from "styled-components"

// BUTTON
export const Button = styled.button`
  min-width: 30px;
  height: 30px;
  overflow: hidden;
  span {
    height: 3px;
    width: 120px;
    display: block;
    position: absolute;
    transition: ${props => props.theme.animation_time};
    background: ${props =>
      props.secondary ? props.theme.secondary : props.theme.primary};
  }
  &:hover {
    span {
      background: ${props =>
        props.secondary
          ? props.theme.secondary_hover
          : props.theme.primary_hover};
    }
  }
  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    min-width: 60px;
    height: 60px;
    ${props =>
      props.clouse === 1 &&
      css`
        transform: rotate(0deg);
        transition: ${props.theme.animation_time};
        &:hover {
          transform: rotate(90deg);
        }
      `}
  }
`

export const Box = styled.div`
  top: 0px;
  min-width: 30px;
  min-height: 30px;
  position: absolute;
  transition: ${props => props.theme.animation_time};
  ${props =>
    props.clouse === 1
      ? css`
          span:nth-child(1) {
            top: 29px;
            left: -30px;
            transform: rotate(45deg);
          }
          span:nth-child(2) {
            top: -1px;
            left: -30px;
            transform: rotate(-45deg);
          }
          span:nth-child(3) {
            display: none;
          }
        `
      : css`
          span:nth-child(1) {
            top: 0;
          }
          span:nth-child(2) {
            top: 14px;
          }
          span:nth-child(3) {
            top: 27px;
          }
          &:after {
            display: none;
          }
        `}
   @media (min-width: ${props => props.theme.breakpoint_desktop}) {
     min-width: 60px;
     min-height: 60px;
     ${props =>
       props.clouse === 1
         ? css`
             span:nth-child(1) {
               top: 29px;
               left: -30px;
               transform: rotate(45deg);
             }
             span:nth-child(2) {
               top: 20px;
               left: -20px;
               transform: rotate(-45deg);
             }
           `
         : css`
             top: 0px;
             span:nth-child(1) {
               top: 0;
             }
             span:nth-child(2) {
               top: 14px;
             }
             span:nth-child(3) {
               top: 30px;
             }
             &:after {
               content: "MENU";
               top: 45px;
               margin: 0;
               padding: 0;
               display: block;
               line-height: 1;
               font-size: 18px;
               font-weight: bold;
               position: absolute;
               letter-spacing: 2.55px;
               font-family: ${props.theme.font_family};
               transition: ${props.theme.animation_time};
               color: ${props.secondary
                 ? props.theme.secondary
                 : props.theme.primary};
             }
             ${props.toggleHover &&
             css`
               top: 27px;
               span:nth-child(1) {
                 top: 27px;
               }
               span:nth-child(2) {
                 top: 14px;
               }
               span:nth-child(3) {
                 top: 0px;
               }
               &:after {
                 top: -27px;
                 color: ${props.secondary
                   ? props.theme.secondary_hover
                   : props.theme.primary_hover};
               }
             `}
           `}
   }
`
