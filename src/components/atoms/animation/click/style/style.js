import styled from 'styled-components';

const Button = styled.button`
  bottom: 0;
  position: absolute;
  left: calc(50% - 15px);
  background-color: transparent;
  animation: arrow 1.3s infinite;

  @keyframes arrow {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-15px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  svg {
    width: 30px;
    path {
      transition: ${props => props.theme.animation_time};
      fill: ${props => (props.secondary ? props.theme.secondary : props.theme.primary)};
    }
  }

  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    left: calc(50% - 25px);
    animation: arrow 1.3s infinite;

    @keyframes arrow {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-30px);
      }
      100% {
        transform: translateY(0px);
      }
    }
    svg {
      width: 60px;
    }
    &:hover {
      svg {
        path {
          fill: ${props =>
            props.secondary ? props.theme.secondary_hover : props.theme.primary_hover};
        }
      }
    }
  }
`;

export default Button;
