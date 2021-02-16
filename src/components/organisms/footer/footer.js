// IMPORT PLUGIN
import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

// IMPORT STYLES
import { P, H1, Footer } from "./style/style"

// Import settings
import settings from "../../../layouts/settings/settings"

// IMPORT COMPONENT
import Row from "../../atoms/row/row"
import Icon from "../../atoms/icon/icon"
import List from "../../molecules/list/list"
import Button from "../../atoms/button/button"

// CREATE NEW COMPONENT
const FooterComponent = props => {
  return (
    <>
      <Footer theme={{ settings: settings }}>
        <Row parameters={{ className: "row" }}>
          <Button
            type="linkIn"
            key="footer-link-logo"
            parameters={{ className: "logo" }}
            content={{ to: "/", title: "UXU" }}
          >
            <Icon type="logo" parameters={{ theme: "primary", size: 3 }} />
          </Button>
          <P theme={{ settings: settings }}>Copyright 2020 - {new Date().getFullYear()}</P>
          <List type="level" parameters={{ className: "links" }}>
            <Button type="linkIn" content={{ to: "/privacy" }} parameters={{}}>
              Polityka prywatności
            </Button>
            <Button type="linkIn" content={{ to: "/contact" }} parameters={{}}>
              Kontakt
            </Button>
          </List>
        </Row>
      </Footer>
    </>
  )
}

export default FooterComponent
