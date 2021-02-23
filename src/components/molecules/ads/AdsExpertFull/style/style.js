import styled from "styled-components"
import Image from "gatsby-background-image"

export const AdsExpertBox = styled.div`
  width: 100%;
  position: relative;

  .AdsExpertRow {
    padding-bottom: 0;
    padding-top: 6.7rem;
  }

  &::before {
    top: 0;
    left: 0;
    z-index: 0;
    content: "";
    width: 100%;
    height: 13rem;
    display: block;
    position: absolute;
    background-color: ${props => props.theme.settings.colorBorder};
  }
`

export const AdsExpert = styled.div`
  z-index: 1;
  width: 100%;
  display: block;
  position: relative;
  padding: ${props => props.theme.settings.break};
  border-radius: ${props => props.theme.settings.borderRadius};
  background-color: ${props => props.theme.settings.colorMainBackGround};
  border: ${props => props.theme.border} solid ${props => props.theme.settings.colorBorder};
`

export const Img = styled(Image)`
  top: -7rem;
  width: 13rem;
  height: 13rem;
  display: block;
  overflow: hidden;
  border-radius: 50%;
  left: calc(50% - 6.5rem);
  position: absolute !important;
  border: ${props => props.theme.settings.borderFat} solid ${props => props.theme.settings.colorBorder};
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
  padding: ${props => props.theme.settings.break} 0;
`

export const ExpertPage = styled.div`
  order: 0;
  flex: 0 1 auto;
  align-self: auto;
  font-size: 1.5rem;

  a {
    svg {
      fill: ${props => props.theme.settings.colorTextActive};
    }
    &:hover {
      svg {
        fill: ${props => props.theme.settings.colorTextDisactive};
      }
    }
  }
`

export const Point = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding-right: ${props => props.theme.settings.break};
`

export const PointIcon = styled.h6`
  padding: 0 ${props => props.theme.settings.breakLight};
  svg {
    fill: ${props => props.theme.settings.colorTextDisactive};
  }
`

export const PointScore = styled.p`
  font-size: 1.5rem;
  font-weight: normal;
`
