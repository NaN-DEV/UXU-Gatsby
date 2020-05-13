import styled from "styled-components"
import { Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"

export const Box = styled(Link)`
  flex: 100%;
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  background-color: #fff;
  border-left: 1px solid #bbbbbb;
  box-shadow: 5px 6px 0px #000000;
  border-bottom: 1px solid #bbbbbb;
`

export const BoxImage = styled.div`
  width: 100%;
  height: 150px;
  display: block;
  overflow: hidden;
  position: relative;
  @media (min-width: ${props => props.theme.breakpoint_tablet}) {
    height: 200px;
  }
`

export const BoxHeader = styled.h2`
  width: 100%;
  font-size: 3rem;
  text-align: left;
  padding-bottom: 1.5rem;
`

export const BoxPrice = styled.h3`
  width: 100%;
  font-weight: normal;
  font-size: 1.5rem;
  padding-bottom: 0.5rem;
`
export const BoxDay = styled.h3`
  width: 100%;
  font-size: 1.5rem;
  font-weight: normal;
  padding-bottom: 1.5rem;
`

export const BoxContent = styled.div`
  padding: 1.5rem;
  max-width: 100%;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  text-align: justify;
  font-weight: normal;
  overflow: hidden;
  a {
    margin-left: auto;
  }
  @media (min-width: ${props => props.theme.breakpoint_tablet}) {
    padding: 3rem;
  }
`

export const BoxDescription = styled.div`
  flex: 100%;
  max-width: 100%;
  font-size: 1.5rem;
  text-align: justify;
  font-weight: normal;
  margin-bottom: 1.5rem;
  @media (min-width: ${props => props.theme.breakpoint_tablet}) {
    min-height: 50px;
  }
`
