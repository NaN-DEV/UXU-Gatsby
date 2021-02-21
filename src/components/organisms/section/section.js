// Import plugin
import React from "react"

// Import component
import Section404 from "./section404/section404"
import SectionArticle from "./sectionArticle/sectionArticle"
import SectionContact from "./sectionContact/sectionContact"
import SectionListArticle from "./sectionListArticle/sectionListArticle"
import SectionListArticleWithTag from "./sectionListArticleWithTag/sectionListArticleWithTag"
import SectionListOfExpertArticles from "./sectionListOfExpertArticles/sectionListOfExpertArticles"

// Create new component
const SectionComponent = props => {
  const { type, parameters, content } = props

  switch (type) {
    case "section404":
      return <Section404 />
      break
    case "article":
      return <SectionArticle parameters={parameters} content={content} />
      break
    case "contact":
      return <SectionContact parameters={parameters} content={content} />
      break
    case "listArticle":
      return <SectionListArticle parameters={parameters} content={content} />
      break

    case "listArticleWithTag":
      return <SectionListArticleWithTag parameters={parameters} content={content} />
      break
    case "listOfExpertArticles":
      return <SectionListOfExpertArticles parameters={parameters} content={content} />
      break
    default:
      return "add type section"
  }
}

// Export new component
export default SectionComponent
