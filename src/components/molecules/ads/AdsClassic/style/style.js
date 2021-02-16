import styled from "styled-components"

export const AdsClassic = styled.div`
  width: 100%;
  height: auto;
  border-radius: 0.6rem;
  background-color: white;
  padding: ${props => props.theme.settings.break};
  border: 0.3rem solid ${props => props.theme.settings.primary};
`

export const Title = styled.h1`
  display: block;
  margin: 0 auto;
  font-size: 3rem;
  text-align: center;
`
