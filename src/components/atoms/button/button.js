// IMPORT PLUGIN
import React from "react"
import PropTypes from "prop-types"

// IMPORT COMPONENT
import ButtonMore from "./more/more"
import ButtonText from "./text/text"
import ButtonSubmit from "./submit/Submit"
import ButtonOutLine from "./outline/outline"
import ButtonHamburger from "./hamburger/hamburger"

// CREATE NEW COMPONENT

const ButtonComponent = props => {
  const {
    url,
    text,
    more,
    slug,
    title,
    style,
    clouse,
    submit,
    onClick,
    outline,
    hamburger,
    secondary,
    className,
  } = props

  if (text) {
    return (
      <ButtonText
        url={url}
        slug={slug}
        title={title}
        style={style}
        onClick={onClick}
        secondary={secondary}
        className={className}
      />
    )
  }
  if (more) {
    return (
      <ButtonMore
        url={url}
        slug={`/${slug}`}
        style={style}
        onClick={onClick}
        secondary={secondary}
        className={className}
      />
    )
  }
  if (submit) {
    return (
      <ButtonSubmit
        url={url}
        slug={`/${slug}`}
        title={title}
        style={style}
        onClick={onClick}
        secondary={secondary}
        className={className}
      />
    )
  }
  if (outline) {
    return (
      <ButtonOutLine
        url={url}
        slug={`/${slug}`}
        title={title}
        style={style}
        onClick={onClick}
        className={className}
        secondary={secondary}
      />
    )
  }
  if (hamburger) {
    return (
      <ButtonHamburger
        url={url}
        slug={`/${slug}`}
        style={style}
        clouse={clouse}
        onClick={onClick}
        secondary={secondary}
        className={className}
      />
    )
  }
  return <p>not working button</p>
}

ButtonComponent.propTypes = {
  more: PropTypes.bool,
  clouse: PropTypes.bool,
  outline: PropTypes.bool,
  onClick: PropTypes.func,
  title: PropTypes.string,
  style: PropTypes.string,
  hamburger: PropTypes.bool,
  secondary: PropTypes.bool,
  className: PropTypes.string,
}

ButtonComponent.defaultProps = {
  more: false,
  style: null,
  title: null,
  onClick: null,
  clouse: false,
  outline: false,
  className: null,
  hamburger: false,
  secondary: false,
}

export default ButtonComponent
