// IMPORT PLUGIN
import React from "react"
import { Link } from "gatsby"

// IMPORT SETTINGS STYLE
import theme from "../../../../layouts/settings"

// IMPORT SETTINGS COMPONENT
import { Ul, Li } from "./style/style"

// CREATE NEW COMPONENT

const ListLevelComponent = props => {
  const { items, hashtag } = props
  return (
    <>
      <Ul theme={theme} {...props}>
        {items &&
          items.map((item, i) => {
            return (
              <Li theme={theme} key={i}>
                <Link to={`/${item.slug}`} title={item.title}>
                  {hashtag ? `#${item.title.replace(/\s/g, "_")}` : item.title}
                </Link>
              </Li>
            )
          })}
      </Ul>
    </>
  )
}

// EXPORT NEW COMPONENT
export default ListLevelComponent
