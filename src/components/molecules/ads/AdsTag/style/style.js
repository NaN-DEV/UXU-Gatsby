import styled from "styled-components"
import Image from "gatsby-image"

export const AdsClassic = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  border-radius: 0.6rem;
  background-color: white;
  padding: ${props => props.theme.settings.break};
  border: ${props => props.theme.border} solid ${props => props.theme.settings.primary};
`
export const BoxImg = styled.div`
  flex: 100%;
  display: block;
  max-width: 100%;
  position: relative;
  @media (min-width: ${props => `${props.theme.settings.breakpoint_mobile}px`}) {
    flex: 20rem;
    width: 20rem;
  }
`

export const Img = styled(Image)`
  width: 100%;
  display: block;
`

export const BoxContent = styled.div`
  flex: 100%;
  display: block;
  max-width: 100%;
  position: relative;
  padding-top: ${props => props.theme.settings.break};
  @media (min-width: ${props => `${props.theme.settings.breakpoint_mobile}px`}) {
    padding-top: 0;
    flex: calc(100% - 25rem);
    max-width: calc(100% - 25rem);
    padding-left: ${props => props.theme.settings.break};
  }
`

export const Title = styled.h1`
  display: block;
  font-size: 3rem;
  text-align: left;
  span {
    color: ${props => props.theme.settings.dark};
  }
`

export const Description = styled.p`
  font-size: 1.5rem;
  padding: 1.5rem 0;
`
