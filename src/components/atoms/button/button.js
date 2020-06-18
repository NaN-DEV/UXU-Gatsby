// IMPORT PLUGIN
import React from "react"

// IMPORT SETTINGS STYLE
import theme from "../../../layouts/settings"

// IMPORT SETTINGS COMPONENT
import ButtonIcon from "./icon/icon"
import ButtonSumbit from "./submit/submit"
import ButtonClassic from "./classic/classic"
import ButtonCategory from "./category/category"

// CREATE NEW COMPONENT
const ButttonComponent = props => {
  const { submit, icon, small, box, category, disabled, onClick } = props
  if (!submit) {
    return (
      <>
        <ButtonSumbit disabled={disabled} onClick={onClick} {...props} small={small} />
      </>
    )
  } else if (category) {
    return (
      <>
        <ButtonCategory disabled={disabled} {...props} small={small} box={box} />
      </>
    )
  } else if (icon) {
    return (
      <>
        <ButtonIcon disabled={disabled} {...props} small={small} box={box} />
      </>
    )
  } else {
    return (
      <>
        <ButtonClassic disabled={disabled} {...props} small={small} />
      </>
    )
  }
}

// EXPORT NEW COMPONENT
export default ButttonComponent
