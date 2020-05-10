// IMPORT PLUGIN
import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { StaticQuery, graphql, Link } from "gatsby"

// IMPORT STYLES
import {
  Header,
  HeaderBox,
  ListElement,
  HeaderElement,
  BottomElement,
} from "./style/style"

// IMPORT SETTINGS STYLE
import theme from "../../../layouts/theme/settings"

// IMPORT COMPONENT
import Modal from "../modal/modal"
import Row from "../../atoms/row/row"
import Logo from "../../atoms/logo/logo"
import Form from "../../molecules/form/form"
import List from "../../molecules/list/list"
import Button from "../../atoms/button/button"

const Counter = ({ increment }) => (
  <>
    <Button
      className="button-hamburger"
      hamburger
      onClick={() => increment(true)}
    />
  </>
)

const ModalOpen = ({ payload }) => <>{payload && <Modal />}</>

Counter.propTypes = {
  payload: PropTypes.bool.isRequired,
  increment: PropTypes.func.isRequired,
}

const mapStateToProps = ({ payload }) => {
  return { payload }
}

const mapDispatchToProps = dispatch => {
  return { increment: e => dispatch({ type: `MODAL`, payload: e }) }
}

const ButtonModal = connect(mapStateToProps, mapDispatchToProps)(Counter)
const ModalMainMenu = connect(mapStateToProps, mapDispatchToProps)(ModalOpen)

// CREATE NEW COMPONENT

class HeaderComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      scrolled: false,
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  handleScroll = () => {
    const amt = window.scrollY
    if (amt > 200) this.setState({ scrolled: true })
    if (amt < 200) this.setState({ scrolled: false })
  }

  render() {
    const { scrolled } = this.state
    const on = { transform: "translateY(0px)" }
    const off = { transform: "translateY(-204px)" }
    const FormSearch = [
      {
        id: "search-main",
        input: {
          search: [
            {
              type: "Search",
              placeholder: `<b>Serwis</b> komputerowy`,
            },
          ],
        },
      },
    ]

    return (
      <StaticQuery
        query={graphql`
          query Header {
            allDatoCmsContact {
              nodes {
                mail
                telephoneNumber
                id
              }
            }
            allDatoCmsMainSetting {
              nodes {
                mainMenu {
                  id
                  slug
                  title
                  seoMetaTags {
                    id
                  }
                }
              }
            }
            allDatoCmsAllButtonLink(
              filter: { slug: { eq: "wycena-naprawy" } }
            ) {
              nodes {
                slug
                name
                id
              }
            }
          }
        `}
        render={data => {
          const telephoneNumber =
            "+48" + data.allDatoCmsContact.nodes[0].telephoneNumber
          return (
            <>
              <ModalMainMenu />
              <HeaderBox theme={theme} />
              <Header style={scrolled ? off : on} theme={theme}>
                <Row className="top-element">
                  <HeaderElement theme={theme}>
                    <Logo />
                    <Form items={FormSearch} key="form-search-header" />
                    <ButtonModal />
                  </HeaderElement>
                </Row>
                <BottomElement theme={theme}>
                  <Row className="bottom-element">
                    <ListElement theme={theme}>
                      <li>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          key={data.allDatoCmsContact.nodes[0].id + "_telefon"}
                          href={`tel:${data.allDatoCmsContact.nodes[0].mail}`}
                          title={`Numer telefonu do serwisu : ${telephoneNumber}`}
                        >
                          {telephoneNumber.replace(/(.{3})/g, " $&")}
                          <p>INFOLINIA CZYNNA 24/7</p>
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          key={data.allDatoCmsContact.nodes[0].id + "_mail"}
                          href={`mailto:${data.allDatoCmsContact.nodes[0].mail}`}
                          title={`Adres email : ${data.allDatoCmsContact.nodes[0].mail}`}
                        >
                          {data.allDatoCmsContact.nodes[0].mail}
                          <p>KONTAKT MAILOWY</p>
                        </a>
                      </li>
                      <li>
                        <Link
                          key={
                            data.allDatoCmsAllButtonLink.nodes[0].id + "_link"
                          }
                          to={`/${data.allDatoCmsAllButtonLink.nodes[0].slug}`}
                          title={data.allDatoCmsAllButtonLink.nodes[0].name}
                        >
                          {data.allDatoCmsAllButtonLink.nodes[0].name}
                          <p>FORMULARZ ZGŁOSZENIOWY</p>
                        </Link>
                      </li>
                    </ListElement>
                  </Row>
                </BottomElement>
              </Header>
            </>
          )
        }}
      />
    )
  }
}

export default HeaderComponent
