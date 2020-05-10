import styled, { css } from 'styled-components';

const Triangle = styled.div`
  width: auto;
  height: auto;
  position: relative;
  ${props =>
    props.secondary === 1
      ? css`
          border-right: 15rem solid transparent;
          border-bottom: 9rem solid ${props.theme.secondary};
        `
      : css`
          border-right: 15rem solid transparent;
          border-bottom: 9rem solid ${props.theme.primary};
        `}
   

  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    width: auto;
    height: auto;
    position: relative;
      ${props =>
        props.secondary === 1
          ? css`
              border-right: 29rem solid transparent;
              border-bottom: 18rem solid ${props.theme.secondary};
            `
          : css`
              border-right: 29rem solid transparent;
              border-bottom: 18rem solid ${props.theme.primary};
            `}
  }
`;

export default Triangle;
