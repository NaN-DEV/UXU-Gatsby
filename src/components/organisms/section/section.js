// IMPORT PLUGIN
import React from "react"

// IMPORT COMPONENT START
import Row from "../../atoms/row/row"
import SectionReapair from "./repair/repair"
import SectionClassic from "./classic/classic"
import SectionContact from "./contact/contact"

// CREATE NEW COMPONENT

const SectionComponent = props => {
  const { children, contact, repair } = props
  if (contact) {
    return (
      <>
        <SectionContact>
          <Row className="row">{children}</Row>
        </SectionContact>
      </>
    )
  } else if (repair) {
    return (
      <>
        <SectionReapair>
          <Row className="row">{children}</Row>
        </SectionReapair>
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
