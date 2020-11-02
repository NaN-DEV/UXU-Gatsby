// IMPORT PLUGIN
import React from "react"

// IMPORT SETTINGS STYLE
import theme from "../../../layouts/settings"

// IMPORT COMPONENT START
import Row from "../../atoms/row/row"
import Logo from "../../atoms/logo/logo"
import Input from "../../atoms/input/input"
import Button from "../../atoms/button/button"

// IMPORT STYLES
import { Header, BoxHeader } from "./style/style"

// CREATE NEW COMPONENT

const HeaderComponent = props => {
  const boxLink = [
    { id: "about", slug: "about", title: "O mnie" },
    { id: "contact", slug: "contact", title: "Kontakt" },
  ]
  return (
    <>
      <Header theme={theme}>
        <Row className="row">
          <Logo />
          <Button title="Menu" box={boxLink} icon="hamburger" className="button end" />
        </Row>
      </Header>
      <BoxHeader />
    </>
  )
}

// EXPORT NEW COMPONENT
export default HeaderComponent
