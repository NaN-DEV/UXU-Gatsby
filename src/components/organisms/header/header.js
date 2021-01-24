// IMPORT PLUGIN
import React from "react"

// IMPORT SETTINGS STYLE
import settings from "../../../layouts/settings"

// IMPORT COMPONENT START
import Row from "../../atoms/row/row"
import Icon from "../../atoms/icon/icon"
import Button from "../../atoms/button/button"

// IMPORT STYLES
import { Header, ListLink, MenuBox, BreakHeader } from "./style/style"

// CREATE NEW COMPONENT

const HeaderComponent = props => {
  return (
    <>
      <Header theme={{ settings: settings }}>
        <Row className="row">
          <Button
            type="linkIn"
            parameters={{ className: "logo" }}
            content={{ to: "/", title: "UXU" }}
          >
            <Icon type="logo" parameters={{ theme: "primary", size: 3 }} />
          </Button>
          <Button
            type="button"
            content={{ title: "menu" }}
            parameters={{ style: { marginLeft: "auto" }, className: "hamburger" }}
          >
            <Icon type="hamburger" parameters={{ theme: "primary", size: 3 }} />
            <MenuBox className="box" theme={{ settings: settings }}>
              <ListLink theme={{ settings: settings }}>
                <Button
                  type="linkOut"
                  content={{ to: "https://www.nan.nz/expert/pawel-niedzwiecki", title: "O mnie" }}
                >
                  O mnie
                </Button>
                <Button type="linkIn" content={{ to: "contact", title: "Kontakt" }}>
                  Kontakt
                </Button>
              </ListLink>
            </MenuBox>
          </Button>
        </Row>
      </Header>
      <BreakHeader />
    </>
  )
}

// EXPORT NEW COMPONENT
export default HeaderComponent
