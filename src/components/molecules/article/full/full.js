// IMPORT PLUGIN
import React from "react"

// IMPORT SETTINGS STYLE
import theme from "../../../../layouts/settings"

// IMPORT SETTINGS COMPONENT
import BlogTag from "./tag/tag"
import BlogFull from "./blog/blog"
import ServiceFull from "./service/service"
import TutorialFull from "./tutorial/tutorial"

// CREATE NEW COMPONENT

const ArticleFullComponent = props => {
  const { content, short, full, author, fullService, fullBlog, fullTutorial, fullTag } = props
  return (
    <>
      {fullTag && <BlogTag content={content} {...props} />}
      {fullBlog && <BlogFull content={content} {...props} />}
      {fullService && <ServiceFull content={content} {...props} />}
      {fullTutorial && <TutorialFull content={content} {...props} />}
    </>
  )
}

// EXPORT NEW COMPONENT
export default ArticleFullComponent
