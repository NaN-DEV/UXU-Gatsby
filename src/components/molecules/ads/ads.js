// Import plugin
import React from "react"
import PropTypes from "prop-types"

// Import component
import AdsTagFull from "./AdsTagFull/AdsTagFull"
import AdsClassic from "./AdsClassic/AdsClassic"
import AdsExpertFull from "./AdsExpertFull/AdsExpertFull"
import AdsListArticle from "./AdsListArticle/AdsListArticle"
import AdsExpertShort from "./AdsExpertShort/AdsExpertShort"
import AdsClassicLight from "./AdsClassicLight/AdsClassicLight"

// Create new component
const AdsComponent = props => {
  const { type, content, parameters, children } = props

  switch (type) {
    case "tag":
      return <AdsTagFull content={content} />
    case "classic":
      return <AdsClassic content={content} />
    case "adslistArticle":
      return <AdsListArticle content={content} parameters={parameters} />
    case "adsExpertFull":
      return <AdsExpertFull content={content} />
    case "adsExpertShort":
      return <AdsExpertShort content={content} />
    case "AdsClassicLight":
      return <AdsClassicLight content={content} parameters={parameters} children={children} />
    default:
      return "add type ads"
  }
}

// PropTpyes
AdsComponent.propTypes = {
  type: PropTypes.string.isRequired,
}

// Export new component
export default AdsComponent
