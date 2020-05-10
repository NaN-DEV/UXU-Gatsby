import styled from 'styled-components';

const Button = styled.button`
  width: 100%;
  margin-top: 30px;
  font-weight: bold;
  text-align: center;
  min-height: ${props => props.theme.input_height};
  transition: ${props => props.theme.animation_time};
  padding: ${props => props.theme.padding_mobile_button};
  font-size: ${props => props.theme.font_size_mobile_button};
  color: ${props => (props.secondary === 1 ? props.theme.primary : props.theme.secondary)};
  background: ${props =>
    props.secondary === 1 ? props.theme.secondary : props.theme.primary_hover};

  &:hover {
    background: ${props =>
      props.secondary === 1 ? props.theme.secondary_hover : props.theme.primary_hover};
  }
  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    padding: ${props => props.theme.padding_desctop_button};
    font-size: ${props => props.theme.font_size_desctop_button};
  }
`;

export default Button;
