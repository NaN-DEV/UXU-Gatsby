import styled from "styled-components"
import { Link } from "gatsby"

export const Button = styled.button`
  line-height: 1.6;
  text-align: center;
  border: ${props => props.theme.border} solid;
  transition: ${props => props.theme.animation_time};
  padding: ${props => props.theme.padding_mobile_button};
  font-size: ${props => props.theme.font_size_mobile_button};
  color: ${props =>
    props.secondary === 1 ? props.theme.secondary : props.theme.primary};
  border-color: ${props =>
    props.secondary === 1 ? props.theme.secondary : props.theme.primary};

  &:hover {
    color: ${props =>
      props.secondary === 1
        ? props.theme.secondary_hover
        : props.theme.primary_hover};
    border-color: ${props =>
      props.secondary === 1
        ? props.theme.secondary_hover
        : props.theme.primary_hover};
  }
  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    padding: ${props => props.theme.padding_desctop_button};
    font-size: ${props => props.theme.font_size_desctop_button};
  }
`

export const StyledLink = styled(Link)`
  text-align: center;
  border: ${props => props.theme.border} solid;

  transition: ${props => props.theme.animation_time};
  padding: ${props => props.theme.padding_mobile_button};
  font-size: ${props => props.theme.font_size_mobile_button};
  color: ${props =>
    props.secondary === 1 ? props.theme.secondary : props.theme.primary};
  border-color: ${props =>
    props.secondary === 1 ? props.theme.secondary : props.theme.primary};
  &:hover {
    color: ${props =>
      props.secondary === 1
        ? props.theme.secondary_hover
        : props.theme.primary_hover};
    border-color: ${props =>
      props.secondary === 1
        ? props.theme.secondary_hover
        : props.theme.primary_hover};
  }
  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    padding: ${props => props.theme.padding_desctop_button};
    font-size: ${props => props.theme.font_size_desctop_button};
  }
`
