// IMPORT PLUGIN
import React from "react"
import { Link } from "gatsby"

// IMPORT SETTINGS STYLE
import theme from "../../../layouts/settings"

// IMPORT STYLES
import Logo from "./style/style"

// IMPORT SVG
import Brand from "../../../assets/brand/logo.svg"

// CREATE NEW COMPONENT
const LogoComponent = props => {
  const { className } = props

  return (
    <Logo theme={theme} className={className}>
      <Link to="/" title="UXU serwis komputerowy" alt="UXU">
        <Brand />
      </Link>
    </Logo>
  )
}

// EXPORT NEW COMPONENT
export default LogoComponent
