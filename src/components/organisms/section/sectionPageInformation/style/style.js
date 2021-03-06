import styled, { css } from "styled-components"

export const Section = styled.section`
  width: 100%;
  position: relative;
`

export const Article = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  position: relative;
  padding: ${props => props.theme.settings.break};
  margin-bottom: ${props => props.theme.settings.break};
  background-color: ${props => props.theme.settings.colorBackgroundLight};

  @media (min-width: ${props => `${props.theme.settings.breakpoint_tablet}px`}) {
    padding: ${props => props.theme.settings.breakFat};
  }
  @media (min-width: ${props => `${props.theme.settings.breakpoint_desktop}px`}) {
    padding: ${props => props.theme.settings.breakBig};
  }
`

export const Description = styled.div`
  flex: 100%;
  max-width: 100%;
  overflow: hidden;
  position: relative;

  p {
    padding: ${props => props.theme.settings.break} 0;
  }

  ul,
  ol {
    padding: revert;
    margin: ${props => props.theme.settings.break} 0;

    li {
      padding: 0.5rem 0;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    padding: ${props => props.theme.settings.break} 0;
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
    background-color: ${props => props.theme.settings.colorBackgroundDark};
    border: ${props => props.theme.settings.borderLight} solid ${props => props.theme.settings.colorBorder};

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
