import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

export const Section = styled.section`
  width: 100%;
  overflow: hidden;
  position: relative;
  min-height: calc(100vh - 204px);
  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    min-height: calc(100vh - 151px);
  }
`

export const Box = styled.div`
  width: 100%;
  min-height: calc(100vh - 204px);
  background: rgba(0, 0, 0, 0.95);
  color: #fff;
  .row {
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 204px);
  }
  h1 {
    flex: 100%;
    font-size: 30px;
    max-width: 300px;
    text-align: center;
  }
  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    min-height: calc(100vh - 151px);

    .row {
      min-height: calc(100vh - 151px);
    }

    h1 {
      font-size: 60px;
      max-width: 980px;
    }
  }
`

export const BoxBottom = styled.div`
  width: 100%;
  display: flex;
  padding: 15px 0;
  justify-content: center;
  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    padding: 30px 0;
  }
`

export const BoxContent = styled.div`
  flex: 100%;
  width: 100%;
  display: block;
`

export const BoxTop = styled.div`
  width: 100%;
  display: flex;
  padding: 15px 0;
  justify-content: center;
  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    padding: 30px 0;
  }
`

export const Slide = styled(BackgroundImage)`
  width: 100%;
  min-height: calc(100vh - 204px);
  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    min-height: calc(100vh - 151px);
  }
`
