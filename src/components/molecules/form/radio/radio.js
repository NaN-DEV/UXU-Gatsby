// IMPORT PLUGIN
import React from "react"

// IMPORT COMPONENT
import Repair from "./repair/repair"

// CREATE NEW COMPONENT

const RadioComponent = props => {
  const { name, click, id, active, icon, additional, title, description } = props

  if (item.type === "repair") {
    return (
      <>
        <Repair
          name={name}
          click={click}
          id={id}
          active={active ? true : false}
          icon={icon}
          additional={additional}
          title={title}
          description={description}
        />
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
