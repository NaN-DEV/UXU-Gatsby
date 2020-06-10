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
  StepListTitle,
  StepList,
  Step,
  StepTitle,
  StepMedia,
  StepImg,
  StepDescription,
} from "./style/style"

// IMPORT SETTINGS COMPONENT
import Row from "../../../../atoms/row/row"
import Icon from "../../../../atoms/icon/icon"
import Video from "../../../../atoms/video/video"
import List from "../../../list/list"
import Button from "../../../../atoms/button/button"

// CREATE NEW COMPONENT

const ArticleFullServiceComponent = props => {
  const { content, services, blog, tutorial } = props
  let disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: { identifier: content.id },
  }

  return (
    <>
      <Article theme={theme}>
        <BackgroundImage theme={theme} fluid={content.mainImage.fixed} />
        <BoxContent theme={theme}>
          <MainTitle theme={theme}>{content.title}</MainTitle>
        </BoxContent>
        <BoxDataArticle theme={theme}>
          <BoxAuthorData theme={theme}>
            <BoxAutorImg to={`/author/${content.author.slug}`} theme={theme}>
              <Img
                fluid={content.author.avatar.fixed}
                title={`${content.author.firstName} ${content.author.lastName}`}
              />
            </BoxAutorImg>
            <BoxAutorName
              theme={theme}
            >{`${content.author.firstName} ${content.author.lastName}`}</BoxAutorName>
            <BoxAddPostDate theme={theme}>{content.meta.firstPublishedAt}</BoxAddPostDate>
          </BoxAuthorData>
          <BoxTag theme={theme}>
            {content.tag.map(tag => {
              return (
                <>
                  <Link
                    key={tag.id}
                    title={tag.name}
                    to={`/tag/${tag.slug}`}
                    style={{
                      color: `${tag.color.colorTxt.hex}`,
                      backgroundColor: `${tag.color.colorBackground.hex}`,
                    }}
                  >
                    <span>#</span>
                    {tag.name}
                  </Link>
                </>
              )
            })}
          </BoxTag>
          <BoxExcerpt theme={theme}>{content.excerpt}</BoxExcerpt>
          <StepList theme={theme}>
            {content.content.map((step, i) => {
              return (
                <Step theme={theme}>
                  <StepTitle theme={theme}>{`Krok ${i + 1} : ${step.title}`}</StepTitle>
                  <StepMedia theme={theme}>
                    {step.image ? <StepImg fluid={step.image.fixed} theme={theme} /> : null}
                    {step.video ? (
                      <Video small videoSrcURL={step.video.url} videoTitle={step.video.title} />
                    ) : null}
                  </StepMedia>
                  <StepDescription theme={theme}>{step.description}</StepDescription>
                </Step>
              )
            })}
          </StepList>
          <DiscussionEmbed style={{ width: "100%" }} {...disqusConfig} />
        </BoxDataArticle>
      </Article>
    </>
  )
}

// EXPORT NEW COMPONENT
export default ArticleFullServiceComponent
