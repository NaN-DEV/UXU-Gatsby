import styled from "styled-components"

export const AdsClassic = styled.div`
  width: 100%;
  height: auto;
  padding: ${props => props.theme.settings.break};
  border-radius: ${props => props.theme.settings.borderRadius};
  background-color: ${props => props.theme.settings.colorMainBackGround};
  border: ${props => props.theme.settings.border} solid ${props => props.theme.settings.colorBorder};
`

export const Title = styled.h1`
  display: block;
  margin: 0 auto;
  font-size: 3rem;
  text-align: center;
  color: ${props => props.theme.settings.colorTextDisactive};
`
