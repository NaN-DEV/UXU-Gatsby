// IMPORT PLUGIN
import React from "react"
import PropTypes from "prop-types"

// IMPORT STYLE
import List from "./style/style"

// IMPORT SETTINGS STYLE
import theme from "../../../../layouts/theme/settings"

// IMPORT COMPONENT
import Item from "./item/item"

// CREATE NEW COMPONENT
const ListVerticalComponent = props => {
  const { items, secondary, className } = props
  const ArrayLength = items.length
  return (
    <List theme={theme} secondary={secondary ? 1 : 0} className={className}>
      {items &&
        items.map(item => (
          <Item
            key={item.id}
            url={item.url}
            slug={`/${item.slug}`}
            title={item.title}
            secondary={secondary}
            length={ArrayLength > 1 ? 1 : 0}
          />
        ))}
    </List>
  )
}

export default ListVerticalComponent

ListVerticalComponent.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
}
