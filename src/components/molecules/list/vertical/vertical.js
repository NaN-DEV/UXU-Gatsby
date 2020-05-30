// IMPORT PLUGIN
import React from "react"
import { Link } from "gatsby"

// IMPORT SETTINGS STYLE
import theme from "../../../../layouts/settings"

// IMPORT SETTINGS COMPONENT
import { Ul, Li, A } from "./style/style"

// CREATE NEW COMPONENT

const ListVerticalComponent = props => {
  const { items, hashtag, monkeysing, tag, blog, tutorials, author, skill } = props

  return (
    <>
      <Ul theme={theme} {...props} tag={tag} skill={skill}>
        {items &&
          items.map((item, i) => {
            return (
              <Li theme={theme} key={i} tag={tag} skill={skill}>
                {item.slug && (
                  <>
                    <Link
                      to={`/${
                        tag
                          ? `tag/${item.slug}`
                          : `${
                              blog
                                ? `blog/lista/${item.slug}`
                                : `${
                                    tutorials
                                      ? `poradniki/lista/${item.slug}`
                                      : `${
                                          author
                                            ? `autor/${item.slug}`
                                            : `${skill ? `umiejetnosci/${item.slug}` : item.slug}`
                                        }`
                                  }`
                            }`
                      }`}
                      title={item.name || `${item.firstName} ${item.lastName}`}
                      theme={theme}
                    >
                      {hashtag
                        ? `#${item.name || item.nick.replace(/\s/g, "_")}`
                        : `${
                            monkeysing
                              ? `@${item.name || item.nick.replace(/\s/g, "_")}`
                              : item.name || item.nick
                          }`}
                    </Link>
                  </>
                )}
                {item.url && (
                  <>
                    <A
                      href={item.url}
                      title={item.name || `${item.firstName} ${item.lastName}`}
                      theme={theme}
                    >
                      {hashtag
                        ? `#${item.name || item.nick.replace(/\s/g, "_")}`
                        : `${
                            monkeysing
                              ? `@${item.name || item.nick.replace(/\s/g, "_")}`
                              : item.name || item.nick
                          }`}
                    </A>
                  </>
                )}
              </Li>
            )
          })}
      </Ul>
    </>
  )
}

// EXPORT NEW COMPONENT
export default ListVerticalComponent
