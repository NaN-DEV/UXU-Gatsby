// Import plugin
import React from "react"
import PropTypes from "prop-types"

// Import settings
import settings from "../../../../layouts/settings/settings"

// Import style
import { AdsClassicLight, Title, BoxContent } from "./style/style"

// Import component
import List from "../../list/list"
import Row from "../../../atoms/row/row"
import Button from "../../../atoms/button/button"

// Create new component
const AdsClassicLightComponent = props => {
  const { content, parameters, children } = props

  return (
    <>
      <AdsClassicLight theme={{ settings: settings }}>
        {content.title && <Title theme={{ settings: settings }}>{content.title}</Title>}
        <BoxContent theme={{ settings: settings }}>{children}</BoxContent>
      </AdsClassicLight>
    </>
  )
}

// PropTpyes
AdsClassicLightComponent.propTypes = {
  children: PropTypes.node.isRequired,
  content: PropTypes.shape({
    title: PropTypes.string,
    article: PropTypes.array,
  }),
  parameters: PropTypes.shape({
    site: PropTypes.string,
  }),
}

// PropTypes default
AdsClassicLightComponent.defaultProps = {
  content: PropTypes.shape({ title: "add title" }),
  parameters: PropTypes.shape({
    site: "left",
  }),
}

// Export new component
export default AdsClassicLightComponent
