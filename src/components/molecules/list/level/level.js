// Import plugin
import React from "react"
import PropTypes from "prop-types"

// Import settings style
import settings from "../../../../layouts/settings/settings"

// Import style
import { Ul, Li } from "./style/style"

// Create new component
const ListLevelComponent = props => {
  const { parameters, children } = props

  return (
    <>
      <Ul theme={{ settings: settings }} style={parameters.style} className={parameters.className}>
        {React.Children.map(children, child => {
          return child === null ? null : <Li theme={{ settings: settings }}>{child}</Li>
        })}
      </Ul>
    </>
  )
}

// PropTpyes
ListLevelComponent.propTypes = {
  children: PropTypes.node.isRequired,
  parameters: PropTypes.shape({
    style: PropTypes.object,
    className: PropTypes.string,
  }),
}

// PropTpyes default
ListLevelComponent.defaultProps = {
  parameters: PropTypes.shape({
    style: null,
    className: null,
  }),
}

export default ListLevelComponent
