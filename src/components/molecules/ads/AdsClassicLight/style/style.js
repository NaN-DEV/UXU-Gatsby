import styled, { css } from "styled-components"

export const AdsClassicLight = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  margin-bottom: ${props => props.theme.settings.break};
`

export const Title = styled.h1`
  width: 100%;
  font-size: 2rem;
  padding: ${props => props.theme.settings.break};
  color: ${props => props.theme.settings.colorText};
  background-color: ${props => props.theme.settings.colorBackgroundLight};
  border-bottom: ${props => props.theme.settings.borderLight} solid ${props => props.theme.settings.colorBackgroundDark};
`

export const BoxContent = styled.div`
  width: 100%;
  position: relative;
  padding: ${props => props.theme.settings.break};
  background-color: ${props => props.theme.settings.colorBackgroundLight};
`
