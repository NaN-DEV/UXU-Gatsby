import styled from "styled-components"
import ImgBg from "gatsby-background-image"
import Img from "gatsby-image"

export const Article = styled.article`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  margin-bottom: 1.5rem;
  border-radius: 0.6rem;
  background-color: white;
  border: 1px solid ${props => props.theme.settings.normal};

  .row-article {
    padding: 1.5rem;
    @media (min-width: ${props => `${props.theme.settings.breakpoint_tablet}px`}) {
      padding: 3rem;
    }
    @media (min-width: ${props => `${props.theme.settings.breakpoint_desktop}px`}) {
      padding: 3rem 6rem 6rem 6rem;
    }
  }

  .authorAndDate {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    margin-bottom: 4.5rem;
    justify-content: flex-start;

    &:hover {
      h6 {
        color: ${props => props.theme.settings.dark};
      }
    }
  }

  .tag {
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 1.5rem;

    li {
      flex: auto;
      padding-right: 1.5rem;
      max-width: max-content;
    }
    p {
      opacity: 1;
      font-size: 1.5rem;
      font-weight: bold;
      transition: all 0.3s;
      border-radius: 0.3rem;
      padding: 0.3rem 0.6rem;

      span {
        opacity: 0.8;
        font-weight: bold;
      }
      &:hover {
        opacity: 0.7;
      }
    }
  }
`

export const MainImage = styled(ImgBg)`
  flex: 100%;
  max-width: 100%;
  min-height: 23rem;

  @media (min-width: ${props => `${props.theme.settings.breakpoint_tablet}px`}) {
    min-height: 33rem;
  }
  @media (min-width: ${props => `${props.theme.settings.breakpoint_desktop}px`}) {
    min-height: 43rem;
  }
`

export const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  position: relative;
`

export const Title = styled.h1`
  width: 100%;
  display: block;
  font-size: 5rem;
  font-weight: 800;
  padding-bottom: 0.6rem;
`

export const AuthorImg = styled(ImgBg)`
  width: 3.2rem;
  height: 3.2rem;
  display: block;
  overflow: hidden;
  position: relative;
  border-radius: 100%;
  margin-right: 0.6rem;
`

export const AutorName = styled.h6`
  flex: 100%;
  max-width: 100%;
  font-size: 1.5rem;
  font-weight: bold;
  transition: all 0.3s;
  margin-right: 0.6rem;
  color: ${props => props.theme.settings.black};
  @media (min-width: ${props => `${props.theme.settings.breakpoint_tablet}px`}) {
    flex: auto;
    max-width: max-content;
    line-height: 3.2rem;
  }
`

export const DateAddPost = styled.p`
  font-size: 1rem;
  position: relative;
  color: ${props => props.theme.settings.dark};
  @media (min-width: ${props => `${props.theme.settings.breakpoint_tablet}px`}) {
    flex: auto;
    font-size: 1.5rem;
    line-height: 3.2rem;
    max-width: max-content;
  }
`

export const Description = styled.div`
  flex: 100%;
  max-width: 100%;
  overflow: hidden;
  position: relative;
  padding-bottom: 1.5rem;

  ul,
  ol {
    padding: revert;
    margin: 1.5rem 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    padding: 1.5rem 0;
  }

  h1 {
    font-size: 3.5rem;
  }
  h2 {
    font-size: 3.2rem;
  }
  h3 {
    font-size: 2.9rem;
  }
  h4 {
    font-size: 2.6rem;
  }
  h5 {
    font-size: 2.3rem;
  }
  h6 {
    font-size: 2rem;
  }

  blockquote {
    max-width: 100%;
    height: auto;
    border-radius: 0.6rem;
    padding: ${props => props.theme.settings.break};
    margin: ${props => props.theme.settings.break} 0;
    background-color: ${props => props.theme.settings.light};
    border: 0.1rem solid ${props => props.theme.settings.normal};
    p {
      width: 100%;
      font-size: 2rem;
      font-weight: bold;
      text-align: center;
      &::before {
        content: "„";
      }
      &::after {
        content: "”";
      }
    }
  }
`

export const Image = styled(Img)`
  flex: 100%;
  max-width: 100%;
  margin: 1.5rem 0;
`

export const CodeBox = styled.div`
  flex: 100%;
  max-width: 100%;
  padding: 1.5rem 0;
  position: relative;
`

export const Comments = styled.div`
  width: 100%;
  display: block;
  overflow: hidden;
  margin: 1.5rem auto;
  border-radius: 0.6rem;
  background-color: white;
  padding: 1.5rem;
  border: 1px solid ${props => props.theme.settings.normal};

  @media (min-width: ${props => `${props.theme.settings.breakpoint_tablet}px`}) {
    padding: 3rem;
  }
  @media (min-width: ${props => `${props.theme.settings.breakpoint_desktop}px`}) {
    padding: 6rem;
  }
`
