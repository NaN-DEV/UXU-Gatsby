// IMPORT PLUGIN
import React from "react"
import Img from "gatsby-image"

// IMPORT SETTINGS STYLE
import theme from "../../../../layouts/theme/settings"
import {
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
import Icon from "../../../atoms/icon/icon"
import Logo from "../../../atoms/logo/logo"
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
              return (
                <>
                  <ReviewUser key={index} theme={theme}>
                    <ReviewBoxImg theme={theme}>
                      <Img
                        alt={item.avatar.alt}
                        title={item.avatar.title}
                        fluid={item.avatar.fixed}
                      />
                    </ReviewBoxImg>
                    <ReviewDescription theme={theme}>
                      {item.opinion.substring(0, 50)}...
                    </ReviewDescription>
                    <ReviewNameUser theme={theme}>{item.name}</ReviewNameUser>
                    <ReviewRatingUser theme={theme}>
                      <p>
                        <span>Tak nas ocenił na </span>
                        <strong> {item.source} </strong>
                        <span> dał nam </span>
                        <strong>{item.rating}</strong>
                        <Icon star width="30px" height="15px" secondary />
                      </p>
                    </ReviewRatingUser>
                    <SourceRatingUser theme={theme}></SourceRatingUser>
                  </ReviewUser>
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
