import styled from "styled-components"

export const Header = styled.header`
  top: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  z-index: 999;
  display: block;
  position: relative;
  background-color: ${props => props.theme.settings.secondary};
  border-bottom: 1px solid ${props => props.theme.settings.normal};
`
