import styled from "styled-components"
import BgImg from "gatsby-background-image"

export const Article = styled.article`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  margin-bottom: ${props => props.theme.settings.break};
  background-color: ${props => props.theme.settings.colorBackgroundLight};

  .authorAndDate {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    padding-bottom: ${props => props.theme.settings.break};

    .authorAndDateRow {
      flex: calc(100% - 4rem);
      padding: 0 ${props => props.theme.settings.breakLight};
    }
  }

  .articleShortTitle {
    flex: 100%;
    max-width: 100%;
    font-size: 3.5rem;
    justify-content: flex-start;
    color: ${props => props.theme.settings.colorTextActive};
    padding-bottom: ${props => props.theme.settings.breakLight};

    &:hover {
      color: ${props => props.theme.settings.colorText};
    }

    @media (min-width: ${props => `${props.theme.settings.breakpoint_mobile}px`}) {
      padding-left: 3.5rem;
    }
  }

  .articleShortTag {
    flex: 100%;
    display: flex;
    flex-wrap: wrap;
    max-width: 100%;

    li {
      flex: auto !important;
      max-width: max-content !important;
      padding: 0 ${props => props.theme.settings.breakLight} ${props => props.theme.settings.breakLight} 0;
    }

    p {
      font-weight: normal;
      color: ${props => props.theme.settings.colorTextActive};

      span {
        opacity: 0.6;
      }

      &:hover {
        color: ${props => props.theme.settings.colorText};
      }
    }

    @media (min-width: ${props => `${props.theme.settings.breakpoint_mobile}px`}) {
      padding-left: 3.5rem;
    }
  }

  .articleShortMore {
    margin-left: auto;
    margin-top: ${props => props.theme.settings.break};
  }
`

export const Image = styled(BgImg)`
  flex: 100%;
  max-width: 100%;
  min-height: 30rem;
`

export const AutorImg = styled(BgImg)`
  width: 3rem;
  height: 3rem;
  display: block;
  overflow: hidden;
  position: relative;
  border-radius: 100%;
`

export const AutorName = styled.h6`
  font-size: 1.4rem;
  transition: all 0.3s;
`

export const DatePost = styled.p`
  flex: 100%;
  font-size: 1rem;
  max-width: 100%;
  position: relative;
  color: ${props => props.theme.settings.colorText};
`
