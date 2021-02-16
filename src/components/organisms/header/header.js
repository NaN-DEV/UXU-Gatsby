// IMPORT PLUGIN
import React from "react"

// IMPORT SETTINGS STYLE
import settings from "../../../layouts/settings/settings"

// IMPORT COMPONENT START
import Row from "../../atoms/row/row"
import Icon from "../../atoms/icon/icon"
import Button from "../../atoms/button/button"

// IMPORT STYLES
import { Header } from "./style/style"

// CREATE NEW COMPONENT

const HeaderComponent = props => {
  return (
    <>
      <Header theme={{ settings: settings }}>
        <Row parameters={{ className: "row" }}>
          <Button
            type="linkIn"
            parameters={{ className: "logo" }}
            content={{ to: "/", title: "UXU" }}
          >
            <Icon type="logo" parameters={{ theme: "primary", size: 3 }} />
          </Button>
        </Row>
      </Header>
    </>
  )
}

// EXPORT NEW COMPONENT
export default HeaderComponent
