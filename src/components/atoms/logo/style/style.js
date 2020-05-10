import styled from 'styled-components';

const Brand = styled.div`
  display: block;
  width: ${props =>
    props.width_mobile ? props.width_mobile : `${props.width ? props.width : 'auto'}`};
  height: ${props =>
    props.height_mobile ? props.height_mobile : `${props.height ? props.height : '30px'}`};
  a {
    width: ${props =>
      props.width_mobile ? props.width_mobile : `${props.width ? props.width : 'auto'}`};
    height: ${props =>
      props.height_mobile ? props.height_mobile : `${props.height ? props.height : '30px'}`};
  }
  svg {
    margin: 0 auto;
    display: block;
    transition: ${({ theme }) => theme.animation_time};
    fill: ${props => (props.secondary === 1 ? props.theme.secondary : props.theme.primary)};
    width: ${props =>
      props.width_mobile ? props.width_mobile : `${props.width ? props.width : 'auto'}`};
    height: ${props =>
      props.height_mobile ? props.height_mobile : `${props.height ? props.height : '30px'}`};
  }
  &:hover {
    svg {
      fill: ${props =>
        props.secondary === 1 ? props.theme.secondary_hover : props.theme.primary_hover};
    }
  }

  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    width: ${props => (props.width ? props.width : 'auto')};
    height: ${props => (props.height ? props.height : '60px')};
    a {
      width: ${props => (props.width ? props.width : 'auto')};
      height: ${props => (props.height ? props.height : '60px')};
    }
    svg {
      width: ${props => (props.width ? props.width : 'auto')};
      height: ${props => (props.height ? props.height : '60px')};
    }
  }
`;

export default Brand;
