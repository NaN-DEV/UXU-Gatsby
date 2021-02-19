import styled, { css } from "styled-components"

export const AdsClassicLight = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  border-radius: 0.6rem;
  margin-bottom: 1.5rem;
  border: 1px solid ${props => props.theme.settings.normal};
`

export const Title = styled.h1`
  width: 100%;
  font-size: 2rem;
  background-color: #f9fafa;
  color: ${props => props.theme.settings.primary};
  padding: ${props => props.theme.settings.break};
  border-bottom: 1px solid ${props => props.theme.settings.normal};
`

export const BoxContent = styled.div`
  width: 100%;
  position: relative;
  background-color: white;
  padding: ${props => props.theme.settings.break};
`
