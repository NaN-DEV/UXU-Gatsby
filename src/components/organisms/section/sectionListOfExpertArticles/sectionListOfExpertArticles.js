// Import plugin
import React from "react"

import { useStaticQuery, graphql } from "gatsby"

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
const SectionListOfExpertArticlesComponent = props => {
  const { parameters, content } = props

  const { allDatoCmsTag, datoCmsContact, allDatoCmsArticle } = useStaticQuery(
    graphql`
      query {
        datoCmsContact {
          socialMedia {
            url
            title
          }
        }
        allDatoCmsTag {
          nodes {
            id
            title
            slug
          }
        }
      }
    `
  )

  return (
    <>
      <Section theme={{ settings: settings }}>
        <Row parameters={{ className: "row" }}>
          <SiteBar theme={{ settings: settings, breakPoint: "tablet" }}>
            <Ads type="AdsClassicLight" content={{ title: "umiejętnosći" }} parameters={{}}>
              <List type="level" parameters={{ className: "skills" }}>
                {content.skills.map((item, i) => {
                  return (
                    <Button
                      key={i}
                      type="linkIn"
                      content={{ to: `/t/${item.slug}` }}
                      parameters={{ className: "menuLink" }}
                    >
                      #{item.title}
                    </Button>
                  )
                })}
              </List>
            </Ads>
            <Ads type="AdsClassicLight" content={{}} parameters={{}}>
              <List type="level" parameters={{ className: "score" }}>
                <Point theme={{ settings: settings }}>
                  <Icon type="Post" parameters={{ size: 2 }} />
                  Dodane posty {content.article.length}
                </Point>
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
          <SiteBar theme={{ settings: settings }}>
            <Ads
              type="listPost"
              parameters={{}}
              content={{ article: content.article, title: content.skills[0].title }}
            />
          </SiteBar>
        </Row>
      </Section>
    </>
  )
}

// Export new component
export default SectionListOfExpertArticlesComponent
