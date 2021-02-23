// Import plugin
import React from "react"

// import settings
import settings from "../../../../layouts/settings/settings"

// Import styles
import { Section, SiteBar, Title, BoxArticle, Point } from "./style/style"

// Import component
import Row from "../../../atoms/row/row"
import Icon from "../../../atoms/icon/icon"
import Ads from "../../../molecules/ads/ads"
import List from "../../../molecules/list/list"
import Button from "../../../atoms/button/button"
import Article from "../../../molecules/article/article"

// Create new component
const SectionListArticleWithTag = props => {
  const { parameters, content } = props

  return (
    <>
      <Section theme={{ settings: settings }}>
        <Row parameters={{ className: "sectionListArticleWithTag" }}>
          <SiteBar theme={{ settings: settings, breakPoint: "tablet" }}>
            <Ads type="AdsClassicLight" content={{}} parameters={{}}>
              <List type="level" parameters={{ className: "score" }}>
                <Point theme={{ settings: settings }}>artykułów {content.article.length}</Point>
              </List>
            </Ads>
          </SiteBar>
          <BoxArticle theme={{ settings: settings }}>
            {content.article.map((item, i) => {
              return (
                <Article
                  type="short"
                  key={`${item.id}_${i}_Articlehort`}
                  content={{
                    image: item.image,
                    author: item.author,
                    date: item.meta.firstPublishedAt,
                    title: item.title,
                    tag: item.tag,
                    slug: item.slug,
                  }}
                />
              )
            })}
          </BoxArticle>
        </Row>
      </Section>
    </>
  )
}

// Export new component
export default SectionListArticleWithTag
