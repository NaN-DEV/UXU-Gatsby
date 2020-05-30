// IMPORT PLUGIN
import React from "react"

// IMPORT SETTINGS STYLE
import theme from "../../../../layouts/settings"

// IMPORT SETTINGS COMPONENT
import { Ul, Li, Link, BoxIcon, BoxQuantityShare } from "./style/style"

// IMPORT  COMPONENT
import Icon from "../../../atoms/icon/icon"

// CREATE NEW COMPONENT

const ListShareComponent = props => {
  const { items } = props

  return (
    <>
      <Ul theme={theme} {...props}>
        <Li theme={theme}>
          <Link
            theme={theme}
            href={`https://www.facebook.com/sharer/sharer.php?u=https://www.uxu.pl/${
              items.type === "service"
                ? `uslugi/artykul/${items.slug}`
                : `${
                    items.type === "blog"
                      ? `blog/artykul/${items.slug}`
                      : `${items.type === "blog" ? `poradniki/artykul/${items.slug}` : items.slug}`
                  }`
            }`}
            target="_blank"
            title="Udostępnij na facebook"
          >
            <BoxIcon theme={theme}>
              <Icon heart />
            </BoxIcon>
            <BoxQuantityShare theme={theme}>0</BoxQuantityShare>
          </Link>
        </Li>
      </Ul>
    </>
  )
}

// EXPORT NEW COMPONENT
export default ListShareComponent
