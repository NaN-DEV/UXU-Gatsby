import styled from "styled-components"

export const Box = styled.div`
  width: 100%;
  height: auto;
  z-index: 1000;
  border-radius: 3px;
  background-color: ${props => props.theme.muted};
  box-shadow: 3px 3px 0px ${props => props.theme.dark};
  border: ${props => props.theme.border} solid ${props => props.theme.primary};
`
