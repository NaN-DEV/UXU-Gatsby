import { Link } from "gatsby"
import styled, { css } from "styled-components"
import BgImg from "gatsby-background-image"

export const Article = styled.article`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  border-radius: 3px;
  margin-bottom: 1.5rem;
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
export const BoxTag = styled.div`
  flex: 100%;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  font-size: 15px;

  a {
    color: #4d5760;
    font-size: 1.3rem;
    border-radius: 3px;
    margin-top: 0.6rem;
    margin-right: 0.6rem;
    padding: 0.3rem 0.6rem;
    &:hover {
      opacity: 0.6;
    }

    span {
      opacity: 0.5;
      font-weight: bold;
    }
  }
`
export const BoxExcerpt = styled.p`
  display: block;
  padding: 3rem 0;
  text-align: left;
  font-size: 1.5rem;
`
export const StepListTitle = styled.h1`
  font-weight: 600;
  font-size: 1.5rem;
  @media (min-width: ${props => props.theme.breakpoint_tablet}) {
    font-size: 3rem;
  }
`
export const StepList = styled.ul`
  width: 100%;
  display: block;
`
export const Step = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 0 0;
  @media (min-width: ${props => props.theme.breakpoint_tablet}) {
    padding: 3rem 0;
  }
`
export const StepTitle = styled.h2`
  flex: 100%;
  width: 100%;
  font-weight: 600;
  font-size: 2.4rem;
  padding-bottom: 1.5rem;
  @media (min-width: ${props => props.theme.breakpoint_tablet}) {
    font-size: 3rem;
  }
`
export const StepMedia = styled.div`
  flex: 100%;
  width: 300px;
  padding-right: 0;
  overflow: hidden;
  position: relative;
  padding-bottom: 1.5rem;
  @media (min-width: ${props => props.theme.breakpoint_tablet}) {
    flex: 40%;
    width: 40%;
    padding-bottom: 0;
    padding-right: 1.5rem;
  }
`
export const StepImg = styled(BgImg)`
  width: 100%;
  height: 200px;

  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    height: 300px;
  }
`

export const StepDescription = styled.div`
  flex: 100%;
  width: 100%;
  padding-left: 0;
  font-size: 1.5rem;
  position: relative;
  padding-bottom: 3rem;
  @media (min-width: ${props => props.theme.breakpoint_tablet}) {
    flex: 60%;
    width: 60%;
    font-size: 2.4rem;
    padding-left: 1.5rem;
  }
`
export const BoxHeader = styled.h1`
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
      font-size: 1.5rem;
      position: relative;
      counter-increment: step-counter;
      padding: 1rem 0rem 0.5rem 4.3rem;
      &::before {
        width: 2.5rem;
        padding: 3px 0;
        text-align: center;
        border-radius: 3px;
        margin-right: 0.5rem;
        display: inline-block;
        position: absolute;
        display: block;
        left: 0;
        top: 8px;
        content: counter(step-counter);
        color: ${props => props.theme.muted};
        background-color: ${props => props.theme.primary};
      }
    }
  }
  ul {
    list-style: none;
    li {
      padding: 0.5rem 0rem 0.5rem 2.5rem;
      font-size: 1.5rem;
      position: relative;

      &::before {
        content: "";
        width: 1rem;
        height: 1rem;
        text-align: center;
        display: block;
        position: absolute;
        left: -1rem;
        top: 0.6rem;
        color: ${props => props.theme.muted};
        margin: 0 1.25rem 0 0.75rem;
        background-color: ${props => props.theme.primary};
      }
    }
  }
  @media (min-width: ${props => props.theme.breakpoint_mobile}) {
    font-size: 1.5rem;
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
