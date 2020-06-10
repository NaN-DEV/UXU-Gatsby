// IMPORT PLUGIN
import React from "react"

// IMPORT SETTINGS STYLE
import theme from "../../../layouts/settings"

// IMPORT STYLES
import Textarea from "./style/style"

// CREATE NEW COMPONENT
const TextAreaComponent = props => {
  const { placeholder, id, name, className, onChange, onBlur, value } = props
  return (
    <>
      <Textarea
        name={name}
        theme={theme}
        theme={theme}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        className={className}
        placeholder={placeholder}
      />
    </>
  )
}

// EXPORT NEW COMPONENT
export default TextAreaComponent
