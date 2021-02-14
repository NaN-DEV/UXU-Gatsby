// Import plugin
import React from "react"
import PropTypes from "prop-types"

// Import settings style
import settings from "../../../../layouts/settings/settings"

// Import style
import { Ul, Li } from "./style/style"

// Create new component
const ListVertivalComponent = props => {
  const { parameters, children } = props

  return (
    <>
      <Ul theme={{ settings: settings }} className={parameters.className}>
        {React.Children.map(children, child => {
          return child === null ? null : <Li theme={{ settings: settings }}>{child}</Li>
        })}
      </Ul>
    </>
  )
}

// PropTpyes
ListVertivalComponent.propTypes = {
  children: PropTypes.node.isRequired,
  parameters: PropTypes.shape({
    className: PropTypes.string,
  }),
}

// PropTpyes default
ListVertivalComponent.defaultProps = {
  parameters: PropTypes.shape({
    className: null,
  }),
}

export default ListVertivalComponent
