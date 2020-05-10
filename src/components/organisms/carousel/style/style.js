import styled, { css } from "styled-components"

export const Carousel = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`

export const CarouselContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  transition: transform ${props => props.animationSpeed + "ms"} ease-out;
`

export const CarouselItem = styled.div`
  width: 100vw;
`

export const BoxButton = styled.div`
  width: 100%;
  display: block;
  margin: 0 auto;
  max-width: 1920px;
  position: absolute;
  height: 100%;
`

export const Button = styled.button`
  top: calc(50% - 15px);
  z-index: 100;
  position: absolute;
  ${props =>
    props.back
      ? css`
          left: 15px;
          transform: rotate(90deg);
        `
      : css`
          right: 15px;
          transform: rotate(-90deg);
        `}
  svg {
    height: 30px;
    path {
      fill: ${props =>
        props.secondary === 1 ? props.theme.secondary : props.theme.primary};
      transition: ${props => props.theme.animation_time};
    }
  }
  &:hover {
    ${props =>
      props.back
        ? css`
            left: 12px;
          `
        : css`
            right: 22px;
          `}
    svg {
      path {
        ${props =>
          props.active
            ? `${
                props.secondary === 1
                  ? props.theme.secondary
                  : props.theme.primary
              }`
            : `${
                props.secondary === 1
                  ? props.theme.secondary_hover
                  : props.theme.primary_hover
              }`}
      }
    }
  }
  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    top: calc(50% - 30px);
    ${props =>
      props.back
        ? css`
            left: 15px;
          `
        : css`
            right: 15px;
          `}
    svg {
      height: 60px;
    }
    &:hover {
      ${props =>
        props.back
          ? css`
              left: 12px;
            `
          : css`
              right: 12px;
            `}
    }
  }
`
