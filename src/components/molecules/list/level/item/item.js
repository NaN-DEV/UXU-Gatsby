// IMPORT PLUGIN
import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import theme from "../../../../../layouts/theme/settings"
// IMPORT STYLE
import Li from "./style/style"

// CREATE NEW COMPONENT

const LiComponent = props => {
  const { slug, url, title, secondary, length } = props
  return (
    <>
      {url ? (
        <Li theme={theme} secondary={secondary ? 1 : 0} length={length}>
          <a href={url} title={title} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </Li>
      ) : (
        <Li theme={theme} secondary={secondary ? 1 : 0}>
          <Link
            to={slug === "home" ? "/" : slug}
            title={title}
            secondary={secondary ? 1 : 0}
          >
            {title}
          </Link>
        </Li>
      )}
    </>
  )
}

export default LiComponent

LiComponent.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string.isRequired,
}

LiComponent.defaultProps = {
  link: "/",
}
