import styled from "styled-components"

export const Ul = styled.ul`
  width: auto;
  display: block;
  list-style: none;
  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    width: 112px;
  }
`
export const Li = styled.li`
  width: auto;
  padding: 0 3rem 0 0;
  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    width: 112px;
    padding: 0 0 3rem 0;
  }
`
export const Link = styled.a`
  width: 42px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    width: 112px;
  }
`

export const BoxIcon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  position: relative;
  border-radius: 100%;
  align-items: center;
  background-color: #fff;
  justify-content: center;
  &:hover {
    box-shadow: 0px 0px 0px 2px #8d95f2;
  }
`

export const BoxQuantityShare = styled.div`
  display: none;
  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    display: block;
    color: #64707d;
    margin-left: auto;
    font-size: 1.6rem;
    position: relative;
    vertical-align: 15px;
  }
`
