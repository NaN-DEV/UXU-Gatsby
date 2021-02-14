// Import plugin
import React from "react"
import PropTypes from "prop-types"

// Import settings
import settings from "../../../../layouts/settings/settings"

// Import style
import { AdsListPost, Header, Info } from "./style/style"

// Import component
import List from "../../list/list"
import Row from "../../../atoms/row/row"
import Button from "../../../atoms/button/button"
import { render } from "react-dom"

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
    const { content } = this.props
    const dateNow = Date.now()
    const article = []
    const newInfo = []

    {
      content.article.length &&
        content.article.forEach((item, index) => {
          const dateArticle = new Date(item.meta.firstPublishedAt).getTime()

          if ((dateNow - dateArticle) / 86400000 < 7) {
            newInfo.push(true)
            item.tag.filter(tag => tag.title === content.title).length && article.push(item)
          } else {
            newInfo.push(false)
            item.tag.filter(tag => tag.title === content.title).length && article.push(item)
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
    const { article, newInfo } = this.state

    return (
      <>
        <AdsListPost theme={{ settings: settings }}>
          <Header theme={{ settings: settings }}>
            <Button type="linkIn" content={{ to: `/t/${content.title}` }} parameters={{}}>
              <p>
                <span>#</span>
                {content.title}
              </p>
            </Button>
          </Header>
          <List type="vertical" parameters={{}}>
            {article.length ? (
              article.map((item, i) => {
                return (
                  <Button
                    type="linkIn"
                    key={`${item.id}_${i}_AdsListPost`}
                    content={{ to: `/a/${content.title}` }}
                    parameters={{ className: `adsListPostOnceArticle` }}
                  >
                    <p>{item.title}</p>
                    {newInfo[i] && <Info theme={{ settings: settings }}>NOWE</Info>}
                  </Button>
                )
              })
            ) : (
              <Button
                type="button"
                key={`addPost_AdsListPost`}
                content={{ title: `add post` }}
                parameters={{ className: `adsListPostOnceArticle` }}
              >
                <p>Add article</p>
              </Button>
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
    title: PropTypes.string,
    article: PropTypes.array,
  }),
  parameters: PropTypes.shape({
    site: PropTypes.string,
  }),
}

// PropTypes default
AdsListPostComponent.defaultProps = {
  content: PropTypes.shape({ title: "add title" }),
  parameters: PropTypes.shape({
    site: "left",
  }),
}

// Export new component
export default AdsListPostComponent
