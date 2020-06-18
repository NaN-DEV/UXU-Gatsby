// IMPORT PLUGIN
import React from "react"

// IMPORT SETTINGS STYLE
import theme from "../../../../layouts/settings"

// IMPORT  STYLE
import ButtonSumbit from "./style/style"

// CREATE NEW COMPONENT
const ButtonSumbitComponent = props => {
  const { title, disabled, onClick } = props

  return (
    <>
      <ButtonSumbit type="submit" theme={theme} disabled={disabled} onClick={onClick}>
        {title}
      </ButtonSumbit>
    </>
  )
}

// EXPORT NEW COMPONENT
export default ButtonSumbitComponent
