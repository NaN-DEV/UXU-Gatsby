import styled from "styled-components"

export const Box = styled.div`
  height: auto;
  padding: 3rem;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  border-radius: 3px;
  align-items: center;
  width: calc(100% - 3px);
  background-color: ${props => props.theme.muted};
  box-shadow: 3px 3px 0px ${props => props.theme.dark};
  border: ${props => props.theme.border} solid ${props => props.theme.primary};
`

export const BoxContent = styled.div`
  flex: 100%;
  display: flex;
  max-width: 100%;
  flex-wrap: wrap;
  position: relative;
  align-items: center;
  padding-bottom: 3rem;
  justify-content: center;

  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    padding-bottom: 0;
    flex: calc(100% - 28rem);
    max-width: calc(100% - 28rem);
  }
`

export const BoxAvatar = styled.div`
  height: 19rem;
  display: block;
  min-width: 19rem;
  overflow: hidden;
  position: relative;
  border-radius: 100%;
  border: 3px solid #555;
`

export const BoxDataAuthor = styled.div`
  flex: 100%;
  max-width: 100%;
  @media (min-width: ${props => props.theme.breakpoint_tablet}) {
    padding: 0 3rem;
    flex: calc(100% - 19rem);
    max-width: calc(100% - 19rem);
  }
`

export const BoxName = styled.h1`
  flex: 100%;
  max-width: 100%;
  font-size: 3rem;
  text-align: center;
  padding: 1.5rem 0 0 0;
  font-family: ${props => props.theme.font_secondary};
  @media (min-width: ${props => props.theme.breakpoint_tablet}) {
    font-size: 6rem;
    text-align: left;
    padding: 0 0 0 0;
  }
`
export const BoxNick = styled.strong`
  flex: 100%;
  display: block;
  line-height: 1;
  max-width: 100%;
  font-size: 1.8rem;
  font-weight: bold;
  text-align: center;
  white-space: nowrap;
  color: ${props => props.theme.dark};
  @media (min-width: ${props => props.theme.breakpoint_tablet}) {
    font-size: 3rem;
    text-align: left;
  }
`
export const BoxDecription = styled.p`
  flex: 100%;
  max-width: 100%;
  font-size: 1.5rem;
  padding: 1.5rem 0;
  text-align: center;
  font-weight: normal;
  color: ${props => props.theme.dark};
  @media (min-width: ${props => props.theme.breakpoint_tablet}) {
    text-align: left;
    font-size: 2.4rem;
  }
`
export const BoxTelephone = styled.a`
  flex: 100%;
  display: block;
  line-height: 1;
  max-width: 100%;
  font-size: 3rem;
  text-align: center;
  white-space: nowrap;
  @media (min-width: ${props => props.theme.breakpoint_tablet}) {
    text-align: left;
  }
`
export const BoxList = styled.div`
  flex: 100%;
  max-width: 100%;
  padding: 1.5rem 1.5rem 0 1.5rem;
  border-top: 6px solid ${props => props.theme.dark};

  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    flex: 28rem;
    max-width: 28rem;
    border-top: 0px solid transparent;
    border-left: 6px solid ${props => props.theme.dark};
  }
`
export const Ul = styled.ul`
  width: 100%;
  display: block;
  list-style: none;
`
export const Li = styled.li`
  width: 100%;
  padding: 1.5rem 0;
  text-align: center;
  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    text-align: left;
  }
`
export const ListTitle = styled.p`
  width: 100%;
  display: block;
  font-size: 1.8rem;
  font-weight: bold;
  color: ${props => props.theme.dark};
  @media (min-width: ${props => props.theme.breakpoint_tablet}) {
    font-size: 2.4rem;
  }
`
export const ListEmail = styled.a`
  width: 100%;
  display: block;
  font-size: 1.8rem;
  font-family: ${props => props.theme.font_secondary};
  @media (min-width: ${props => props.theme.breakpoint_tablet}) {
    font-size: 2.4rem;
  }
`
export const P = styled.p`
  width: 100%;
  display: block;
  font-size: 1.8rem;
  font-weight: bold;
  color: ${props => props.theme.primary};
  font-family: ${props => props.theme.font_secondary};
  @media (min-width: ${props => props.theme.breakpoint_tablet}) {
    font-size: 2.4rem;
  }
`
