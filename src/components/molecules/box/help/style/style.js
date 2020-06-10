import styled from "styled-components"
import { Link } from "gatsby"

export const Box = styled.div`
  display: flex;
  padding: 1.5rem;
  flex-wrap: wrap;
  position: relative;
  border-radius: 3px;
  width: calc(100% - 4px);
  background-color: ${props => props.theme.muted};
  box-shadow: 3px 3px 0px ${props => props.theme.dark};
  border: ${props => props.theme.border} solid ${props => props.theme.primary};
`

export const BoxAuthor = styled(Link)`
  flex: 100%;
  display: flex;
  max-width: 100%;
  align-items: center;
`
export const BoxAutorImg = styled.div`
  flex: 35px;
  width: 35px;
  height: 35px;
  display: block;
  overflow: hidden;
  position: relative;
  border-radius: 100%;
`
export const BoxAutorData = styled.div`
  padding-left: 0.5rem;
  flex: calc(100% - 35px);
  max-width: calc(100% - 35px);
`
export const BoxAutorName = styled.div`
  width: 100%;
  font-size: 1.3rem;
  font-weight: bold;
`
export const BoxAutorNick = styled.div`
  width: 100%;
  font-size: 1.3rem;
  font-weight: 600;
`
export const BoxDecription = styled.div`
  flex: 100%;
  width: 100%;
  font-size: 1.5rem;
  padding: 1.5rem 0;
`
export const BoxButton = styled.div`
  flex: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  a {
    width: 100%;
    display: block;
  }
`

export const Title = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
  color: ${props => props.theme.dark};
  font-family: ${props => props.theme.font_secondary};
`
export const Info = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
  color: ${props => props.theme.primary};
`
