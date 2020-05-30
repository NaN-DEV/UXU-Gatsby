// IMPORT PLUGIN
import React from "react"

// IMPORT SETTINGS STYLE
import theme from "../../../../layouts/settings"

// IMPORT  STYLE
import ButtonSumbit from "./style/style"

// CREATE NEW COMPONENT
const ButtonSumbitComponent = props => {
  const { title } = props

  return (
    <>
      <ButtonSumbit>{title}</ButtonSumbit>
    </>
  )
}

// EXPORT NEW COMPONENT
export default ButtonSumbitComponent
