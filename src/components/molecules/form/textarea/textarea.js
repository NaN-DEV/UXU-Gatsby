// IMPORT PLUGIN
import React from "react"

// IMPORT SETTINGS STYLE
import theme from "../../../../layouts/settings"

// IMPORT STYLES
import { Textarea, BoxInput } from "./style/style"

// CREATE NEW COMPONENT

const TextAreaComponent = props => {
  const { item } = props
  return (
    <>
      <BoxInput size={item.size ? item.size : "100%"}>
        <Textarea theme={theme} placeholder={item.placeholder} />
      </BoxInput>
    </>
  )
}

// EXPORT NEW COMPONENT
export default TextAreaComponent
