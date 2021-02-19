// Import plugin
import React from "react"
import PropTypes from "prop-types"

// Import settings
import settings from "../../../../layouts/settings/settings"

// Import style
import { AdsListPost, Header, Title, Info, TagCloud, Tag, ErrorArticle } from "./style/style"

// Import component
import List from "../../list/list"
import Row from "../../../atoms/row/row"
import Button from "../../../atoms/button/button"

// Create new component
class AdsListPostComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      article: [],
      newInfo: [],
    }

    this.addArticle = this.addArticle.bind(this)
  }

  componentDidMount() {
    this.addArticle()
  }

  addArticle() {
    const { content, parameters } = this.props
    const dateNow = Date.now()
    const article = []
    const newInfo = []

    {
      content.article.length &&
        content.article.forEach((item, index) => {
          const dateArticle = new Date(item.meta.firstPublishedAt).getTime()
          switch (parameters.filter) {
            case true:
              return item.tag.filter(tag => tag.slug === content.slug).length && article.push(item)
            default:
              return article.push(item)
          }

          if ((dateNow - dateArticle) / 86400000 < 7) {
            newInfo.push(true)
          } else {
            newInfo.push(false)
          }
        })
    }

    this.setState({
      newInfo,
      article,
    })
  }

  render() {
    const { content, parameters } = this.props
    const { newInfo, article } = this.state

    return (
      <>
        <AdsListPost theme={{ settings: settings }}>
          <Header theme={{ settings: settings }}>
            {parameters.type === "tag" && (
              <>
                <Title theme={{ theme: "primary", settings: settings }}>
                  <Button type="linkIn" content={{ to: `/t/${content.slug}` }} parameters={{}}>
                    #{content.title}
                  </Button>
                </Title>
              </>
            )}
            {parameters.type === "author" && (
              <>
                <Title theme={{ settings: settings }}>
                  Więcej od
                  <Button type="linkIn" content={{ to: `/e/${content.slug}` }} parameters={{}}>
                    {content.title}
                  </Button>
                </Title>
              </>
            )}
            {parameters.type === "title" && (
              <>
                <Title theme={{ settings: settings }}>{content.title}</Title>
                {article.length ? (
                  <Button type="linkIn" content={{ to: `/t/${content.slug}` }} parameters={{}}>
                    więcej
                  </Button>
                ) : null}
              </>
            )}
          </Header>
          <List type="vertical" parameters={{}}>
            {article.length ? (
              article.map((item, i) => {
                if (i < 5) {
                  return (
                    <Button
                      type="linkIn"
                      key={`${item.id}_${i}_AdsListPost`}
                      content={{ to: `/a/${item.slug}` }}
                      parameters={{ className: `adsListPostOnceArticle` }}
                    >
                      <p>{item.title}</p>
                      {newInfo[i] ? (
                        <Info theme={{ settings: settings }}>NOWE</Info>
                      ) : (
                        <TagCloud>
                          {item.tag.map((tag, i) => {
                            return (
                              <Tag
                                theme={{ settings: settings }}
                                key={`${tag.id}_${item.id}_${i}_AdsListPostTag`}
                              >
                                <span>#</span>
                                {tag.title}
                              </Tag>
                            )
                          })}
                        </TagCloud>
                      )}
                    </Button>
                  )
                }
                return null
              })
            ) : (
              <ErrorArticle theme={{ settings: settings }}>Add article</ErrorArticle>
            )}
          </List>
        </AdsListPost>
      </>
    )
  }
}

// PropTpyes
AdsListPostComponent.propTypes = {
  content: PropTypes.shape({
    slug: PropTypes.string,
    title: PropTypes.string,
    article: PropTypes.array,
  }),
  parameters: PropTypes.shape({
    filter: PropTypes.bool,
    type: PropTypes.string,
  }),
}

// PropTypes default
AdsListPostComponent.defaultProps = {
  content: PropTypes.shape({
    slug: null,
    article: null,
    title: "Add title",
  }),

  parameters: PropTypes.shape({
    type: "title",
    filter: false,
  }),
}

// Export new component
export default AdsListPostComponent
