// Import plugin
import React from "react"
import PropTypes from "prop-types"

// Import settings
import settings from "../../../../layouts/settings/settings"

// Import style
import { AdsClassic, BoxImg, Img, BoxContent, Title, Description } from "./style/style"

// Import component
import Row from "../../../atoms/row/row"

// Create new component
const AdsClassicComponent = props => {
  const { content } = props

  return (
    <Row parameters={{ style: { maxWidth: "150rem" } }}>
      <AdsClassic theme={{ settings: settings }}>
        <BoxImg theme={{ settings: settings }}>
          <Img fluid={content.image.fluid} />
        </BoxImg>
        <BoxContent theme={{ settings: settings }}>
          <Title theme={{ settings: settings }}>
            <span>#</span>
            {content.title}
          </Title>
          <Description theme={{ settings: settings }}>{content.description}</Description>
        </BoxContent>
      </AdsClassic>
    </Row>
  )
}

// PropTpyes
AdsClassicComponent.propTypes = {
  content: PropTypes.shape({ title: PropTypes.string }),
}

// PropTypes default
AdsClassicComponent.defaultProps = {
  content: PropTypes.shape({ title: "add title" }),
}

// Export new component
export default AdsClassicComponent
