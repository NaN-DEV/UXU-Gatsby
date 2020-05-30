import styled from "styled-components"

export const Box = styled.div`
  height: auto;
  border-radius: 3px;
  width: calc(100% - 3px);
  background-color: ${props => props.theme.muted};
  box-shadow: 3px 3px 0px ${props => props.theme.dark};
  border: ${props => props.theme.border} solid ${props => props.theme.primary};
`

export const Title = styled.h1`
  display: block;
  margin: 0 auto;
  font-size: 1.8rem;
  max-width: 25rem;
  text-align: center;
  font-family: ${props => props.theme.font_secondary};
  @media (min-width: ${props => props.theme.breakpoint_tablet}) {
    font-size: 5rem;
    max-width: 90rem;
  }
  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    font-size: 6rem;
    max-width: 90rem;
  }
`

export const BoxTag = styled.div`
  width: 100%;
  display: block;
  padding: 1.5rem 0;
  ul {
    justify-content: center;
  }
`
