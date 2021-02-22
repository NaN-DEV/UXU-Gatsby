// Import plugin
import React from "react"
import PropTypes from "prop-types"

// Import settings
import settings from "../../../../layouts/settings/settings"

// Import style
import { AdsTagBox, AdsTag, Img, BoxContent, AdsTagName, AdsTagDescription } from "./style/style"

// Import component
import Row from "../../../atoms/row/row"
import List from "../../list/list"
import Icon from "../../../atoms/icon/icon"
import Button from "../../../atoms/button/button"

// Create new component
const AdsTagFullComponent = props => {
  const { content } = props
  console.log(content)
  return (
    <AdsTagBox theme={{ settings: settings }}>
      <Row parameters={{ style: { maxWidth: "150rem" }, className: "AdsExpertRow" }}>
        <AdsTag theme={{ settings: settings }}>
          <Img theme={{ settings: settings }} fluid={content.image.fluid} />

          <BoxContent theme={{ settings: settings }}>
            <AdsTagName theme={{ settings: settings }}>{content.title}</AdsTagName>
            <AdsTagDescription theme={{ settings: settings }}>{content.description}</AdsTagDescription>
          </BoxContent>
        </AdsTag>
      </Row>
    </AdsTagBox>
  )
}

// PropTpyes
AdsTagFullComponent.propTypes = {
  content: PropTypes.shape({ title: PropTypes.string }),
}

// PropTypes default
AdsTagFullComponent.defaultProps = {
  content: PropTypes.shape({ title: "add title" }),
}

// Export new component
export default AdsTagFullComponent
