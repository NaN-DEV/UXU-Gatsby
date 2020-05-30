// IMPORT PLUGIN
import React from "react"
import PropTypes from "prop-types"

// IMPORT STYLE
import Row from "./style/style"

// IMPORT SETTINGS STYLE
import settings from "../../../layouts/settings"

// CREATE NEW COMPONENT
const RowComponent = props => {
  const { children, style, className } = props
  return (
    <>
      <Row style={style} className={className} settings={settings}>
        {children}
      </Row>
    </>
  )
}

export default RowComponent
