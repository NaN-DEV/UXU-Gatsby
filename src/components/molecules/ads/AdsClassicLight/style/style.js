import styled, { css } from "styled-components"

export const AdsClassicLight = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  margin-bottom: ${props => props.theme.settings.break};
  border-radius: ${props => props.theme.settings.borderRadius};
  border: ${props => props.theme.settings.borderLight} solid ${props => props.theme.settings.colorBorder};
`

export const Title = styled.h1`
  width: 100%;
  font-size: 2rem;
  padding: ${props => props.theme.settings.break};
  color: ${props => props.theme.settings.colorTextDisactive};
  background-color: ${props => props.theme.settings.colorMainBackGround};
  border-bottom: ${props => props.theme.settings.borderLight} solid ${props => props.theme.settings.colorBorder};
`

export const BoxContent = styled.div`
  width: 100%;
  position: relative;
  padding: ${props => props.theme.settings.break};
  background-color: ${props => props.theme.settings.colorMainBackGround};
`
