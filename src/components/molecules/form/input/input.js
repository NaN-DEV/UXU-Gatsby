// IMPORT PLUGIN
import React from "react"

// IMPORT SETTINGS STYLE
import theme from "../../../../layouts/settings"

// IMPORT STYLES
import { Input } from "./style/style"

// CREATE NEW COMPONENT

const InputComponent = props => {
  const { item } = props
  if (item.type === "search") {
    return (
      <>
        <Input
          theme={theme}
          type={item.type}
          autoComplete="off"
          name={item.placeholder}
          placeholder={item.placeholder}
        />
      </>
    )
  } else {
    return (
      <>
        <p>Bad InputComponent</p>
      </>
    )
  }
}

// EXPORT NEW COMPONENT
export default InputComponent
