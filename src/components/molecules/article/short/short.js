// IMPORT PLUGIN
import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

// IMPORT SETTINGS STYLE
import theme from "../../../../layouts/settings"

// IMPORT  STYLE
import {
  Article,
  BoxLink,
  BackgroundImage,
  BoxAutor,
  BoxAutorImg,
  BoxAutorData,
  BoxAutorName,
  BoxAutorNick,
  BoxTitle,
  BoxTag,
  BoxDescription,
  BoxFooter,
  BoxOption,
  BoxButtonMore,
  Danger,
  TxtDanger,
  Waring,
  TxtWaring,
  Succes,
  TxtSucces,
  Normal,
  TxtNormal,
} from "./style/style"

// IMPORT SETTINGS COMPONENT
import Row from "../../../atoms/row/row"
import Button from "../../../atoms/button/button"
import Icon from "../../../atoms/icon/icon"

// CREATE NEW COMPONENT

const ArticleShortComponent = props => {
  const { content, services, blog, tutorial } = props

  return (
    <>
      <Article theme={theme}>
        <BackgroundImage theme={theme} fluid={content.mainImage.fixed} />
        <BoxAutor
          theme={theme}
          to={`/expert/${content.author.slug}`}
          title={`${content.author.firstName} ${content.author.lastName}`}
        >
          {content.author.avatar.fixed && (
            <BoxAutorImg>
              <Img fluid={content.author.avatar.fixed} />
            </BoxAutorImg>
          )}
          <BoxAutorData theme={theme}>
            <BoxAutorName
              theme={theme}
            >{`${content.author.firstName} ${content.author.lastName}`}</BoxAutorName>
            <BoxAutorNick theme={theme}>{content.author.nick}</BoxAutorNick>
          </BoxAutorData>
        </BoxAutor>
        <BoxTitle theme={theme} to={`/article/${content.slug}`} title={content.title}>
          {content.title}
        </BoxTitle>
        <BoxTag theme={theme}>
          {content.tag.map(tag => {
            return (
              <>
                <Link key={tag.id} to={`/tag/${tag.slug}`} title={tag.name}>
                  <span>#</span>
                  {tag.name}
                </Link>
              </>
            )
          })}
        </BoxTag>

        <BoxFooter>
          <BoxButtonMore></BoxButtonMore>
        </BoxFooter>
      </Article>
    </>
  )
}

// EXPORT NEW COMPONENT
export default ArticleShortComponent
