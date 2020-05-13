// IMPORT PLUGIN
import React from "react"

// IMPORT COMPONENT START
import Service from "../box/service/service"
import Article from "../box/article/article"
import Tutorial from "../box/tutorial/tutorial"

// CREATE NEW COMPONENT START
const BoxComponent = props => {
  const { content, service, article, tutorial } = props
  return (
    <>
      {service && <Service content={content} />}
      {article && <Article content={content} />}
      {tutorial && <Tutorial content={content} />}
    </>
  )
}

export default BoxComponent
