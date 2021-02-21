import styled from "styled-components"
import Image from "gatsby-background-image"

export const AdsTagBox = styled.div`
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
    background-color: ${props => props.theme.color.colorBackground.hex};
  }
`

export const AdsTag = styled.div`
  width: 100%;
  display: block;
  position: relative;
  border-radius: 0.6rem;
  background-color: white;
  padding: ${props => props.theme.settings.break};
  border: ${props => props.theme.border} solid ${props => props.theme.color.colorBackground.hex};
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
  border: 1rem solid ${props => props.theme.color.colorBackground.hex};
`

export const BoxContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 6rem;
  position: relative;
  justify-content: center;
  padding: 0 ${props => props.theme.settings.break};
`

export const AdsTagName = styled.h1`
  flex: 100%;
  max-width: 100%;
  font-size: 3.5rem;
  text-align: center;
`

export const AdsTagDescription = styled.p`
  flex: 100%;
  max-width: 100%;
  font-size: 2rem;
  text-align: center;
  padding: 0.6rem 0;
`
