// IMPORT PLUGIN
import React from "react"

// IMPORT SETTINGS STYLE

import Row from "../../../atoms/row/row"
import Icon from "../../../atoms/icon/icon"
import Ads from "../../../molecules/ads/ads"
import Button from "../../../atoms/button/button"
import settings from "../../../../layouts/settings/settings"

// IMPORT STYLE
import { Modal, Header, Content, Footer, ModalBox, GlobalStyle } from "./style/style"

// CREATE NEW COMPONENT
const ModalInfoComponent = props => {
  const { parameters, content } = props

  return (
    <>
      <GlobalStyle />
      <ModalBox>
        <Modal theme={{ settings: settings }}>
          <Header>
            <Row parameters={{}}>
              <Button
                type="linkIn"
                content={{ to: "/", title: "nan" }}
                parameters={{ newClass: "logo" }}
              >
                <Icon type="logo" parameters={{ color: "secondary", size: 4 }} />
              </Button>

              <Button
                type="button"
                content={{ title: "closed menu" }}
                parameters={{ className: "closed", onClick: parameters.switchPower }}
              >
                <Icon type="Closed" parameters={{ color: "secondary" }} />
              </Button>
            </Row>
          </Header>

          <Content theme={{ settings: settings }}>
            <Row parameters={{}}>
              <Ads
                type="classic"
                content={{ title: content.info ? content.info : "Add infomation" }}
              />
            </Row>
          </Content>

          <Footer theme={{ settings: settings }} />
        </Modal>
      </ModalBox>
    </>
  )
}

// EXPORT NEW COMPONENT
export default ModalInfoComponent
