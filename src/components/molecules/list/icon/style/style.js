import styled from "styled-components"

export const Ul = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  justify-content: flex-start;
`
export const Li = styled.li`
  flex: 100%;
  width: 100%;
  text-align: center;
  margin: 0 1.5rem 0rem -6px;
  a {
    width: 40px;
    height: 40px;
    display: flex;
    font-size: 1.5rem;
    border-radius: 50%;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: ${props => props.theme.muted};
    }
  }
  @media (min-width: ${props => props.theme.breakpoint_tablet}) {
    flex: none;
    width: auto;
  }
`
export const A = styled.a`
  width: 40px;
  height: 40px;
  display: flex;
  font-size: 1.5rem;
  border-radius: 50%;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${props => props.theme.muted};
  }
`
