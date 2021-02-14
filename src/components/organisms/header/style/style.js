import styled from "styled-components"

export const Header = styled.header`
  top: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  z-index: 999;
  display: flex;
  position: fixed;
  background-color: ${props => props.theme.settings.secondary};
`

export const BreakHeader = styled.div`
  width: 100%;
  height: 6rem;
  display: block;
  position: relative;
`
