import styled, { css } from 'styled-components';

export const PasswordContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  padding-top: ${props => props.theme.break_desctop};
`;

export const PlaceholderDiv = styled.div`
  opacity: 1;
  z-index: -100;
  position: absolute;
  transition: ${props => props.theme.animation_time};
  left: ${props => (props.active ? '0rem' : '1.5rem')};
  top: ${props => (props.active ? '0.8rem' : '4.4rem')};
  font-size: ${props => (props.active ? '1.2rem' : '2.4rem')};
  font-weight: ${props => (props.active ? 'bold' : 'normal')};
  ${props =>
    props.secondary === 1
      ? css`
          color: ${props.active ? props.theme.secondary : props.theme.secondary_hover};
        `
      : css`
          color: ${props.active ? props.theme.primary : props.theme.primary_hover};
        `}
`;

export const Input = styled.input``;
