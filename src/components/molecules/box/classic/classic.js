// IMPORT PLUGIN
import React from "react"

// IMPORT SETTINGS STYLE
import theme from "../../../../layouts/settings"

// IMPORT  STYLE
import { Box } from "./style/style"

// CREATE NEW COMPONENT
const BoxClaassicComponent = props => {
  const { children } = props
  return (
    <>
      <Box theme={theme}>{children}</Box>
    </>
  )
}

// EXPORT NEW COMPONENT
export default BoxClaassicComponent
