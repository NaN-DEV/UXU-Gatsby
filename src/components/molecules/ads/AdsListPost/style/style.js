import styled, { css } from "styled-components"

export const AdsListPost = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  margin-top: 1.5rem;
  border-radius: 0.6rem;
  border: 1px solid ${props => props.theme.settings.normal};

  ul {
    width: 100%;
  }

  li {
    padding: 0;
    background-color: white;
    border-bottom: 1px solid ${props => props.theme.settings.normal};

    .adsListPostOnceArticle {
      width: 100%;
      flex-wrap: wrap;
      font-size: 1.5rem;
      font-weight: normal;
      justify-content: flex-start;
      padding: ${props => props.theme.settings.break} !important;

      p {
        flex: 100%;
        display: block;
        max-width: 100%;
      }
    }

    &:hover {
      background-color: #f9fafa;
    }

    &:last-of-type {
      border-bottom: none;
    }
  }
`

export const Header = styled.div`
  width: 100%;
  background-color: #f9fafa;
  padding: ${props => props.theme.settings.break};
  border-bottom: 1px solid ${props => props.theme.settings.normal};
  a {
    flex-wrap: wrap;
    justify-content: flex-start;
    color: ${props => props.theme.settings.dark};

    p {
      font-size: 2rem;
      font-weight: bold;
      color: ${props => props.theme.settings.primary};

      span {
        color: ${props => props.theme.settings.dark};
      }

      &:hover {
        color: ${props => props.theme.settings.dark};
      }
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
  background-color: ${props => props.theme.settings.secondary};
`
