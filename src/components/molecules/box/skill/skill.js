// IMPORT PLUGIN
import React from "react"

// IMPORT SETTINGS STYLE
import theme from "../../../../layouts/settings"

// IMPORT  STYLE
import { Box, Title, BoxSkill } from "./style/style"

// IMPORT COMPONENT
import Row from "../../../atoms/row/row"
import List from "../../list/list"
import Button from "../../../atoms/button/button"

// CREATE NEW COMPONENT
const BoxSkillComponent = props => {
  const { content } = props

  return (
    <>
      <Row>
        <Box theme={theme}>
          <Row>
            {content.title && <Title theme={theme}>{content.title}</Title>}
            {content.skill && (
              <>
                <BoxSkill theme={theme}>
                  <List vertical hashtag skill items={content.skill} />
                </BoxSkill>
              </>
            )}
          </Row>
        </Box>
      </Row>
    </>
  )
}

// EXPORT NEW COMPONENT
export default BoxSkillComponent
