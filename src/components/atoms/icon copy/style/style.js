import styled, { css } from "styled-components"

const Icon = styled.div`
  display: block;
  position: relative;
  width: ${props => (props.width ? props.width : "auto")};
  height: ${props => (props.height ? props.height : "24px")};
  svg {
    display: block;
    position: relative;
    width: ${props => (props.width ? props.width : "auto")};
    height: ${props => (props.height ? props.height : "24px")};
  }
`

export default Icon
