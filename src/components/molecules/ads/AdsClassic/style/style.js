import styled from "styled-components"

export const AdsClassic = styled.div`
  width: 100%;
  height: auto;
  border-radius: 0.6rem;
  background-color: white;
  padding: ${props => props.theme.settings.break};
  box-shadow: 3px 3px 0px ${props => props.theme.settings.dark};
  border: ${props => props.theme.border} solid ${props => props.theme.settings.primary};
`

export const Title = styled.h1`
  display: block;
  margin: 0 auto;
  font-size: 3rem;
  text-align: center;
`
