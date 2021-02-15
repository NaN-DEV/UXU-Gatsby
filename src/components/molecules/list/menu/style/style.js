import styled from "styled-components"

export const Ul = styled.ul`
  margin: 0;
  padding: 3px;
  list-style: none;
`
export const Li = styled.li`
  padding: 0;

  a {
    display: block;
    text-align: left;
    min-width: 180px;
    font-size: 2.4rem;
    padding: 5px 15px;
    border-radius: 3px;
    white-space: nowrap;
    font-weight: normal;
    &:hover {
      color: ${props => props.theme.dark};
      background-color: ${props => props.theme.light};
    }
  }
`

export const LiMobile = styled.li`
  height: auto;
  display: flex;
  justify-content: center;
  a {
    width: 180px;
    margin: 5px 0 5px -3px !important;
    display: block !important;
  }
  @media (min-width: ${props => props.theme.breakpoint_tablet}) {
    display: none;
  }
`
