// IMPORT PLUGIN
import React from "react"
import { Link } from "gatsby"

// IMPORT SETTINGS STYLE
import theme from "../../../../layouts/settings"

// IMPORT SETTINGS COMPONENT
import { Ul, Li, LiMobile } from "./style/style"

// IMPORT  COMPONENT
import Button from "../../../atoms/button/button"

// CREATE NEW COMPONENT

const ListMenuComponent = props => {
  const { items } = props

  return (
    <>
      <Ul theme={theme}>
        {items &&
          items.map((item, i) => {
            return (
              <Li theme={theme} key={i}>
                <Link to={`/${item.slug}`} title={item.title}>
                  {item.title}
                </Link>
              </Li>
            )
          })}
        <LiMobile theme={theme}>
          <Button
            small={true}
            title="Oddaj do naprawy"
            slug="oddaj-do-naprawy"
            className="button none"
          />
        </LiMobile>
      </Ul>
    </>
  )
}

// EXPORT NEW COMPONENT
export default ListMenuComponent
