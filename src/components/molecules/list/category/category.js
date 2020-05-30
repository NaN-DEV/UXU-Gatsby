// IMPORT PLUGIN
import React from "react"
import { Link } from "gatsby"

// IMPORT SETTINGS STYLE
import theme from "../../../../layouts/settings"

// IMPORT STYLE
import { Ul, Li, A, Title, BoxCategory } from "./style/style"

// IMPORT COMPONENT
import Button from "../../../atoms/button/button"

// CREATE NEW COMPONENT

const ListCategoryComponent = props => {
  const { items, hashtag, title, active, services, author, tag } = props

  return (
    <>
      <BoxCategory {...props} theme={theme}>
        <Title theme={theme}>{`#${title}:`}</Title>
        <Ul theme={theme}>
          {items &&
            items.map((item, i) => {
              return (
                <Li theme={theme} key={i}>
                  <Button
                    small
                    category
                    theme={theme}
                    title={item.name}
                    slug={`${
                      services
                        ? `uslugi/lista/${item.slug}`
                        : `${
                            author
                              ? `autor/${item.slug}`
                              : `${tag ? `tag/${item.slug}` : item.slug}`
                          }`
                    }`}
                    hover={i === active ? true : false}
                  />
                </Li>
              )
            })}
        </Ul>
      </BoxCategory>
    </>
  )
}

// EXPORT NEW COMPONENT
export default ListCategoryComponent
