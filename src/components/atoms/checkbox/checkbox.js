// IMPORT PLUGIN
import React from "react"

// IMPORT SETTINGS STYLE
import theme from "../../../layouts/settings"

// IMPORT STYLES
import { Box, CheckBox, Label } from "./style/style"

// CREATE NEW COMPONENT
const CheckBoxComponent = props => {
  const {
    name,
    value,
    content,
    checked,

    info,
    id,
    onBlur,
    onChange,
    className,
  } = props
  return (
    <>
      <Box>
        <CheckBox
          id={id}
          name={name}
          value={value}
          theme={theme}
          onBlur={onBlur}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          info={info ? 1 : 0}
          className={className}
          defaultChecked={checked ? true : false}
        />
        <Label for={name} dangerouslySetInnerHTML={{ __html: content }} />
      </Box>
    </>
  )
}

// EXPORT NEW COMPONENT
export default CheckBoxComponent
