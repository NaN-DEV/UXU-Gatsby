import styled, { css } from "styled-components"

export const BoxCategory = styled.div`
  flex: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  ${props =>
    props.mobile &&
    css`
      @media (min-width: ${props => props.theme.breakpoint_desktop}) {
        display: none;
      }
    `}
`

export const Ul = styled.ul`
  display: none;
  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    flex: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    align-items: center;
    justify-content: flex-start;
  }
`
export const Li = styled.li`
  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    height: 4rem;
    padding-right: 0.5rem;
  }
`

export const Title = styled.li`
  display: flex;
  font-weight: bold;
  font-size: 2.4rem;
  align-items: center;
  padding-right: 1.5rem;
  font-family: ${props => props.theme.font_secondary};
  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    flex: none;
    width: auto;
    height: 4rem;
  }
`
