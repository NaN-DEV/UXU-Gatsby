// Import plugin
import React from "react"

import { useStaticQuery, graphql } from "gatsby"

// import settings
import settings from "../../../../layouts/settings/settings"

// Import styles
import { Section, SiteBar, Title, BoxArticle } from "./style/style"

// Import component
import Row from "../../../atoms/row/row"
import Icon from "../../../atoms/icon/icon"
import Ads from "../../../molecules/ads/ads"
import List from "../../../molecules/list/list"
import Button from "../../../atoms/button/button"
import Article from "../../../molecules/article/article"

// Create new component
const SectionClassicComponent = props => {
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
        <Row parameters={{ className: "sectionListArticle" }}>
          <SiteBar theme={{ settings: settings, breakPoint: "tablet" }}>
            <List type="vertical" parameters={{ className: "siteBarList siteBarListButton" }}>
              <Button type="linkIn" content={{ to: "/" }} parameters={{ className: "menuLink" }}>
                Home
              </Button>
              <Button
                type="linkOut"
                content={{ to: "https://www.nan.nz/about/" }}
                parameters={{ className: "menuLink" }}
              >
                O mnie
              </Button>
              <Button type="linkIn" content={{ to: "/contact" }} parameters={{ className: "menuLink" }}>
                Kontakt
              </Button>
            </List>
            <List type="level" parameters={{ className: "siteBarList  siteBarListSocialMedia" }}>
              {datoCmsContact.socialMedia.map((item, i) => {
                return (
                  <Button
                    type="linkOut"
                    key={`${item.id}_${i}_siteBarListSocialMedia`}
                    content={{ to: item.url }}
                    parameters={{ className: "social" }}
                  >
                    <Icon type={item.title} parameters={{ size: 2 }} />
                  </Button>
                )
              })}
            </List>
            <Title theme={{ settings: settings }}>Popularne Tagi</Title>
            <List type="vertical" parameters={{ className: "siteBarList siteBarListButton" }}>
              {allDatoCmsTag.nodes.map((item, i) => {
                return (
                  <Button
                    type="linkIn"
                    key={i}
                    content={{ to: `/t/${item.slug}` }}
                    parameters={{ className: "menuLink" }}
                  >
                    #{item.title}
                  </Button>
                )
              })}
            </List>
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
              type="adslistArticle"
              parameters={{ type: "title", filter: true }}
              content={{ article: content.article, title: "Aktualności", slug: "aktualnosci" }}
            />
            <Ads
              type="adslistArticle"
              parameters={{ type: "tag", filter: true }}
              content={{ article: content.article, title: "na-luzie", slug: "na-luzie" }}
            />
          </SiteBar>
        </Row>
      </Section>
    </>
  )
}

// Export new component
export default SectionClassicComponent
