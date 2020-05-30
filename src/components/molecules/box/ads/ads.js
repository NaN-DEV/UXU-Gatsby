// IMPORT PLUGIN
import React from "react"

// IMPORT SETTINGS STYLE
import theme from "../../../../layouts/settings"

// IMPORT  STYLE
import { Box, Title, BoxButton, Description } from "./style/style"

// IMPORT COMPONENT
import Row from "../../../atoms/row/row"
import Button from "../../../atoms/button/button"

// CREATE NEW COMPONENT
const BoxAdsComponent = props => {
  const { content } = props
  console.log(content)
  return (
    <>
      <Row>
        <Box theme={theme}>
          <Row>
            {content.title && <Title theme={theme}>{content.title}</Title>}
            {content.description && <Description theme={theme}>{content.description}</Description>}
            {content.button && (
              <>
                <BoxButton theme={theme}>
                  {content.button.map((item, i) => {
                    if (i + 1 < content.button.length) {
                      return (
                        <>
                          {item.slug && <Button big key={i} slug={item.slug} title={item.title} />}
                          <p> lub </p>
                        </>
                      )
                    } else {
                      return (
                        <>
                          {item.slug && <Button big key={i} slug={item.slug} title={item.title} />}
                          {item.tel && <Button big key={i} tel={item.tel} />}
                        </>
                      )
                    }
                  })}
                </BoxButton>
              </>
            )}
          </Row>
        </Box>
      </Row>
    </>
  )
}

// EXPORT NEW COMPONENT
export default BoxAdsComponent
