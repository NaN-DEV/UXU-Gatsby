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
  const { content, boxTagblog, boxTagservice, boxTagtutorial } = props
  console.log(props)

  return (
    <>
      <Row>
        <Box theme={theme}>
          <Row>
            {content.title && <Title theme={theme}>{content.title}</Title>}
            {content.tag && (
              <>
                <BoxTag theme={theme}>
                  {boxTagblog && <List vertical hashtag tag boxTagblog items={content.tag} />}
                  {boxTagservice && <List vertical hashtag tag boxTagservice items={content.tag} />}
                  {boxTagtutorial && (
                    <List vertical hashtag tag boxTagtutorial items={content.tag} />
                  )}
                </BoxTag>
              </>
            )}
            <Button
              className="button"
              big
              slug={content.slug}
              title={`Co to jest ${content.name} ?`}
            />
          </Row>
        </Box>
      </Row>
    </>
  )
}

// EXPORT NEW COMPONENT
export default BoxTagComponent
