import styled from "styled-components"
import Img from "gatsby-image"
import ImgBg from "gatsby-background-image"

export const Article = styled.article`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  margin: 1.5rem auto;
  border-radius: 0.6rem;
  background-color: white;
  border: 1px solid ${props => props.theme.settings.normal};

  .authorAndDate {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    justify-content: flex-start;

    &:hover {
      h6 {
        color: ${props => props.theme.settings.primary};
      }
    }
  }

  .tag {
    padding: 1.5rem 0;
    p {
      opacity: 0.6;
      font-size: 1rem;
      font-weight: bold;
      transition: all 0.3s;
      border-radius: 0.3rem;
      padding: 0.3rem 0.6rem;

      span {
        opacity: 0.8;
        font-weight: bold;
      }
      &:hover {
        opacity: 1;
      }
    }
  }
`

export const MainImage = styled(ImgBg)`
  flex: 100%;
  max-width: 100%;
  min-height: 42rem;
`

export const Box = styled.div`
  max-width: 100%;
  position: relative;
`

export const Title = styled.h1`
  width: 100%;
  display: block;
  font-size: 4.5rem;
  padding-bottom: 0.6rem;
`

export const AuthorImg = styled(ImgBg)`
  width: 3rem;
  height: 3rem;
  display: block;
  overflow: hidden;
  position: relative;
  border-radius: 100%;
  margin-right: 0.6rem;
`

export const AutorName = styled.h6`
  font-size: 1.4rem;
  transition: all 0.3s;
  color: ${props => props.theme.settings.dark};
`

export const DateAddPost = styled.div`
  flex: 100%;
  font-size: 1rem;
  max-width: 100%;
  position: relative;
  color: ${props => props.theme.settings.dark};
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
    border: 0.1rem solid ${props => props.theme.settings.nomral};
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
`
