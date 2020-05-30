// IMPORT PLUGIN
import React from "react"
import PropTypes from "prop-types"

// IMPORT SETTINGS STYLE
import theme from "../../../../layouts/settings"

// IMPORT  STYLE
import {
  ButtonClassic,
  ButtonClassicSlug,
  ButtonClassicLink,
} from "./style/style"

// CREATE NEW COMPONENT
const ButtonClassicComponent = props => {
  const { title, slug, link, small, tel } = props
  const telephone = `${tel}`
  if (tel) {
    return (
      <ButtonClassicLink
        href={`tel:+48${tel}`}
        {...props}
        theme={theme}
        small={small}
      >
        {`+48 ${telephone.replace(/(.{3})/g, " $&")}`}
      </ButtonClassicLink>
    )
  } else if (slug) {
    return (
      <ButtonClassicSlug
        {...props}
        title={title}
        theme={theme}
        small={small}
        to={`/${slug}`}
      >
        {title}
      </ButtonClassicSlug>
    )
  } else if (link) {
    return (
      <ButtonClassicLink href={link} {...props} theme={theme} small={small}>
        {title}
      </ButtonClassicLink>
    )
  } else {
    return (
      <ButtonClassic {...props} theme={theme} small={small}>
        {title}
      </ButtonClassic>
    )
  }
}

ButtonClassicComponent.propTypes = {
  small: PropTypes.bool,
}
ButtonClassicComponent.defaultProps = {
  small: false,
}

// EXPORT NEW COMPONENT
export default ButtonClassicComponent
