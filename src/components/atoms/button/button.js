// IMPORT PLUGIN
import React from "react"
import PropTypes from "prop-types"

// IMPORT STYLE
import { Button, LinkOut, LinkIn } from "./style/style"

// IMPORT SETTINGS STYLE
import settings from "../../../layouts/settings"

// CREATE NEW COMPONENT
const ButtonComponent = props => {
  const { id, key, type, content, parameters, children } = props

  switch (type) {
    case "button":
      return (
        <Button
          id={id}
          key={key}
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
        <>
          <LinkIn
            id={id}
            key={key}
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
        </>
      )
    case "linkOut":
      return (
        <LinkOut
          id={id}
          key={key}
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
          id={id}
          key={key}
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
  id: PropTypes.string,
  key: PropTypes.string,
  children: PropTypes.node.isRequired,
  content: PropTypes.shape({ title: PropTypes.string }),
  parameters: PropTypes.shape({
    to: PropTypes.string,
    theme: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    className: PropTypes.string,
  }),
}

ButtonComponent.defaultProps = {
  id: null,
  key: null,
  content: PropTypes.shape({ title: null }),
  parameters: PropTypes.shape({
    to: "/",
    theme: null,
    style: null,
    onClick: null,
    disabled: false,
    className: null,
  }),
}

export default ButtonComponent
