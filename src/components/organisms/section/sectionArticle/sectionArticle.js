// Import plugin
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

// import settings
import settings from "../../../../layouts/settings/settings"

// Import styles
import { Section, SiteBar, BoxArticle } from "./style/style"

// Import component
import Row from "../../../atoms/row/row"
import Icon from "../../../atoms/icon/icon"
import Ads from "../../../molecules/ads/ads"
import List from "../../../molecules/list/list"
import Button from "../../../atoms/button/button"
import Article from "../../../molecules/article/article"

// Create new component
class SectionArticleComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const {
      tag,
      meta,
      image,
      title,
      author,
      description,
      othersArticlesThisAuthor,
    } = this.props.content

    return (
      <>
        <Section theme={{ settings: settings }}>
          <Row parameters={{ className: "row-section" }}>
            <SiteBar theme={{ settings: settings, site: "left" }}></SiteBar>
            <BoxArticle theme={{ settings: settings }}>
              <Article
                type="full"
                content={{ image, title, author, tag, date: meta.firstPublishedAt, description }}
              />
            </BoxArticle>
            <SiteBar theme={{ settings: settings, site: "right" }}>
              <Ads type="adsExpertShort" content={{ ...author }} />
              <Ads
                type="adslistArticle"
                parameters={{
                  filter: false,
                  type: "author",
                }}
                content={{
                  slug: author.slug,
                  title: author.name,
                  article: othersArticlesThisAuthor,
                }}
              />
            </SiteBar>
          </Row>
        </Section>
      </>
    )
  }
}

// Export new component
export default SectionArticleComponent
