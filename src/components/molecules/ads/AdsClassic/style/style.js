import styled from "styled-components"

export const AdsClassic = styled.div`
  width: 100%;
  height: auto;
  padding: ${props => props.theme.settings.break};
  margin: ${props => props.theme.settings.breakFat} 0;
  background-color: ${props => props.theme.settings.colorBackgroundLight};
`

export const Title = styled.h1`
  display: block;
  margin: 0 auto;
  font-size: 3rem;
  text-align: center;
  color: ${props => props.theme.settings.colorText};
`
