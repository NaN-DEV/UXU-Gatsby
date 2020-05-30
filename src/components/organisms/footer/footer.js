// IMPORT PLUGIN
import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

// IMPORT STYLES
import { P, H1, Footer } from "./style/style"

// IMPORT SETTINGS STYLE
import theme from "../../../layouts/settings"

// IMPORT COMPONENT
import Row from "../../atoms/row/row"
import Logo from "../../atoms/logo/logo"
import List from "../../molecules/list/list"

// CREATE NEW COMPONENT
const FooterComponent = props => {
  const linkFooter = [
    { slug: "regulamin", title: "Regulamin" },
    { slug: "polityka-prywatnosci", title: "Polityka prywatnosci" },
    { slug: "kontakt", title: "Kontakt" },
  ]
  return (
    <>
      <Footer theme={theme}>
        <Row className="row">
          <Logo />
          <P theme={theme}>Copyright 2016-2020</P>
          <List level hashtag items={linkFooter} className="links" />
        </Row>
      </Footer>
    </>
  )
}

export default FooterComponent
