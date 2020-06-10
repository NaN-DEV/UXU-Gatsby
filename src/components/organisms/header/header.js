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
    { id: "main-menu-home", slug: "", title: "Strona Główna" },
    { id: "main-menu-service", slug: "uslugi", title: "Usługi" },
    { id: "main-menu-tutorial", slug: "poradniki", title: "Poradniki" },
    { id: "main-menu-blog", slug: "blog", title: "Blog" },
    { id: "main-menu-contact", slug: "kontakt", title: "Kontakt" },
  ]
  return (
    <>
      <Header theme={theme}>
        <Row className="row">
          <Logo />
          <form className="search">
            <Input type="search" placeholder="Szukaj..." />
          </form>
          <Button
            small={true}
            title="Oddaj do naprawy"
            slug="oddaj-do-naprawy"
            className="button none"
          />
          <Button title="Menu" box={boxLink} icon="hamburger" className="button end" />
        </Row>
      </Header>
      <BoxHeader />
    </>
  )
}

// EXPORT NEW COMPONENT
export default HeaderComponent
