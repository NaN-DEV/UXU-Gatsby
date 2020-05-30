// IMPORT PLUGIN
import React from "react"

// IMPORT SETTINGS STYLE
import theme from "../../../../layouts/settings"

// IMPORT SETTINGS COMPONENT
import BlogFull from "./blog/blog"
import ServiceFull from "./service/service"
import TutorialFull from "./tutorial/tutorial"

// CREATE NEW COMPONENT

const ArticleFullComponent = props => {
  const { content, short, full, author, fullService, fullBlog, fullTutorial } = props
  return (
    <>
      {fullBlog && <BlogFull content={content} {...props} />}
      {fullService && <ServiceFull content={content} {...props} />}
      {fullTutorial && <TutorialFull content={content} {...props} />}
    </>
  )
}

// EXPORT NEW COMPONENT
export default ArticleFullComponent
