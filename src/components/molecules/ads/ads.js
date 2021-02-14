// Import plugin
import React from "react"
import PropTypes from "prop-types"

// Import component
import AdsTag from "./AdsTag/AdsTag"
import AdsExpert from "./AdsExpert/AdsExpert"
import AdsClassic from "./AdsClassic/AdsClassic"
import AdsListPost from "./AdsListPost/AdsListPost"
import AdsClassicLight from "./AdsClassicLight/AdsClassicLight"

// Create new component
const AdsComponent = props => {
  const { type, content, parameters, children } = props

  switch (type) {
    case "tag":
      return <AdsTag content={content} parameters={parameters} />
      break
    case "adsExpert":
      return <AdsExpert content={content} />
      break
    case "classic":
      return <AdsClassic content={content} />
      break
    case "listPost":
      return <AdsListPost content={content} parameters={parameters} />
      break

    case "AdsClassicLight":
      return <AdsClassicLight content={content} parameters={parameters} children={children} />
      break

    default:
      return "add type ads"
      break
  }
}

// PropTpyes
AdsComponent.propTypes = {
  type: PropTypes.string.isRequired,
}

// Export new component
export default AdsComponent
