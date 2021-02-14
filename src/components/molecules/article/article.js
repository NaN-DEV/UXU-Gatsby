// Import plugin
import React from "react"

// Import component
import Full from "./articleFull/articleFull"
import Short from "./articleShort/articleShort"

// Create new component
const ArticleComponent = props => {
  const { type, parameters, content } = props

  switch (type) {
    case "full":
      return <Full parameters={parameters} content={content} />

    case "short":
      return <Short parameters={parameters} content={content} />

    default:
      return "Add type article"
  }
}

// Export new component
export default ArticleComponent
