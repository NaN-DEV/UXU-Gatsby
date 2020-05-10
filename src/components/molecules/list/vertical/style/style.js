import styled, { css } from "styled-components"

const List = styled.ul`
  list-style: none;
  align-items: left;

  li {
    a {
      ${props =>
        props.secondary === 1
          ? css`
              color: ${props.theme.secondary};
            `
          : css`
              color: ${props.theme.primary};
            `}
    }
  }
  &:hover {
    li {
      a {
        ${props =>
          props.secondary === 1
            ? css`
                color: ${props.theme.secondary_hover};
              `
            : css`
                color: ${props.theme.primary_hover};
              `}

        &:hover {
          ${props =>
            props.secondary === 1
              ? css`
                  color: ${props.theme.secondary};
                `
              : css`
                  color: ${props.theme.primary};
                `}
        }
      }
    }
  }
`

export default List
