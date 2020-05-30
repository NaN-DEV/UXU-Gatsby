import { Link } from "gatsby"
import styled from "styled-components"
import BgImg from "gatsby-background-image"

export const Article = styled.article`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 1.5rem 0;
  border-radius: 3px;
  border: 1px solid ${props => props.theme.dark};
  background-color: ${props => props.theme.muted};
  box-shadow: 1px 1px 3px 0px ${props => props.theme.dark};
`

export const BackgroundImage = styled(BgImg)`
  flex: 100%;
  height: 150px;
  max-width: 100%;
  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    height: 280px;
  }
`

export const BoxAutor = styled(Link)`
  flex: 100%;
  height: auto;
  display: flex;
  color: #4d5760;
  flex-wrap: wrap;
  max-width: 100%;
  padding: 1.5rem 1.5rem 0.5rem 1.5rem;
  &:hover {
    color: ${props => props.theme.primary};
  }
`
export const BoxAutorImg = styled.div`
  flex: 32px;
  height: 32px;
  max-width: 32px;
  overflow: hidden;
  position: relative;
  border-radius: 100%;
`
export const BoxAutorData = styled.div`
  position: relative;
  padding-left: 0.5rem;
  flex: calc(100% - 40px);
  max-width: calc(100% - 40px);
`
export const BoxAutorName = styled.div`
  line-height: 1.2;
  font-size: 1.4rem;
  padding-top: 0.1rem;
`
export const BoxAutorNick = styled.div`
  font-size: 1.2rem;
  font-weight: normal;
`
export const BoxTitle = styled(Link)`
  flex: 100%;
  font-size: 2rem;
  max-width: 100%;
  padding: 0 0 0 5rem;
  color: ${props => props.theme.primary};
  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    font-size: 4.2rem;
  }
`
export const BoxTag = styled.div`
  display: none;
  @media (min-width: ${props => props.theme.breakpoint_tablet}) {
    flex: 100%;
    display: flex;
    flex-wrap: wrap;
    max-width: 100%;
    font-size: 15px;
    padding: 0.5rem 0 1.5rem 5rem;
    span {
      opacity: 0.5;
    }
    a {
      color: #4d5760;
      font-size: 1.5rem;
      font-weight: normal;
      padding-right: 1rem;
      &:hover {
        color: ${props => props.theme.primary};
      }
    }
  }
`

export const BoxFooter = styled.div`
  flex: 100%;
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  padding: 0 1.5rem 1.5rem 5rem;
  align-items: center;
  justify-content: flex-start;
`
export const BoxOption = styled.div`
  display: flex;
  line-height: 1;
  padding: 1.5rem 0;
  font-size: 1.2rem;
  align-items: center;
  margin-right: 1.5rem;
  color: ${props => props.theme.primary};
  svg {
    margin-right: 1rem;
  }
`
export const BoxButtonMore = styled.div`
  margin-left: auto;
  min-height: 3.7rem;
`

export const Danger = styled.span`
  width: 2.4rem;
  height: 2.4rem;
  margin: 0 0.2rem;
  border-radius: 100%;
  background-color: ${props => props.theme.danger};
`

export const TxtDanger = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
  align-items: center;
  margin-left: 1rem;
  margin-right: 1.5rem;
  color: ${props => props.theme.danger};
`

export const Waring = styled.p`
  width: 2.4rem;
  height: 2.4rem;
  margin: 0 0.2rem;
  border-radius: 100%;
  background-color: ${props => props.theme.waring};
`

export const TxtWaring = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
  align-items: center;
  margin-left: 0.5rem;
  margin-right: 1.5rem;
  color: ${props => props.theme.waring};
`

export const Succes = styled.p`
  width: 2.4rem;
  height: 2.4rem;
  margin: 0 0.2rem;
  border-radius: 100%;
  background-color: ${props => props.theme.succes};
`

export const TxtSucces = styled.p`
  display: block;
  margin-left: 1rem;
  font-weight: bold;
  font-size: 1.2rem;
  align-items: center;
  margin-right: 1.5rem;
  color: ${props => props.theme.succes};
`

export const Normal = styled.p`
  width: 2.4rem;
  height: 2.4rem;
  margin: 0 0.2rem;
  border-radius: 100%;
  background-color: ${props => props.theme.muted};
`

export const TxtNormal = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
  align-items: center;
  margin-left: 1rem;
  margin-right: 1.5rem;
  color: ${props => props.theme.muted};
`
