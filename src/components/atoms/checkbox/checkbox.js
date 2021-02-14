// Import plugin
import React from "react"
import PropTypes from "prop-types"

// Import settings style
import settings from "../../../layouts/settings/settings"

// Import styles
import { Box, CheckBox, Label, Error } from "./style/style"

// Create new component
const CheckClassicComponent = props => {
  const { id, content, parameters } = props

  return (
    <>
      <Box theme={{ settings: settings }}>
        <CheckBox
          id={id}
          type="checkbox"
          name={parameters.name}
          value={parameters.value}
          checked={parameters.checked}
          theme={{ settings: settings }}
          validate={parameters.validate}
          onChange={parameters.onChange}
          errors={content.errors ? true : false}
        />
        <Label
          htmlFor={id}
          theme={{ settings: settings }}
          errors={content.errors ? true : false}
          dangerouslySetInnerHTML={{ __html: content.description }}
        />
        <Error theme={{ settings: settings }}>{content.errors}</Error>
      </Box>
    </>
  )
}

// PropTypes
CheckClassicComponent.propTypes = {
  content: PropTypes.shape({
    errors: PropTypes.string,
    description: PropTypes.string,
  }),
  parameters: PropTypes.shape({
    name: PropTypes.string,
    theme: PropTypes.string,
    checked: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
      PropTypes.array,
      PropTypes.func,
    ]),
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
    onChange: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
      PropTypes.array,
      PropTypes.func,
    ]),
    className: PropTypes.string,
  }),
}

// PropTypes default
CheckClassicComponent.defaultProps = {
  content: PropTypes.shape({
    errors: "",
    description: "add description",
  }),
  parameters: PropTypes.shape({
    name: null,
    theme: null,
    checked: null,
    value: null,
    validate: null,
    onChange: null,
    className: null,
  }),
}

// Export new component
export default CheckClassicComponent
