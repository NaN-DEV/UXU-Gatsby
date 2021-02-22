import styled, { css } from "styled-components"

export const AdsListPost = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  margin-bottom: ${props => props.theme.settings.break};
  border-radius: ${props => props.theme.settings.borderRadius};
  border: ${props => props.theme.settings.borderLight} solid ${props => props.theme.settings.colorBorder};

  ul {
    width: 100%;
  }

  li {
    padding: 0;
    border-bottom: ${props => props.theme.settings.borderLight} solid ${props => props.theme.settings.colorBorder};

    .adsListPostOnceArticle {
      width: 100%;
      flex-wrap: wrap;
      font-size: 1.8rem;
      font-weight: normal;
      justify-content: flex-start;
      color: ${props => props.theme.settings.colorText};
      padding: ${props => props.theme.settings.break} !important;
      background-color: ${props => props.theme.settings.colorBox};

      &:hover {
        color: ${props => props.theme.settings.colorTextDisactive};
        background-color: ${props => props.theme.settings.colorMainBackGround};
      }
    }
  }
`

export const Header = styled.div`
  width: 100%;
  display: flex;
  font-size: 2rem;
  white-space: nowrap;
  background-color: #f9fafa;
  padding: 1rem ${props => props.theme.settings.break};
  color: ${props => props.theme.settings.colorTextDisactive};
  border-bottom: ${props => props.theme.settings.borderLight} solid ${props => props.theme.settings.colorBorder};

  a {
    font-size: 1.5rem;
    margin-left: auto;
    font-weight: normal;
    max-width: max-content;
    color: ${props => props.theme.settings.colorTextActive};
  }
`

export const Title = styled.h3`
  font-size: 2rem;
  display: inline-block;
  max-width: max-content;

  a {
    font-size: 2rem;
    font-weight: bold;
    display: inline-block;
    max-width: max-content;
    padding-left: ${props => props.theme.settings.breakLight};

    color: ${props => props.theme.settings.colorTextActive};
    &:hover {
      color: ${props => props.theme.settings.colorTextDisactive};
    }
  }
`

export const Info = styled.div`
  color: white;
  font-size: 1rem;
  font-weight: bold;
  margin-top: 0.6rem;
  border-radius: 0.6rem;
  padding: 0.3rem 0.6rem;
  background-color: ${props => props.theme.settings.colorText};
`

export const TagCloud = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  padding-top: ${props => props.theme.settings.breakLight};
`

export const Tag = styled.p`
  display: block;
  font-size: 1.2rem;
  position: relative;
  max-width: max-content !important;
  color: ${props => props.theme.settings.colorTextDisactive};
  padding-right: ${props => props.theme.settings.breakLight};

  span {
    opacity: 0.6;
  }
`

export const ErrorArticle = styled.p`
  width: 100%;
  flex-wrap: wrap;
  font-size: 1.8rem;
  font-weight: normal;
  justify-content: flex-start;
  color: ${props => props.theme.settings.colorTextDisactive};
  padding: ${props => props.theme.settings.break} !important;
  background-color: ${props => props.theme.settings.colorBox};
`
