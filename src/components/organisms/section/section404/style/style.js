import styled, { css } from "styled-components"

export const Section = styled.section`
  padding: ${props => props.theme.settings.break} 0;

  .row {
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 14rem);
  }
`

export const BoxInfo = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  border-radius: 0.6rem;
  background-color: white;
  padding: ${props => props.theme.settings.break};
  border: ${props => props.theme.border} solid ${props => props.theme.settings.colorTextActive};

  a {
    flex: 100%;
    max-width: 100%;
    font-size: 1.5rem;
    text-align: center;
  }
`

export const Title = styled.h1`
  flex: 100%;
  line-height: 1;
  max-width: 100%;
  font-size: 15rem;
  text-align: center;
`

export const Info = styled.p`
  flex: 100%;
  max-width: 100%;
  font-size: 3rem;
  text-align: center;
`
