// IMPORT PLUGIN
import React from "react"
import PropTypes from "prop-types"

// IMPORT STYLES
import BoxIcon from "./style/style"

// IMPORT SETTINGS STYLE
import settings from "../../../layouts/settings"

// IMPORT SVG

import Logo from "../../../assets/brand/logo.svg"
import Hamburger from "../../../assets/icon/hamburger.svg"

// CREATE NEW COMPONENT
const IconComponent = props => {
  const { id, key, type, parameters } = props

  switch (type) {
    case "logo":
      return (
        <BoxIcon
          id={id}
          key={key}
          size={parameters.size}
          style={parameters.style}
          className={parameters.className}
          theme={{ choice: parameters.theme, settings: settings }}
        >
          <Logo />
        </BoxIcon>
      )
    case "hamburger":
      return (
        <BoxIcon
          id={id}
          key={key}
          size={parameters.size}
          style={parameters.style}
          className={parameters.className}
          theme={{ choice: parameters.theme, settings: settings }}
        >
          <Hamburger />
        </BoxIcon>
      )
    default:
      return "Please add type icon :) "
  }
}

// PropTpyes
IconComponent.propTypes = {
  id: PropTypes.string,
  key: PropTypes.string,
  parameters: PropTypes.shape({
    size: PropTypes.number,
    theme: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
  }),
}

// PropTpyes default
IconComponent.defaultProps = {
  id: null,
  key: null,
  parameters: PropTypes.shape({
    size: 40,
    style: null,
    theme: false,
    className: null,
  }),
}

export default IconComponent
