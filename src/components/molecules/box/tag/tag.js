// IMPORT PLUGIN
import React from "react"

// IMPORT SETTINGS STYLE
import theme from "../../../../layouts/settings"

// IMPORT  STYLE
import { Box, Title, BoxTag } from "./style/style"

// IMPORT COMPONENT
import Row from "../../../atoms/row/row"
import List from "../../../molecules/list/list"
import Button from "../../../atoms/button/button"

// CREATE NEW COMPONENT
const BoxTagComponent = props => {
  const { content } = props

  return (
    <>
      <Row>
        <Box theme={theme}>
          <Row>
            {content.title && <Title theme={theme}>{content.title}</Title>}
            {content.tag && (
              <>
                <BoxTag theme={theme}>
                  <List vertical hashtag tag items={content.tag} />
                </BoxTag>
              </>
            )}
          </Row>
        </Box>
      </Row>
    </>
  )
}

// EXPORT NEW COMPONENT
export default BoxTagComponent
