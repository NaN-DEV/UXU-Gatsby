import styled from "styled-components"

export const Ul = styled.ul`
  width: 100%;
  width: auto;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`

export const Li = styled.li`
  flex: 100%;
  display: flex;
  max-width: 100%;
  text-align: left;
  position: relative;
  padding-bottom: ${props => props.theme.settings.break};

  &:last-child {
    padding-bottom: 0;
  }
`
