// IMPORT PLUGIN
import React from "react"
import BackgroundImage from "gatsby-background-image"

// IMPORT SETTINGS STYLE
import theme from "../../../../layouts/theme/settings"
import {
  Box,
  Section,
  BoxContent,
  BoxBottom,
  BoxTop,
  Slide,
} from "./style/style"

// IMPORT COMPONENT
import Row from "../../../atoms/row/row"
import Carusel from "../../carousel/carousel"
import Button from "../../../atoms/button/button"

// CREATE NEW COMPONENT
const HeroHome = props => {
  const { content } = props

  return (
    <Section>
      <Carusel secondary showArrow>
        {content.map((item, i) => {
          return (
            <Slide
              key={i}
              Tag="div"
              fixed={item.image.fixed}
              style={{ width: "100%", height: "auto" }}
            >
              <Box theme={theme}>
                <Row className="row">
                  <BoxContent theme={theme}>
                    <BoxTop theme={theme}>
                      <h1>{item.title}</h1>
                    </BoxTop>
                    <BoxBottom theme={theme}>
                      <Button
                        outline
                        secondary
                        key={item.button.id}
                        slug={item.button.slug}
                        title={item.button.name}
                      />
                    </BoxBottom>
                  </BoxContent>
                </Row>
              </Box>
            </Slide>
          )
        })}
      </Carusel>
    </Section>
  )
}

export default HeroHome
