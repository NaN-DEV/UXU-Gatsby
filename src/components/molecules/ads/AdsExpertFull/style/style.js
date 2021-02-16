import styled from "styled-components"
import Image from "gatsby-background-image"

export const AdsExpert = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  border-radius: 0.6rem;
  background-color: white;
  padding: ${props => props.theme.settings.break};
  border: ${props => props.theme.border} solid ${props => props.theme.settings.primary};
`

export const Img = styled(Image)`
  width: 20rem;
  height: 20rem;
  display: block;
  overflow: hidden;
`

export const BoxContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  align-items: center;
  align-content: stretch;
  flex-direction: column;
  justify-content: center;
  flex: calc(100% - 50rem);
  max-width: calc(100% - 50rem);
  padding: 0 ${props => props.theme.settings.break};

  &::before {
    right: 0;
    bottom: 0;
    content: "";
    height: 100%;
    width: 1px;
    position: absolute;
    border: solid #000000;
    box-shadow: 3px 3px 0px #64707d;
  }
`

export const ExpertName = styled.h1`
  order: 0;
  flex: 0 1 auto;
  font-size: 6rem;
  align-self: auto;
`

export const ExpertDescription = styled.p`
  order: 0;
  flex: 0 1 auto;
  align-self: auto;
  font-size: 1.5rem;
`

export const ExpertPage = styled.div`
  order: 0;
  flex: 0 1 auto;
  align-self: auto;
  font-size: 1.5rem;

  a {
    svg {
      fill: ${props => props.theme.settings.dark};
    }
    &:hover {
      svg {
        fill: ${props => props.theme.settings.primary};
      }
    }
  }
`

export const BoxExpertContact = styled.div`
  width: 20rem;
  display: block;
  overflow: hidden;
`

export const Point = styled.div`
  width: 100%;
  padding: 0.5rem 1.5rem;
`

export const PointTitle = styled.h6`
  font-size: 2rem;
  color: ${props => props.theme.settings.dark};
`

export const PointScore = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
`
