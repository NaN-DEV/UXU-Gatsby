import styled from "styled-components"

export const Section = styled.section`
  width: 100%;
  position: relative;
`

export const HeaderReviews = styled.h1`
  flex: 100%;
  display: flex;
  max-width: 100%;
  justify-content: center;

  h1 {
    font-size: 30px;
    max-width: 300px;
    text-align: center;
  }
  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    h1 {
      font-size: 60px;
      max-width: 980px;
    }
  }
`

export const ReviewUser = styled.div`
  margin: 30px 6px 30px 0px;
  display: flex;
  padding: 30px;
  flex-wrap: wrap;
  max-width: 100%;
  border-radius: 1px;
  justify-content: center;
  border: 1px solid ${props => props.theme.dark};
  background-color: ${props => props.theme.muted};
  box-shadow: 5px 6px 0px ${props => props.theme.primary};
`
export const ReviewBoxImg = styled.div`
  width: 160px;
  height: 160px;
  border-radius: 100%;
  overflow: hidden;
`
export const ReviewBoxText = styled.div`
  width: 350px;
`

export const ReviewDescription = styled.div`
  flex: 100%;
  max-width: 100%;
  padding: 15px 0;
  text-align: center;
  display: flex;
  justify-content: center;
`

export const ReviewNameUser = styled.div`
  flex: 100%;
  max-width: 100%;
  padding: 0 0 15px 0;
  font-weight: bold;
  text-align: center;
  display: flex;
  justify-content: center;
`
export const ReviewRatingUser = styled.div`
  flex: 100%;
  display: flex;
  max-width: 100%;
  font-size: 15px;
  text-align: center;
  justify-content: center;
  p {
    display: -webkit-box;
  }
`
export const SourceRatingUser = styled.div`
  flex: 100%;
  max-width: 100%;
  text-align: left;
  display: flex;
  justify-content: center;
`
