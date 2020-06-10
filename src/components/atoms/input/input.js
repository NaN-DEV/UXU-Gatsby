// IMPORT PLUGIN
import React from "react"

// IMPORT SETTINGS STYLE
import theme from "../../../layouts/settings"

// IMPORT STYLES
import Input from "./style/style"

// CREATE NEW COMPONENT

const InputComponent = props => {
  const { type, placeholder, id, name, className, onChange, onBlur, value } = props

  return (
    <>
      <Input
        id={id}
        name={name}
        type={type}
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
export default InputComponent
