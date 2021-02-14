import styled from "styled-components"
import BgImg from "gatsby-background-image"

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
      font-weight: bold;
      padding: 0.6rem 0;
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

export const Image = styled(BgImg)`
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
  font-size: 3.5rem;
  padding-bottom: 0.6rem;
`

export const AuthorImg = styled(BgImg)`
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
