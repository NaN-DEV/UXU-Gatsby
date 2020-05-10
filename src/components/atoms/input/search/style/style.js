import styled, { css } from 'styled-components';

export const Search = styled.div`
  max-width: 100%;
  max-height: 60px;
  position: relative;
`;

export const PlaceholderDiv = styled.div`
  top: 1rem;
  left: 1.5rem;
  opacity: 1;
  z-index: -100;
  font-size: 3rem;
  position: absolute;
  opacity: ${props => props.active && 0};
  transition: ${props => props.theme.animation_time};
  ${props =>
    props.secondary === 1
      ? css`
          color: ${props.active ? props.theme.secondary : props.theme.secondary};
        `
      : css`
          color: ${props.active ? props.theme.primary : props.theme.primary};
        `}
`;

export const Button = styled.button`
  top: 3px;
  right: 3px;
  display: flex;
  min-width: 54px;
  min-height: 54px;
  position: absolute;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  transition: ${props => props.theme.animation_time};
  ${props =>
    props.secondary === 1
      ? css`
          color: ${props.theme.secondary};
        `
      : css`
          color: ${props.theme.primary};
        `}

  svg {
    path {
      transition: ${props => props.theme.animation_time};
      ${props =>
        props.secondary === 1
          ? css`
              fill: ${props.theme.secondary};
            `
          : css`
              fill: ${props.theme.primary};
            `}
    }
  }

  &:hover {
    ${props =>
      props.secondary === 1
        ? css`
            background-color: ${props.theme.secondary};
          `
        : css`
            background-color: ${props.theme.primary};
          `}
    
    svg {
      path {
        ${props =>
          props.secondary === 1
            ? css`
                fill: ${props.theme.secondary};
              `
            : css`
                fill: ${props.theme.secondary};
              `}
      }
    }
  }
`;

export const Input = styled.input``;
