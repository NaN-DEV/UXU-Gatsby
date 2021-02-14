// Import plugin
import React from "react"
import PropTypes from "prop-types"

// Import Component

import Info from "./info/info"

// Create new component
const ModalComponent = props => {
  const { type, content, parameters } = props

  switch (type) {
    case "info":
      return <Info content={content} parameters={parameters} />
      break
    default:
      return "Please add type modal :)"
  }
}

// PropTpyes
ModalComponent.propTypes = {
  type: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  parameters: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
}

// PropTpyes default
ModalComponent.defaultProps = {
  type: null,
  content: false,
  parameters: false,
}

export default ModalComponent
