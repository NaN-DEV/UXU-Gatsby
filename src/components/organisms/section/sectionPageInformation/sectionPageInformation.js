// Import plugin
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

// import settings
import settings from "../../../../layouts/settings/settings"

// Import styles
import { Section, Article, Description } from "./style/style"

// Import component
import Row from "../../../atoms/row/row"

// Create new component
class SectionArticleComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { description } = this.props.content
    console.log(description)
    return (
      <>
        <Section theme={{ settings: settings }}>
          <Row parameters={{ className: "row-section" }}>
            <Article theme={{ settings: settings }}>
              {description.map((item, i) => {
                return (
                  <Description
                    key={item.id}
                    theme={{ settings: settings }}
                    dangerouslySetInnerHTML={{ __html: item.text }}
                  />
                )
              })}
            </Article>
          </Row>
        </Section>
      </>
    )
  }
}

// Export new component
export default SectionArticleComponent
