import styled, { css } from "styled-components"

export const AdsListPost = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  border-radius: 0.6rem;
  margin-bottom: 1.5rem;
  border: 1px solid ${props => props.theme.settings.normal};

  ul {
    width: 100%;
  }

  li {
    padding: 0;

    border-bottom: 1px solid ${props => props.theme.settings.normal};

    .adsListPostOnceArticle {
      width: 100%;
      flex-wrap: wrap;
      font-size: 1.8rem;
      font-weight: normal;
      background-color: #f9fafa;
      justify-content: flex-start;
      color: ${props => props.theme.settings.primary};
      padding: ${props => props.theme.settings.break} !important;
      &:hover {
        background-color: white;
        color: ${props => props.theme.settings.dark};
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
  color: ${props => props.theme.settings.primary};
  padding: 1rem ${props => props.theme.settings.break};
  border-bottom: 1px solid ${props => props.theme.settings.normal};

  a {
    color: #15523a;
    font-size: 1.5rem;
    margin-left: auto;
    font-weight: normal;
    max-width: max-content;
  }
`

export const Title = styled.h3`
  font-size: 2rem;
  display: inline-block;
  max-width: max-content;

  a {
    font-size: 2rem;
    font-weight: bold;
    padding-left: 0.6rem;
    display: inline-block;
    max-width: max-content;
    ${props => {
      switch (props.theme.theme) {
        case "primary":
          return css`
            color: ${props.theme.settings.primary};
            &:hover {
              color: ${props.theme.settings.dark};
            }
          `
        default:
          return css`
            color: #15523a;
            &:hover {
              color: ${props.theme.settings.dark};
            }
          `
      }
    }}
  }
`

export const Info = styled.div`
  color: white;
  font-size: 1rem;
  font-weight: bold;
  margin-top: 0.6rem;
  border-radius: 0.6rem;
  padding: 0.3rem 0.6rem;
  background-color: ${props => props.theme.settings.primary};
`

export const TagCloud = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  padding-top: 0.6rem;
`

export const Tag = styled.p`
  display: block;
  font-size: 1.2rem;
  position: relative;
  padding-right: 0.6rem;
  max-width: max-content !important;
  color: ${props => props.theme.settings.dark};

  span {
    opacity: 0.7;
  }
`

export const ErrorArticle = styled.p`
  width: 100%;
  flex-wrap: wrap;
  font-size: 1.8rem;
  font-weight: normal;
  background-color: #f9fafa;
  justify-content: flex-start;
  color: ${props => props.theme.settings.primary};
  padding: ${props => props.theme.settings.break} !important;
`
