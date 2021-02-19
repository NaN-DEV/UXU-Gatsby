import styled from "styled-components"
import Image from "gatsby-background-image"

export const ExpertAds = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  position: relative;
  border-radius: 0.6rem;
  background-color: white;
  padding: ${props => props.theme.settings.break};
  margin-bottom: ${props => props.theme.settings.break};
  border: 0.1rem solid ${props => props.theme.settings.normal};

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
    background-color: ${props => props.theme.settings.primary};
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
  padding-left: 0.6rem;
  flex: calc(100% - 6rem);
  max-width: calc(100% - 6rem);
`

export const ExpertDescription = styled.p`
  flex: 100%;
  padding-top: 1.5rem;
  max-width: 100%;
  text-align: left;
  font-size: 1.5rem;
`

export const ExpertMoreInfo = styled.div`
  flex: 100%;
  max-width: 100%;
  display: block;
  overflow: hidden;
`

export const Point = styled.div`
  width: 100%;
`

export const PointTitle = styled.h6`
  font-size: 1.5rem;
  color: ${props => props.theme.settings.dark};
`

export const PointScore = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
`