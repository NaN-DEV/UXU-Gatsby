import styled from 'styled-components';
import { Link } from 'gatsby';

export const Button = styled.button`
  border: 0;
  padding-right: 0;
  position: relative;
  white-space: nowrap;
  letter-spacing: ${props => props.theme.letter_spacing};
  font-size: ${props => props.theme.font_size_mobile_button};
  color: ${props => (props.secondary === 1 ? props.theme.secondary : props.theme.primary)};

  svg {
    display: none;
  }

  &:hover {
    color: ${props =>
      props.secondary === 1 ? props.theme.secondary_hover : props.theme.primary_hover};
  }

  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    padding-right: 45px;
    font-size: ${props => props.theme.font_size_desctop_button};
    svg {
      top: 2px;
      right: 0px;
      display: block;
      position: absolute;
      transform: rotate(-90deg);
      transition: ${props => props.theme.animation_time};
      width: ${props => props.theme.font_size_desctop_button};
      path {
        transition: ${props => props.theme.animation_time};
        fill: ${props => (props.secondary === 1 ? props.theme.secondary : props.theme.primary)};
      }
    }
    &:hover {
      svg {
        right: 10px;
        path {
          fill: ${props =>
            props.secondary === 1 ? props.theme.secondary_hover : props.theme.primary_hover};
        }
      }
    }
  }
`;

export const StyledLink = styled(Link)`
  border: 0;
  background-color: transparent;
`;
