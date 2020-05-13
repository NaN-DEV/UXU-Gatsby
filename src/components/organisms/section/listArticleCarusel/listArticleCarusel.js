// IMPORT PLUGIN
import React from "react"
import Img from "gatsby-image"

// IMPORT SETTINGS STYLE
import theme from "../../../../layouts/theme/settings"
import {
  BoxMain,
  Section,
  ReviewUser,
  NameProducs,
  PhotoProducs,
  HeaderReviews,
  ReviewBoxImg,
  ReviewNameUser,
  ReviewRatingUser,
  SourceRatingUser,
  ReviewDescription,
} from "./style/style"

// IMPORT COMPONENT
import Row from "../../../atoms/row/row"
import Box from "../../../molecules/box/box"
import Carusel from "../../carousel/carousel"

// CREATE NEW COMPONENT

const ReviewsComponent = props => {
  const { content, title } = props
  const settingsCarusel = {
    showArrow: true,
    secondary: true,
    showItem: {
      mobile: 1,
      tablet: 2,
      desctop: 3,
    },
  }

  return (
    <>
      <Section>
        <Row>
          <HeaderReviews theme={theme}>
            <h1>{title}</h1>
          </HeaderReviews>

          <Carusel {...settingsCarusel}>
            {content.map((item, index) => {
              console.log(item)
              return (
                <>
                  <BoxMain>
                    <Box article content={item} />
                  </BoxMain>
                </>
              )
            })}
          </Carusel>
        </Row>
      </Section>
    </>
  )
}

export default ReviewsComponent
