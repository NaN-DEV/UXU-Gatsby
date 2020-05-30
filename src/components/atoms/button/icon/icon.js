// IMPORT PLUGIN
import React from "react"

// IMPORT SETTINGS STYLE
import Icon from "../../icon/icon"
import Box from "../../../molecules/box/box"
import List from "../../../molecules/list/list"
import theme from "../../../../layouts/settings"

// IMPORT  STYLE
import { BoxButton, ButtonClassic, ButtonClassicSlug, ButtonClassicLink } from "./style/style"
import { string } from "prop-types"

// IMPORT  COMPONENT

// CREATE NEW COMPONENT
const ButtonClassicComponent = props => {
  const { title, icon, slug, link, className, box } = props

  if (slug) {
    return (
      <ButtonClassicSlug to={slug} title={title} {...props} theme={theme}>
        {icon === "hamburger" && <Icon hamburger />}
        {icon === "notification" && <Icon notification />}
        {box && (
          <BoxButton className="box" theme={theme}>
            <Box classic>
              <List menu items={box} />
            </Box>
          </BoxButton>
        )}
      </ButtonClassicSlug>
    )
  } else if (link) {
    return (
      <ButtonClassicLink href={link} {...props} theme={theme}>
        {icon === "hamburger" && <Icon hamburger />}
        {icon === "notification" && <Icon notification />}
        {box && (
          <BoxButton className="box" theme={theme}>
            <Box classic>
              <List menu items={box} />
            </Box>
          </BoxButton>
        )}
      </ButtonClassicLink>
    )
  } else {
    return (
      <ButtonClassic {...props} theme={theme}>
        {icon === "hamburger" && <Icon hamburger />}
        {icon === "notification" && <Icon notification />}
        {box && (
          <BoxButton className="box" theme={theme}>
            <Box classic>
              <List menu items={box} />
            </Box>
          </BoxButton>
        )}
      </ButtonClassic>
    )
  }
}

// EXPORT NEW COMPONENT
export default ButtonClassicComponent
