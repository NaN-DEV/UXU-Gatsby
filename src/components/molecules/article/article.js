// IMPORT PLUGIN
import React from "react"

// IMPORT SETTINGS STYLE
import theme from "../../../layouts/settings"

// IMPORT SETTINGS COMPONENT
import Full from "./full/full"
import Short from "./short/short"
import Author from "./author/author"

// CREATE NEW COMPONENT

const ArticleComponent = props => {
  const { content, short, fullBlog, fullService, fullTutorial, full, author } = props

  return (
    <>
      {short && <Short content={content} {...props} />}
      {author && <Author content={content} {...props} />}
      {full && <Full content={content} {...props} />}
    </>
  )
}

// EXPORT NEW COMPONENT
export default ArticleComponent
