// IMPORT PLUGIN
import React from "react"

// IMPORT COMPONENT
import Repair from "./repair/repair"

// CREATE NEW COMPONENT

const RadioComponent = props => {
  const {
    type,
    name,
    click,
    id,
    active,
    icon,
    additional,
    title,
    description,
    defaultValue,
    onBlur,
    onChange,
    value,
    checked,
  } = props

  if (type === "repair") {
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
          defaultValue={defaultValue}
          onBlur={onBlur}
          onChange={onChange}
          value={value}
          checked={checked}
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
