import styled from "styled-components"

export const Ul = styled.ul`
  flex: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  justify-content: center;

  @media (min-width: ${props => props.theme.breakpoint_tablet}) {
    flex: none;
    width: auto;
  }
`
export const Li = styled.li`
  flex: 100%;
  width: 100%;
  padding: 0.5rem 0;
  font-size: 1.5rem;
  text-align: center;
  a {
    font-size: 1.5rem;
  }
  @media (min-width: ${props => props.theme.breakpoint_tablet}) {
    flex: auto;
    width: auto;
    padding: 0 0 0 1.5rem;
  }
`
