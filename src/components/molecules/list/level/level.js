// IMPORT PLUGIN
import React from "react"

// IMPORT STYLE
import List from "./style/style"

// IMPORT SETTINGS STYLE
import theme from "../../../../layouts/theme/settings"

// IMPORT COMPONENT
import Item from "./item/item"

// CREATE NEW COMPONENT
const ListLevelComponent = props => {
  const { items, secondary, className } = props
  const ArrayLength = items.length

  return (
    <List theme={theme} secondary={secondary ? 1 : 0} className={className}>
      {items &&
        items.map((item, i) => (
          <Item
            key={i}
            url={item.url}
            slug={`/${item.slug}`}
            title={item.title || item.name}
            secondary={secondary}
            length={ArrayLength > 1 ? 1 : 0}
          />
        ))}
    </List>
  )
}

export default ListLevelComponent
