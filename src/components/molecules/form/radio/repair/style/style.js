import styled, { css } from "styled-components"

export const Selection = styled.div`
  flex: 100%;
  width: 100%;
  padding: 1.5rem 0;
  position: relative;
  @media (min-width: ${props => props.theme.breakpoint_mobile}) {
    flex: 30%;
    width: 30%;
    padding: 1.5rem;
  }
`
export const Input = styled.input`
  display: none;
  &:checked ~ label {
    cursor: no-drop;
    background-color: ${props => props.theme.dark};
    box-shadow: 3px 3px 0px ${props => props.theme.primary};
  }
`
export const Label = styled.label`
  flex: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 0.5rem;
  overflow: hidden;
  min-height: 150px;
  position: relative;
  border-radius: 3px;
  justify-content: center;
  ${props =>
    props.active
      ? css`
          cursor: pointer;

          background-color: ${props => props.theme.primary};
          box-shadow: 3px 3px 0px ${props => props.theme.dark};
        `
      : css`
          cursor: no-drop;
          background-color: ${props => props.theme.muted};
          box-shadow: 3px 3px 0px ${props => props.theme.dark};
        `}

  &:hover {
    ${props =>
      props.active
        ? css`
            cursor: pointer;
            background-color: ${props => props.theme.dark};
            box-shadow: 3px 3px 0px ${props => props.theme.primary};
          `
        : css`
            cursor: no-drop;
            background-color: ${props => props.theme.muted};
            box-shadow: 3px 3px 0px ${props => props.theme.dark};
          `}
  }
  .icon {
    margin: 1.5rem 0;
    width: 6rem !important;
    height: 6rem !important;
  }
  svg {
    width: 6rem !important;
    height: 6rem !important;

    ${props =>
      props.active
        ? css`
            fill: ${props => props.theme.muted};
          `
        : css`
            cursor: no-drop;
            fill: ${props => props.theme.dark};
          `}
  }

  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    min-height: 250px;
    .icon {
      width: 12rem !important;
      height: 12rem !important;
    }
    svg {
      width: 12rem !important;
      height: 12rem !important;
    }
  }
`
export const Strong = styled.strong`
  flex: 100%;
  width: 100%;
  height: 1rem;
  line-height: 1;
  font-size: 0.5rem;
  font-weight: bold;
  text-align: center;
 
      ${props =>
        props.active
          ? css`
              color: ${props => props.theme.muted};
            `
          : css`
              color: ${props => props.theme.dark};
            `}

  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    height: 1rem;
    font-size: 1rem;
  }
`
export const Title = styled.h4`
  flex: 100%;
  width: 100%;
  line-height: 1;
  height: 1.2rem;
  font-weight: bold;
  font-size: 1.2rem;
  text-align: center;
  font-family: ${props => props.theme.font_secondary};
        ${props =>
          props.active
            ? css`
                color: ${props => props.theme.muted};
              `
            : css`
                color: ${props => props.theme.dark};
              `}

  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    height: 2.4rem;
    font-size: 2.4rem;
  }
`
export const Description = styled.p`
  flex: 100%;
  width: 100%;
  height: 0.5rem;
  display: block;
  line-height: 1;
  font-size: 0.5rem;
  font-weight: bold;
  text-align: center;
  padding-bottom: 0.5rem;
        ${props =>
          props.active
            ? css`
                color: ${props => props.theme.muted};
              `
            : css`
                color: ${props => props.theme.dark};
              `}

  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    height: 1rem;
    font-size: 1rem;
  }
`
