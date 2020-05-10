// IMPORT PLUGIN
import React from "react"

// IMPORT COMPONENT START
import Service from "../box/service/service"

// CREATE NEW COMPONENT START
const BoxComponent = props => {
  const { content, service } = props
  return <>{service && <Service content={content} />}</>
}

export default BoxComponent
