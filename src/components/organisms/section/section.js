// IMPORT PLUGIN
import React from "react"

// IMPORT COMPONENT START
import Row from "../../atoms/row/row"
import SectionClassic from "./classic/classic"

// CREATE NEW COMPONENT

const SectionComponent = props => {
  const { children, contact } = props
  if (contact) {
    return (
      <>
        <SectionClassic>
          <Row className="row">{children}</Row>
        </SectionClassic>
      </>
    )
  } else {
    return (
      <>
        <SectionClassic>
          <Row className="row">{children}</Row>
        </SectionClassic>
      </>
    )
  }
}

// EXPORT NEW COMPONENT
export default SectionComponent
