import { Link } from "gatsby"
import BgImg from "gatsby-background-image"
import styled, { css } from "styled-components"

export const Article = styled.article`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  border-radius: 3px;
  margin-bottom: 1.5rem;
${props =>
  props.padding
    ? css`
        padding: 3rem 0;
      `
    : css`
        padding-bottom: 3rem;
      `}
  border: 1px solid ${props => props.theme.dark};
  background-color: ${props => props.theme.muted};
  box-shadow: 1px 1px 3px 0px ${props => props.theme.dark};
`

export const BackgroundImage = styled(BgImg)`
  flex: 100%;
  height: 180px;
  max-width: 100%;
  @media (min-width: ${props => props.theme.breakpoint_tablet}) {
    height: 280px;
  }
  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    height: 370px;
  }
`

export const BoxContent = styled.div`
  width: 82%;
  display: block;
  margin: 0 auto;
`

export const MainTitle = styled.h1`
  font-size: 2.4rem;
  padding: 3rem 0 1.5rem 0;
  @media (min-width: ${props => props.theme.breakpoint_tablet}) {
    font-size: 5rem;
  }
`

export const BoxDataArticle = styled.div`
  display: flex;
  display: block;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: center;
  ${props =>
    props.video &&
    css`
      margin: 3rem auto;
    `}
  ${props =>
    props.blockquote
      ? css`
          width: 100%;
          margin: 3rem 0;
          padding: 3rem 0;
          background-color: #29292e;
        `
      : css`
          width: 82%;
        `}
`

export const BoxAuthorData = styled(Link)`
  color: #64707d;
  font-weight: 500;
  font-size: 1.2rem;
  align-items: center;
  display: inline-flex;
  &:hover {
    color: #000;
  }
  @media (min-width: ${props => props.theme.breakpoint_mobile}) {
    font-size: 1.5rem;
  }
`

export const BoxAutorImg = styled.div`
  width: 24px;
  height: 24px;
  overflow: hidden;
  border-radius: 100%;
  display: inline-block;
`
export const BoxAutorName = styled.div`
  margin: 0 0.5rem;
  display: inline-block;
`
export const BoxAddPostDate = styled.div`
  color: #64707d;
  font-weight: 500;
  margin: 0 0.5rem;
  font-size: 1.2rem;
  display: inline-block;
  @media (min-width: ${props => props.theme.breakpoint_mobile}) {
    font-size: 1.5rem;
  }
`

export const BoxExcerpt = styled.p`
  display: block;
  padding: 3rem 0;
  text-align: left;
  font-size: 1.5rem;
  @media (min-width: ${props => props.theme.breakpoint_tablet}) {
    font-size: 2.4rem;
  }
`

export const BoxHeader = styled.h1`
  padding: 1.5rem 0;
  font-weight: 600;
  font-size: 1.5rem;
  @media (min-width: ${props => props.theme.breakpoint_tablet}) {
    font-size: 3rem;
  }
`
export const BoxTextContent = styled.div`
  display: block;
  font-size: 1.5rem;
  padding: 1.5rem 0;
  ol {
    list-style: none;
    li {
      padding: 0.5rem 0;
      font-size: 1.5rem;
      counter-increment: step-counter;
      &::before {
        width: 2.5rem;
        padding: 3px 0;
        text-align: center;
        border-radius: 3px;
        margin-right: 0.5rem;
        display: inline-block;
        content: counter(step-counter);
        color: ${props => props.theme.muted};
        background-color: ${props => props.theme.primary};
      }
    }
  }
  ul {
    list-style: none;
    li {
      padding: 0.5rem 0;
      font-size: 1.5rem;

      &::before {
        content: "";
        width: 1rem;
        height: 1rem;
        text-align: center;
        display: inline-block;
        color: ${props => props.theme.muted};
        margin: 0 1.25rem 0 0.75rem;
        background-color: ${props => props.theme.primary};
      }
    }
  }
  @media (min-width: ${props => props.theme.breakpoint_mobile}) {
    ol {
      li {
        &::before {
          width: 3.7rem;
        }
      }
    }
    ul {
      li {
        &::before {
          margin: 0.4rem 1.85rem 0.4rem 1.35rem;
        }
      }
    }
  }
`
export const BlockQuote = styled.div`
  width: 82%;
  margin: 0 auto;
  font-size: 1.5rem;
  color: ${props => props.theme.muted};
  font-family: ${props => props.theme.font_secondary};
  @media (min-width: ${props => props.theme.breakpoint_tablet}) {
    font-size: 2.4rem;
  }
`
