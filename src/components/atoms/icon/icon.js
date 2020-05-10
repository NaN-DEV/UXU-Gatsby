// IMPORT PLUGIN
import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

// IMPORT STYLES
import Icon from "./style/style"

// IMPORT SETTINGS STYLE
import theme from "../../../layouts/theme/settings"

// IMPORT COMPONENT ICON
import Star from "./star/star"
import Cogs from "./cogs/cogs"
import Users from "./users/users"
import Brand from "./brand/brand"
import Search from "./search/search"
import Envelope from "./envelope/envelope"
import Triangle from "./triangle/triangle"
import Newspaper from "./newspaper/newspaper"

// CREATE NEW COMPONENT

const IconComponent = props => {
  const {
    star,
    cogs,
    link,
    brand,
    users,
    width,
    height,
    search,
    triangle,
    envelope,
    newspaper,
    secondary,
    className,
    widthMobile,
    heightMobile,
  } = props

  return (
    <>
      {link ? (
        <Icon
          theme={theme}
          new_width={width}
          new_height={height}
          className={className}
          width_mobile={widthMobile}
          triangle={triangle ? 1 : 0}
          height_mobile={heightMobile}
          secondary={secondary ? 1 : 0}
        >
          <Link to={link}>
            {star && <Star />}
            {cogs && <Cogs />}
            {users && <Users />}
            {brand && <Brand />}
            {search && <Search />}
            {envelope && <Envelope />}
            {newspaper && <Newspaper />}
            {triangle && (
              <Triangle secondary={secondary} className={className} />
            )}
          </Link>
        </Icon>
      ) : (
        <Icon
          theme={theme}
          new_width={width}
          new_height={height}
          className={className}
          width_mobile={widthMobile}
          triangle={triangle ? 1 : 0}
          height_mmobile={heightMobile}
          secondary={secondary ? 1 : 0}
        >
          {star && <Star />}
          {cogs && <Cogs />}
          {users && <Users />}
          {brand && <Brand />}
          {search && <Search />}
          {envelope && <Envelope />}
          {newspaper && <Newspaper />}
          {triangle && <Triangle secondary={secondary} className={className} />}
        </Icon>
      )}
    </>
  )
}

export default IconComponent

IconComponent.propTypes = {
  link: PropTypes.string,
  search: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string,
  triangle: PropTypes.bool,
  secondary: PropTypes.bool,
  className: PropTypes.string,
  widthMobile: PropTypes.string,
  heightMobile: PropTypes.string,
}

IconComponent.defaultProps = {
  link: null,
  width: null,
  height: null,
  search: false,
  triangle: false,
  className: null,
  secondary: false,
  widthMobile: null,
  heightMobile: null,
}
