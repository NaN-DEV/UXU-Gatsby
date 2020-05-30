// IMPORT PLUGIN
import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

// IMPORT SETTINGS STYLE
import theme from "../../../../layouts/settings"

// IMPORT  STYLE
import { Article, BoxLink, BoxAutorImg, BoxAutorName, BoxButtonMore } from "./style/style"

// IMPORT SETTINGS COMPONENT
import Row from "../../../atoms/row/row"
import Button from "../../../atoms/button/button"
import Icon from "../../../atoms/icon/icon"

// CREATE NEW COMPONENT

const ArticleAuthorComponent = props => {
  const { content } = props
  console.log(content)
  return (
    <>
      <Article theme={theme} title={`${content.firstName} ${content.lastName}`}>
        <Row>
          <BoxAutorImg>
            <Img fluid={content.avatar.fixed} />
          </BoxAutorImg>
          <BoxAutorName>{`${content.firstName} ${content.lastName}`}</BoxAutorName>
          <BoxButtonMore>
            <Button slug={`/autor/${content.slug}`} title={`Więcej`} />
          </BoxButtonMore>
        </Row>
      </Article>
    </>
  )
}

// EXPORT NEW COMPONENT
export default ArticleAuthorComponent
