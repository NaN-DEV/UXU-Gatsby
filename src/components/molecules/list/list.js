// IMPORT PLUGIN
import React from "react"

// IMPORT SETTINGS STYLE
import theme from "../../../layouts/settings"

// IMPORT SETTINGS COMPONENT
import Icon from "./icon/icon"
import Menu from "./menu/menu"
import Share from "./share/share"
import Level from "./level/level"
import Vertical from "./vertical/vertical"
import Category from "./category/category"
// CREATE NEW COMPONENT

const ListComponent = props => {
  const { level, icon, menu, items, vertical, category, share } = props

  return (
    <>
      {menu && <Menu items={items} />}
      {level && <Level items={items} {...props} />}
      {icon && <Icon items={items} {...props} />}
      {vertical && <Vertical items={items} {...props} />}
      {category && <Category items={items} {...props} />}
      {share && <Share items={items} {...props} />}
    </>
  )
}

// EXPORT NEW COMPONENT
export default ListComponent
