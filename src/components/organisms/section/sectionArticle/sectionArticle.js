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
    const { image, title, author, tag, meta, description } = this.props.content

    return (
      <>
        <Section theme={{ settings: settings }}>
          <Row parameters={{ className: "row-section" }}>
            <SiteBar theme={{ settings: settings, site: "left" }}>ygygyg njuhu huhgu</SiteBar>
            <BoxArticle theme={{ settings: settings }}>
              <Article
                type="full"
                content={{ image, title, author, tag, date: meta.firstPublishedAt, description }}
              />
            </BoxArticle>
            <SiteBar theme={{ settings: settings, site: "right" }}>
              <Ads type="adsExpertShort" content={{ ...author }} />
            </SiteBar>
          </Row>
        </Section>
      </>
    )
  }
}

// Export new component
export default SectionArticleComponent
