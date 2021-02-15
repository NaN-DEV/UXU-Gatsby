// IMPORT PLUGIN
import React from "react"
import { Link } from "gatsby"

// IMPORT SETTINGS STYLE
import theme from "../../../../layouts/settings"

// IMPORT SETTINGS STYLE
import { Ul, Li, A } from "./style/style"

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
                  <A href={item.url} title={item.name} target="_blank">
                    {item.name === "TikTok" && <Icon tiktok />}
                    {item.name === "YouTube" && <Icon youtube />}
                    {item.name === "Twitter" && <Icon twitter />}
                    {item.name === "Facebook" && <Icon facebook />}
                    {item.name === "Instagram" && <Icon instagram />}
                  </A>
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
