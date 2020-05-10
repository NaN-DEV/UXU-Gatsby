import styled, { css } from 'styled-components';

export const Input = styled.div`
  width: ${props => (props.width ? props.width : '100%')};
  min-height: 60px;
  input {
    &:focus {
      outline: none;
    }
  }

  input[type='mail'],
  input[type='text'],
  input[type='number'],
  input[type='search'],
  input[type='password'] {
    width: 100%;
    border-radius: 0;
    border-style: solid;
    -webkit-appearance: none;
    background-color: transparent;
    border-width: ${props => props.theme.border};
    padding: 0 ${props => props.theme.break_mobile};
    min-height: ${props => props.theme.input_height};
    transition: ${props => props.theme.animation_time};
    font-size: ${props => props.theme.input_font_szize};
    ${props =>
      props.secondary === 1
        ? css`
            color: ${props.theme.secondary};
            border-color: ${props.theme.secondary_hover};
          `
        : css`
            color: ${props.theme.primary};
            border-color: ${props.theme.primary};
          `}
  }
`;

export const Label = styled.label``;
