// IMPORT PLUGIN
import React from "react"
import { Link } from "gatsby"

// IMPORT SETTINGS STYLE
import theme from "../../../../layouts/settings"

// IMPORT SETTINGS STYLE
import { Ul, Li } from "./style/style"

// IMPORT COMPONENT
import Icon from "../../../atoms/icon/icon"

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
                {item.slug && (
                  <Link to={`/${item.slug}`} title={item.name}>
                    {item.name === "TikTok" && <Icon tiktok />}
                    {item.name === "YouTube" && <Icon youtube />}
                    {item.name === "Twitter" && <Icon twitter />}
                    {item.name === "Facebook" && <Icon facebook />}
                    {item.name === "Instagram" && <Icon instagram />}
                  </Link>
                )}
                {item.url && (
                  <Link to={`/${item.url}`} title={item.name}>
                    {item.name === "TikTok" && <Icon tiktok />}
                    {item.name === "YouTube" && <Icon youtube />}
                    {item.name === "Twitter" && <Icon twitter />}
                    {item.name === "Facebook" && <Icon facebook />}
                    {item.name === "Instagram" && <Icon instagram />}
                  </Link>
                )}
              </Li>
            )
          })}
      </Ul>
    </>
  )
}

// EXPORT NEW COMPONENT
export default ListLevelComponent
