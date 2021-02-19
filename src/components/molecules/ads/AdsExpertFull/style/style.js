import styled from "styled-components"
import Image from "gatsby-background-image"

export const AdsExpertBox = styled.div`
  width: 100%;
  position: relative;

  .AdsExpertRow {
    padding-top: 7rem;
  }

  &::before {
    top: 0;
    left: 0;
    z-index: 0;
    content: "";
    width: 100%;
    height: 12rem;
    display: block;
    position: absolute;
    background-color: #15523a;
  }
`

export const AdsExpert = styled.div`
  width: 100%;
  display: block;
  position: relative;
  border-radius: 0.6rem;
  background-color: white;
  padding: ${props => props.theme.settings.break};
  border: ${props => props.theme.border} solid #15523a;
`

export const Img = styled(Image)`
  top: -7rem;
  width: 13rem;
  height: 13rem;
  display: block;
  overflow: hidden;
  border-radius: 50%;
  left: calc(50% - 6.5rem);
  border: 1rem solid #15523a;
  position: absolute !important;
`

export const BoxContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 6rem;
  position: relative;
  justify-content: center;
  padding: 0 ${props => props.theme.settings.break};
`

export const ExpertName = styled.h1`
  flex: 100%;
  max-width: 100%;
  font-size: 3.5rem;
  text-align: center;
`

export const ExpertDescription = styled.p`
  flex: 100%;
  max-width: 100%;
  font-size: 2rem;
  text-align: center;
  padding: 0.6rem 0;
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

export const Point = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding-right: 1.5rem;
`

export const PointIcon = styled.h6`
  padding: 0 0.6rem;
  svg {
    fill: ${props => props.theme.settings.dark};
  }
`

export const PointScore = styled.p`
  font-size: 1.5rem;
  font-weight: normal;
`
