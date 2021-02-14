// Import plugin
import React from "react"

import PropTypes from "prop-types"

// Import style
import { Box, Textarea, Label, Error } from "./style/style"

// Import settings style
import settings from "../../../layouts/settings/settings"

// Create new component
const TextAreaComponent = props => {
  const { content, parameters } = props

  return (
    <>
      <Box theme={{ settings: settings }}>
        <Textarea
          component="textarea"
          name={parameters.name}
          style={parameters.style}
          value={parameters.value}
          theme={{ settings: settings }}
          validate={parameters.validate}
          className={parameters.newClass}
          placeholder={content.placeholder}
          errors={content.errors ? true : false}
        />
        <Error theme={{ settings: settings }}>{content.errors}</Error>
      </Box>
    </>
  )
}

// PropTypes
TextAreaComponent.propTypes = {
  content: PropTypes.shape({
    errors: PropTypes.string,
    placeholder: PropTypes.string,
  }),
  parameters: PropTypes.shape({
    name: PropTypes.string,
    theme: PropTypes.string,
    style: PropTypes.object,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
      PropTypes.array,
      PropTypes.func,
    ]),
    validate: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
      PropTypes.array,
      PropTypes.func,
    ]),
    className: PropTypes.string,
  }),
}

// PropTypes default
TextAreaComponent.defaultProps = {
  content: PropTypes.shape({
    errors: "",
    placeholder: "add placeholder",
  }),
  parameters: PropTypes.shape({
    name: null,
    theme: null,
    style: null,
    value: null,
    validate: null,
    className: null,
  }),
}

export default TextAreaComponent
