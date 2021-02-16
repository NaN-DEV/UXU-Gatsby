// Import plugin
import React from "react"
import PropTypes from "prop-types"

// Import component
import AdsTag from "./AdsTag/AdsTag"

import AdsClassic from "./AdsClassic/AdsClassic"
import AdsListPost from "./AdsListPost/AdsListPost"
import AdsExpertFull from "./AdsExpertFull/AdsExpertFull"
import AdsExpertShort from "./AdsExpertShort/AdsExpertShort"
import AdsClassicLight from "./AdsClassicLight/AdsClassicLight"

// Create new component
const AdsComponent = props => {
  const { type, content, parameters, children } = props

  switch (type) {
    case "tag":
      return <AdsTag content={content} parameters={parameters} />
    case "classic":
      return <AdsClassic content={content} />
    case "listPost":
      return <AdsListPost content={content} parameters={parameters} />
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
