// IMPORT PLUGIN
import React from "react"

// IMPORT SETTINGS STYLE
import theme from "../../../../layouts/settings"

// IMPORT COMPONENT
import Repair from "./repair/repair"

// CREATE NEW COMPONENT

const RadioComponent = props => {
  const { item, name, click } = props

  if (item.type === "repair") {
    return (
      <>
        <Repair item={item} name={name} click={click} />
      </>
    )
  } else {
    return (
      <>
        <p>Bad RadioComponent</p>
      </>
    )
  }
}

// EXPORT NEW COMPONENT
export default RadioComponent
