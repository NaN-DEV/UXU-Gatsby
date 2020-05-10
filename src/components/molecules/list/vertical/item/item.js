// IMPORT PLUGIN
import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import theme from "../../../../../layouts/theme/settings"
// IMPORT STYLE
import Li from "./style/style"

// CREATE NEW COMPONENT

const LiComponent = props => {
  const { url, slug, title, secondary, length, id } = props
  return (
    <>
      {url ? (
        <Li
          theme={theme}
          secondary={secondary ? 1 : 0}
          length={length}
          key={id}
        >
          <a
            href={url}
            key={id + "_link"}
            title={title}
            target="_blank"
            rel="noopener noreferrer"
          >
            {title}
          </a>
        </Li>
      ) : (
        <>
          {slug ? (
            <Li key={id} theme={theme} secondary={secondary ? 1 : 0}>
              <Link
                title={title}
                key={id + "_link"}
                to={slug === "home" ? "/" : slug}
              >
                {title}
              </Link>
            </Li>
          ) : (
            <Li key={id} theme={theme} secondary={secondary ? 1 : 0}>
              {title}
            </Li>
          )}
        </>
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
