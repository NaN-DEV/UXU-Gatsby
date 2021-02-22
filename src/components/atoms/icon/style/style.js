import styled, { css } from "styled-components"

const BoxIcon = styled.div`
  display: block;
  position: relative;
  svg {
    display: block;
    transition: all 0.3s;
    fill: ${props => props.theme.settings.colorTextActive};

    ${props =>
      props.size
        ? css`
            height: ${`${props.size}rem`};
          `
        : css`
            height: 3rem;
          `}
  }
`

export default BoxIcon
