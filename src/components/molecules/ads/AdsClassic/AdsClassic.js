// Import plugin
import React from "react"
import PropTypes from "prop-types"

// Import settings
import settings from "../../../../layouts/settings/settings"

// Import style
import { AdsClassic, Title } from "./style/style"

// Import component
import Row from "../../../atoms/row/row"

// Create new component
const AdsClassicComponent = props => {
  const { content } = props

  return (
    <Row parameters={{ style: { maxWidth: "150rem" } }}>
      <AdsClassic theme={{ settings: settings }}>
        <Title>{content.title}</Title>
      </AdsClassic>
    </Row>
  )
}

// PropTpyes
AdsClassicComponent.propTypes = {
  content: PropTypes.shape({ title: PropTypes.string }),
}

// PropTypes default
AdsClassicComponent.defaultProps = {
  content: PropTypes.shape({ title: "add title" }),
}

// Export new component
export default AdsClassicComponent
