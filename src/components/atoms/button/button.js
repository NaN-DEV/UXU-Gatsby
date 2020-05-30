// IMPORT PLUGIN
import React from "react"
import PropTypes from "prop-types"

// IMPORT SETTINGS STYLE
import theme from "../../../layouts/settings"

// IMPORT SETTINGS COMPONENT
import ButtonIcon from "./icon/icon"
import ButtonSumbit from "./submit/submit"
import ButtonClassic from "./classic/classic"
import ButtonCategory from "./category/category"

// CREATE NEW COMPONENT

const ButttonComponent = props => {
  const { submit, icon, small, box, category } = props
  if (submit) {
    return (
      <>
        <ButtonSumbit {...props} small={small} />
      </>
    )
  } else if (category) {
    return (
      <>
        <ButtonCategory {...props} small={small} box={box} />
      </>
    )
  } else if (icon) {
    return (
      <>
        <ButtonIcon {...props} small={small} box={box} />
      </>
    )
  } else {
    return (
      <>
        <ButtonClassic {...props} small={small} />
      </>
    )
  }
}

ButttonComponent.propTypes = {
  submit: PropTypes.bool,
  small: PropTypes.bool,
  icon: PropTypes.string,
}
ButttonComponent.defaultProps = {
  small: false,
}

// EXPORT NEW COMPONENT
export default ButttonComponent
