// IMPORT PLUGIN
import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { StaticQuery, graphql } from "gatsby"

// IMPORT GRAPHIV SVG
import Arrow from "../../../assets/icon/arrow-down.svg"

// IMPORT SETTINGS STYLE
import theme from "../../../layouts/theme/settings"
import Mascot from "../../atoms/mascot/mascot"
import Button from "../../atoms/button/button"
import Logo from "../../atoms/logo/logo"

// IMPORT COMPONENT START
import Form from "../../molecules/form/form"
import List from "../../molecules/list/list"
import Row from "../../atoms/row/row"

// IMPORT STYLES
import {
  Avatar,
  Content,
  ContentAdditional,
  ContentMain,
  ContentWrapper,
  Footer,
  Header,
  Left,
  Modal,
  Right,
} from "./style/style"

const Counter = ({ payload, increment }) => (
  <>
    <Button
      className="button-clouse"
      hamburger
      clouse
      onClick={() => increment(false)}
    />
  </>
)

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

const TestRidax = connect(mapStateToProps, mapDispatchToProps)(Counter)

// CREATE NEW COMPONENT

const ModalComponent = props => {
  return (
    <>
      <Modal theme={theme}>
        <Row className="row">
          <StaticQuery
            query={graphql`
              query Modal {
                datoCmsContact {
                  socialMedia {
                    title
                    url
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
            render={data => (
              <>
                <Header theme={theme}>
                  <Logo />
                  <TestRidax />
                </Header>
                <Content theme={theme}>
                  <List
                    vertical
                    items={data.allDatoCmsMainSetting.nodes[0].mainMenu}
                    className="main-link"
                  />
                </Content>
                <Footer theme={theme}>
                  <Left theme={theme} start>
                    <List level items={data.allDatoCmsAllButtonLink.nodes} />
                  </Left>
                  <Right theme={theme} end>
                    <List level items={data.datoCmsContact.socialMedia} />
                  </Right>
                </Footer>
              </>
            )}
          />
        </Row>
      </Modal>
    </>
  )
}

export default ModalComponent
