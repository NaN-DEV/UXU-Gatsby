import styled from 'styled-components';
import { Link } from 'gatsby';

export const Button = styled.button`
  padding: 0;
  border: none;
  cursor: pointer;
  font-size: 15px;
  font-weight: bold;
  background-color: transparent;
  transition: ${props => props.theme.animation_time};
  color: ${props => (props.secondary === 1 ? props.theme.secondary : props.theme.primary)};

  &:hover {
    color: ${props =>
      props.secondary === 1 ? props.theme.secondary_hover : props.theme.primary_hover};
  }
`;

export const StyledLink = styled(Link)`
  padding: 0;
  border: none;
  cursor: pointer;
  font-size: 15px;
  font-weight: bold;
  transition: ${props => props.theme.animation_time};
  color: ${props => (props.secondary === 1 ? props.theme.secondary : props.theme.primary)};

  &:hover {
    color: ${props =>
      props.secondary === 1 ? props.theme.secondary_hover : props.theme.primary_hover};
  }
`;
