// IMPORT PLUGIN
import React from "react"

// IMPORT SETTINGS STYLE
import theme from "../../../../layouts/settings"

// IMPORT COMPONENT START
import Row from "../../../atoms/row/row"

// IMPORT STYLES
import { Section } from "./style/style"

// CREATE NEW COMPONENT

const SectionClassicComponent = props => {
  const { children } = props
  return (
    <>
      <Section theme={theme}>
        <Row className="row">{children}</Row>
      </Section>
    </>
  )
}

// EXPORT NEW COMPONENT
export default SectionClassicComponent
