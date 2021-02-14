// Important plugin
import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

// Important settings
import settings from "../../../../layouts/settings/settings"

// Important style
import {
  Article,
  Box,
  Image,
  Title,
  AuthorImg,
  AutorName,
  NameAuthor,
  DateAddPost,
} from "./style/style"

// Important settings
import List from "../../list/list"
import Row from "../../../atoms/row/row"
import Icon from "../../../atoms/icon/icon"
import Button from "../../../atoms/button/button"

// Create new component
class ArticleFullComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = { date: null }
    // Poniższe wiązanie jest niezbędne do prawidłowego przekazania `this` przy wywołaniu funkcji
    this.dateFormat = this.dateFormat.bind(this)
  }

  componentDidMount() {
    this.dateFormat(this.props.content.date)
  }

  dateFormat = date => {
    const fullTime = new Date(date)
    let day = ""

    switch (fullTime.getMonth()) {
      case 0:
        day = "Sty."
        break
      case 1:
        day = "Lut."
        break
      case 2:
        day = "Mar."
        break
      case 3:
        day = "Kwi."
        break
      case 4:
        day = "Maj"
        break
      case 5:
        day = "Cze."
        break
      case 6:
        day = "Lip."
        break
      case 7:
        day = "Sie."
        break
      case 8:
        day = "Wrz."
        break
      case 9:
        day = "Paź."
        break
      case 10:
        day = "Lis."
        break
      case 11:
        day = "Gru."
        break
    }

    this.setState({
      date: `${fullTime.getDate()} ${day} ${fullTime.getFullYear()}`,
    })

    return null
  }

  render() {
    const { date } = this.state
    const { id, key, type, parameters, content } = this.props
    console.log(content.author)
    return (
      <>
        <Article theme={{ settings: settings }} id={id} key={key}>
          <Image theme={{ settings: settings }} fluid={content.image.fixed} />
          <Row parameters={{ className: "row" }}>
            <Title theme={{ settings: settings }}>{content.title}</Title>

            <Button
              type="linkIn"
              content={{
                to: `/e/${content.author.slug}`,
                title: `${content.author.name} ${content.author.surname}`,
              }}
              parameters={{ className: "authorAndDate" }}
            >
              <AuthorImg theme={{ settings: settings }} fluid={content.author.image.fixed} />
              <Box>
                <AutorName
                  theme={{ settings: settings }}
                >{`${content.author.name} ${content.author.surname}`}</AutorName>
                <DateAddPost theme={{ settings: settings }}>{date}</DateAddPost>
              </Box>
            </Button>

            <List type="level" parameters={{ className: "tag" }}>
              {content.tag.map((item, i) => {
                console.log(item)
                return (
                  <Button
                    type="linkIn"
                    key={`${item.id}_${i}_ArticleShort`}
                    parameters={{}}
                    content={{ to: `/t/${item.slug}`, title: item.title }}
                  >
                    <p
                      style={{
                        color: item.color.colorTxt.hex,
                        backgroundColor: item.color.colorBackground.hex,
                      }}
                    >
                      <span>#</span>
                      {item.title}
                    </p>
                  </Button>
                )
              })}
            </List>
          </Row>
        </Article>
      </>
    )
  }
}

// EXPORT NEW COMPONENT
export default ArticleFullComponent
