// IMPORT PLUGIN
import React from "react"
import { Link } from "gatsby"

// IMPORT SETTINGS STYLE
import theme from "../../../../layouts/settings"

// IMPORT SETTINGS COMPONENT
import { Ul, Li, A } from "./style/style"

// CREATE NEW COMPONENT

const ListVerticalComponent = props => {
  const {
    items,
    hashtag,
    monkeysing,
    tag,
    blog,
    tutorials,
    author,
    skill,
    boxTagblog,
    boxTagservice,
    boxTagtutorial,
  } = props

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
                          ? `${
                              boxTagblog
                                ? `${`category/${item.slug}`}`
                                : `${
                                    boxTagservice
                                      ? `${`tag/${item.slug}/uslugi/`}`
                                      : `${
                                          boxTagtutorial
                                            ? `${`tag/${item.slug}/poradniki/`}`
                                            : `${`tag/${item.slug}/`}`
                                        }`
                                  }`
                            }
      `
                          : `${
                              blog
                                ? `category/${item.slug}`
                                : `${
                                    tutorials
                                      ? `poradniki/${item.slug}`
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
