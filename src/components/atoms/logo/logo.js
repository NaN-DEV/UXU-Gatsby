// IMPORT PLUGIN
import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

// IMPORT STYLES
import Brand from "./style/style"

// IMPORT SETTINGS STYLE
import theme from "../../../layouts/theme/settings"

// IMPORT IMAGES
import LogoSvg from "../../../assets/logo/logo.svg"

// CREATE NEW COMPONENT
const LogoComponent = props => {
  const {
    link,
    secondary,
    width,
    height,
    widthMobile,
    heightMobile,
    className,
  } = props

  return (
    <Brand
      theme={theme}
      secondary={secondary ? 1 : 0}
      width={width}
      height={height}
      className={className}
      widthMobile={widthMobile}
      heightMobile={heightMobile}
    >
      <Link to={link} title="UXU serwis komputerowy 24/7" alt="Logo NaN">
        <LogoSvg />
      </Link>
    </Brand>
  )
}

export default LogoComponent

LogoComponent.propTypes = {
  link: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  secondary: PropTypes.bool,
  className: PropTypes.string,
  widthMobile: PropTypes.string,
  heightMobile: PropTypes.string,
}

LogoComponent.defaultProps = {
  link: "/",
  width: null,
  height: null,
  className: null,
  secondary: false,
  widthMobile: null,
  heightMobile: null,
}
