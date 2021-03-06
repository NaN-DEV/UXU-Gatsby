import styled from "styled-components"
import Image from "gatsby-background-image"

export const ExpertAds = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  position: relative;
  padding: ${props => props.theme.settings.break};
  margin-bottom: ${props => props.theme.settings.break};
  background-color: ${props => props.theme.settings.colorBackgroundLight};

  a {
    flex: 100%;
    width: 100%;
    margin: ${props => props.theme.settings.break} 0;
  }

  &::before {
    top: 0;
    left: 0;
    content: "";
    width: 100%;
    height: 3rem;
    display: block;
    position: absolute;
    background-color: ${props => props.theme.settings.colorBackgroundDisactive};
  }
`

export const Img = styled(Image)`
  width: 6rem;
  height: 6rem;
  display: block;
  overflow: hidden;
  border-radius: 100%;
`

export const ExpertName = styled.h6`
  font-size: 1.5rem;
  line-height: 6rem;
  flex: calc(100% - 6rem);
  max-width: calc(100% - 6rem);
  color: ${props => props.theme.settings.colorText};
  padding-left: ${props => props.theme.settings.breakLight};
`

export const ExpertDescription = styled.p`
  flex: 100%;
  max-width: 100%;
  text-align: left;
  font-size: 1.5rem;
  padding-top: ${props => props.theme.settings.breakLight};
`

export const ExpertMoreInfo = styled.div`
  flex: 100%;
  display: block;
  max-width: 100%;
  overflow: hidden;
`

export const Point = styled.div`
  width: 100%;
`

export const PointTitle = styled.h6`
  font-size: 1.5rem;
  color: ${props => props.theme.settings.colorBackgroundDark};
`

export const PointScore = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${props => props.theme.settings.colorText};
`
