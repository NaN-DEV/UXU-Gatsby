import styled, { css } from "styled-components"

const Li = styled.li`
  flex: 100%;
  width: 100%;
  display: flex;
  margin: 7.5px 0;
  justify-content: center;

  &:last-of-type {
    margin: 7.5px 0 0 0;
  }

  a {
    ${props =>
      props.secondary === 1
        ? css`
            color: ${props.active
              ? props.theme.secondary
              : props.theme.secondary};
          `
        : css`
            color: ${props.active ? props.theme.primary : props.theme.primary};
          `}
              transition: ${props => props.theme.animation_time};
  }

  &:hover {
    a {
      ${props =>
        props.secondary === 1
          ? css`
              color: ${props.active
                ? props.theme.secondary_hover
                : props.theme.secondary_hover};
            `
          : css`
              color: ${props.active
                ? props.theme.primary_hover
                : props.theme.primary_hover};
            `}
    }
  }

  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    flex: none;
    width: auto;
    margin: 0px 15px;


    &:first-of-type {
      margin: 0 15px 0 0;
    }
    &:last-of-type {
      margin:  ${props => (props.length ? "0 0 0 15px" : "0 0 0 0")};
    }
  }
`

export default Li
