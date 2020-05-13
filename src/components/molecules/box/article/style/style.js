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
  .img {
    transform: scale(1);
    transition: all 0.3s;
  }
  &:hover {
    .img {
      transform: scale(1.1);
    }
  }
`

export const BoxImage = styled.div`
  z-index: 0;
  width: 100%;
  height: 150px;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  position: relative;

  @media (min-width: ${props => props.theme.breakpoint_tablet}) {
    height: 200px;
  }
`

export const BoxCategory = styled(Link)`
  z-index: 100;
  font-size: 15px;
  padding: 5px 12px;
  position: absolute;
  background-color: #ffcc00;
  border-right: 1px solid #000;
  border-bottom: 1px solid #000;
`

export const BoxLeft = styled.div`
  flex: 60px;
  max-width: 60px;
  position: relative;
`
export const BoxRight = styled.div`
  position: relative;
  flex: calc(100% - 60px);
  max-width: calc(100% - 60px);
  padding-right: 15px;
`

export const BoxAuthor = styled(Link)`
  width: 30px;
  height: 30px;
  display: block;
  margin: 15px auto 7.5px auto;
  overflow: hidden;
  border-radius: 50%;
  position: relative;
`
export const BoxData = styled.div`
  flex: 100%;
  max-width: 100%;
  overflow: hidden;
  position: relative;
`
export const Year = styled.strong`
  width: 100%;
  display: block;
  font-size: 15px;
  text-align: center;
`
export const MonthDay = styled.span`
  width: 100%;
  display: block;
  font-size: 10px;
  text-align: center;
`

export const Header = styled.h2`
  width: 100%;
  font-size: 3rem;
  text-align: left;
  padding: 7.5px 0;
`
export const BoxTag = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  padding-bottom: 15px;
`
export const Tag = styled.div`
  font-size: 12px;
  color: #000;
  padding-right: 7.5px;
  &::before {
    content: "#";
  }
`

export const Footer = styled.div`
  display: flex;
  padding: 15px;
  width: 100%;
  flex: 100%;
  justify-content: flex-end;
  a {
    font-size: 1.5rem;
  }
`

export const Description = styled.div`
  width: 100%;
  overflow: hidden;
  font-size: 1.5rem;
  text-align: justify;
  font-weight: normal;
  margin-bottom: 1.5rem;
  @media (min-width: ${props => props.theme.breakpoint_tablet}) {
    min-height: 50px;
  }
`
