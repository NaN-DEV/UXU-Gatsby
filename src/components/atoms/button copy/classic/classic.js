// IMPORT PLUGIN
import React from "react"

// IMPORT SETTINGS STYLE
import theme from "../../../../layouts/settings"

// IMPORT  STYLE
import { ButtonClassic, ButtonClassicSlug, ButtonClassicLink } from "./style/style"

// CREATE NEW COMPONENT
const ButtonClassicComponent = props => {
  const { title, slug, link, small, tel, disabled } = props
  const telephone = `${tel}`
  if (tel) {
    return (
      <ButtonClassicLink
        href={`tel:+48${tel}`}
        {...props}
        theme={theme}
        small={small ? 1 : 0}
        disabled={disabled}
      >
        {`+48 ${telephone.replace(/(.{3})/g, " $&")}`}
      </ButtonClassicLink>
    )
  } else if (slug) {
    return (
      <ButtonClassicSlug
        {...props}
        disabled={disabled}
        title={title}
        theme={theme}
        small={small ? 1 : 0}
        to={`/${slug}`}
      >
        {title}
      </ButtonClassicSlug>
    )
  } else if (link) {
    return (
      <ButtonClassicLink
        href={link}
        {...props}
        theme={theme}
        small={small ? 1 : 0}
        disabled={disabled}
      >
        {title}
      </ButtonClassicLink>
    )
  } else {
    return (
      <ButtonClassic {...props} theme={theme} small={small ? 1 : 0} disabled={disabled}>
        {title}
      </ButtonClassic>
    )
  }
}

// EXPORT NEW COMPONENT
export default ButtonClassicComponent
