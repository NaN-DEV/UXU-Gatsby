import React from "react"

// IMPORT COMPONENT

import LevelList from "./level/level"
import Vertical from "./vertical/vertical"

// CREATE NEW COMPONENT

const ListComponent = props => {
  const { level, vertical, items, menu, secondary, className } = props
  return (
    <>
      {level && (
        <LevelList items={items} secondary={secondary} className={className} />
      )}
      {vertical && (
        <Vertical items={items} secondary={secondary} className={className} />
      )}
    </>
  )
}

export default ListComponent
