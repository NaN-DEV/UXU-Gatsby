import styled, { css } from 'styled-components';

export const Form = styled.form`
  width: 100%;
  position: relative;
`;

export const H1 = styled.h1`
  line-height: 1;
  font-size: 30px;
  padding-top: 15px;
  font-weight: normal;
  ${props =>
    props.secondary === 1
      ? css`
          color: ${props.theme.secondary};
        `
      : css`
          color: ${props.theme.primary};
        `}
          @media (min-width: ${props => props.theme.breakpoint_desktop}) {
  font-size: 60px;
  padding-top: 30px;
          }
`;
