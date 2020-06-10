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
  font-size: 3.3rem;
  max-width: ${props => (props.big ? "120rem" : "90rem")};
  text-align: center;
  font-family: ${props => props.theme.font_secondary};
  @media (min-width: ${props => props.theme.breakpoint_tablet}) {
    font-size: 5rem;
  }
  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    font-size: 6rem;
  }
`
export const Description = styled.p`
  width: 100%;
  display: block;
  font-size: 2.3rem;
  padding: 1.5rem 0 0 0;
  text-align: center;
  @media (min-width: ${props => props.theme.breakpoint_tablet}) {
    font-size: 3.3rem;
  }
  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    font-size: 4.3rem;
  }
`

export const BoxButton = styled.div`
  flex: 100%;
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  padding-top: 3rem;
  align-items: center;
  justify-content: center;
  p {
    flex: 100%;
    max-width: 100%;
    text-align: center;
    font-weight: bold;
    font-size: 2.4rem;
    padding: 1.5rem 3rem;
  }
  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    p {
      flex: none;
      max-width: auto;
    }
  }
`
