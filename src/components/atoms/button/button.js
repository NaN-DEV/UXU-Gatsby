// IMPORT PLUGIN
import React from "react"
import PropTypes from "prop-types"

// IMPORT STYLE
import { Button, LinkOut, LinkIn } from "./style/style"

// IMPORT SETTINGS STYLE
import settings from "../../../layouts/settings/settings"

// CREATE NEW COMPONENT
const ButtonComponent = props => {
  const { type, content, parameters, children } = props

  switch (type) {
    case "button":
      return (
        <Button
          type={type}
          title={content.title}
          style={parameters.style}
          onClick={parameters.onClick}
          disabled={parameters.disabled}
          className={parameters.className}
          theme={{ choice: parameters.theme, settings: settings }}
        >
          {children}
        </Button>
      )
    case "linkIn":
      return (
        <LinkIn
          type={type}
          to={content.to}
          title={content.title}
          style={parameters.style}
          onClick={parameters.onClick}
          disabled={parameters.disabled}
          className={parameters.className}
          theme={{ choice: parameters.theme, settings: settings }}
        >
          {children}
        </LinkIn>
      )
    case "linkOut":
      return (
        <LinkOut
          type={type}
          target="_blank"
          href={content.to}
          title={content.title}
          style={parameters.style}
          onClick={parameters.onClick}
          disabled={parameters.disabled}
          className={parameters.className}
          theme={{ choice: parameters.theme, settings: settings }}
        >
          {children}
        </LinkOut>
      )
    case "sumbit":
      return (
        <Button
          type={type}
          title={content.title}
          style={parameters.style}
          onClick={parameters.onClick}
          disabled={parameters.disabled}
          className={parameters.className}
          theme={{ choice: parameters.theme, settings: settings }}
        >
          {children}
        </Button>
      )
    default:
      return "Please add type button :)"
  }
}

// PropTpyes
ButtonComponent.propTypes = {
  children: PropTypes.node.isRequired,
  content: PropTypes.shape({ title: PropTypes.string, to: PropTypes.string }),
  parameters: PropTypes.shape({
    theme: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    className: PropTypes.string,
  }),
}

// PropTypes default
ButtonComponent.defaultProps = {
  content: PropTypes.shape({ title: null, to: "/" }),
  parameters: PropTypes.shape({
    theme: null,
    style: null,
    onClick: null,
    disabled: null,
    className: null,
  }),
}

export default ButtonComponent
