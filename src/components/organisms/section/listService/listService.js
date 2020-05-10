// IMPORT PLUGIN
import React from "react"

// IMPORT SETTINGS STYLE
import theme from "../../../../layouts/theme/settings"
import { Section, Header, MainBox } from "./style/style"

// IMPORT COMPONENT
import Row from "../../../atoms/row/row"
import Box from "../../../molecules/box/box"

// CREATE NEW COMPONENT

const ListServiceSectionComponent = props => {
  const { content, secondary } = props

  return (
    <>
      <Section theme={theme}>
        <Row>
          <Header theme={theme}>
            <h1>Co możemy dla ciebie zrobić...?</h1>
          </Header>
          {content.map((item, index) => {
            console.log((index + 1) % 3)
            return (
              <MainBox index={index} theme={theme}>
                <Box
                  secondary={secondary}
                  content={item}
                  service
                  key={item.id}
                />
              </MainBox>
            )
          })}
        </Row>
      </Section>
    </>
  )
}

export default ListServiceSectionComponent
