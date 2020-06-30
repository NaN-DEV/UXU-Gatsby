// IMPORT PLUGIN
import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { DiscussionEmbed } from "disqus-react"

// IMPORT SETTINGS STYLE
import theme from "../../../../../layouts/settings"

// IMPORT  STYLE
import {
  Article,
  BackgroundImage,
  BoxContent,
  MainTitle,
  BoxAuthorData,
  BoxAutorImg,
  BoxAutorName,
  BoxAddPostDate,
  BoxTag,
  BoxDataArticle,
  BoxExcerpt,
  BoxHeader,
  BoxTextContent,
  BlockQuote,
} from "./style/style"

// IMPORT SETTINGS COMPONENT
import List from "../../../list/list"
import Row from "../../../../atoms/row/row"
import Icon from "../../../../atoms/icon/icon"
import Video from "../../../../atoms/video/video"
import Button from "../../../../atoms/button/button"

// CREATE NEW COMPONENT

const ArticleFullTagComponent = props => {
  const { content, services, blog, tutorial } = props
  let disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: { identifier: content.id },
  }
  console.log(props.listType)
  return (
    <>
      <Article theme={theme}>
        {content.mainImage.fixed && (
          <BackgroundImage theme={theme} fluid={content.mainImage.fixed} />
        )}

        <BoxContent theme={theme}>
          <MainTitle theme={theme}>{content.name}</MainTitle>
        </BoxContent>
        {content.content.map((item, index) => {
          if (item.__typename === "DatoCmsHeader") {
            return (
              <>
                <BoxDataArticle theme={theme}>
                  <BoxHeader theme={theme}>{item.header}</BoxHeader>
                </BoxDataArticle>
              </>
            )
          } else if (item.__typename === "DatoCmsImage") {
            return (
              <>
                <BoxDataArticle theme={theme}>
                  <Img
                    fluid={item.image.fixed}
                    style={{ display: "block", margin: "1.5rem auto" }}
                  />
                </BoxDataArticle>
              </>
            )
          } else if (item.__typename === "DatoCmsTextContent") {
            return (
              <>
                <BoxDataArticle theme={theme}>
                  <BoxTextContent
                    theme={theme}
                    dangerouslySetInnerHTML={{ __html: item.textContent }}
                  />
                </BoxDataArticle>
              </>
            )
          } else if (item.__typename === "DatoCmsBlockQuote") {
            return (
              <>
                <BoxDataArticle theme={theme} blockquote>
                  <BlockQuote theme={theme} dangerouslySetInnerHTML={{ __html: item.content }} />
                </BoxDataArticle>
              </>
            )
          } else if (item.__typename === "DatoCmsVideo") {
            return (
              <>
                <BoxDataArticle theme={theme} video>
                  <Video big videoSrcURL={item.video.url} videoTitle={item.video.title} />
                </BoxDataArticle>
              </>
            )
          } else {
            return (
              <>
                <BoxDataArticle>{index}</BoxDataArticle>
              </>
            )
          }
        })}
      </Article>
      <List
        tag
        category
        active={0}
        items={props.listType}
        title={props.listTypeName}
        style={{ margin: "3rem 0" }}
      />
      <Article theme={theme} padding>
        <BoxDataArticle>
          <DiscussionEmbed style={{ width: "100%" }} {...disqusConfig} />
        </BoxDataArticle>
      </Article>
    </>
  )
}

// EXPORT NEW COMPONENT
export default ArticleFullTagComponent