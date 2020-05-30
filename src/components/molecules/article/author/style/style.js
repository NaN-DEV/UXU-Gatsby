import styled from "styled-components"

export const Article = styled.article`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 1.5rem 0;
  border-radius: 3px;
  position: relative;
  align-items: center;
  border: 1px solid ${props => props.theme.dark};
  background-color: ${props => props.theme.muted};
  box-shadow: 1px 1px 3px 0px ${props => props.theme.dark};
`

export const BoxAutorImg = styled.div`
  width: 60px;
  height: 60px;
  overflow: hidden;
  position: relative;
  border-radius: 100%;
`

export const BoxAutorName = styled.h1`
  display: flex;
  font-size: 3rem;
  padding-left: 3rem;
  align-items: center;
`
export const BoxButtonMore = styled.div`
  display: flex;
  margin-left: auto;
  align-items: center;
`
