// Import plugin
import React from "react"
import PropTypes from "prop-types"

// Import styles
import BoxIcon from "./style/style"

// Import settings
import settings from "../../../layouts/settings/settings"

// Import svg
import Logo from "../../../assets/brand/logo.svg"
import Pig from "../../../assets/icon/pig.svg"
import Post from "../../../assets/icon/post.svg"
import Home from "../../../assets/icon/home.svg"
import Closed from "../../../assets/icon/closed.svg"
import Github from "../../../assets/icon/github.svg"
import Contact from "../../../assets/icon/contact.svg"
import Twitter from "../../../assets/icon/twitter.svg"
import Youtube from "../../../assets/icon/youtube.svg"
import Facebook from "../../../assets/icon/facebook.svg"
import Instagram from "../../../assets/icon/instagram.svg"

// Create new component
const IconComponent = props => {
  const { id, key, type, parameters } = props

  switch (type) {
    case "logo":
      return (
        <BoxIcon
          id={id}
          key={key}
          size={parameters.size}
          style={parameters.style}
          className={parameters.className}
          theme={{ choice: parameters.theme, settings: settings }}
        >
          <Logo />
        </BoxIcon>
      )

    case "Post":
      return (
        <BoxIcon
          id={id}
          key={key}
          size={parameters.size}
          style={parameters.style}
          className={parameters.className}
          theme={{ choice: parameters.theme, settings: settings }}
        >
          <Post />
        </BoxIcon>
      )
    case "Pig":
      return (
        <BoxIcon
          id={id}
          key={key}
          size={parameters.size}
          style={parameters.style}
          className={parameters.className}
          theme={{ choice: parameters.theme, settings: settings }}
        >
          <Pig />
        </BoxIcon>
      )

    case "Home":
      return (
        <BoxIcon
          id={id}
          key={key}
          size={parameters.size}
          style={parameters.style}
          className={parameters.className}
          theme={{ choice: parameters.theme, settings: settings }}
        >
          <Home />
        </BoxIcon>
      )

    case "Closed":
      return (
        <BoxIcon
          id={id}
          key={key}
          size={parameters.size}
          style={parameters.style}
          className={parameters.className}
          theme={{ choice: parameters.theme, settings: settings }}
        >
          <Closed />
        </BoxIcon>
      )

    case "Github":
      return (
        <BoxIcon
          id={id}
          key={key}
          size={parameters.size}
          style={parameters.style}
          className={parameters.className}
          theme={{ choice: parameters.theme, settings: settings }}
        >
          <Github />
        </BoxIcon>
      )

    case "Contact":
      return (
        <BoxIcon
          id={id}
          key={key}
          size={parameters.size}
          style={parameters.style}
          className={parameters.className}
          theme={{ choice: parameters.theme, settings: settings }}
        >
          <Contact />
        </BoxIcon>
      )

    case "Twitter":
      return (
        <BoxIcon
          id={id}
          key={key}
          size={parameters.size}
          style={parameters.style}
          className={parameters.className}
          theme={{ choice: parameters.theme, settings: settings }}
        >
          <Twitter />
        </BoxIcon>
      )
    case "Youtube":
      return (
        <BoxIcon
          id={id}
          key={key}
          size={parameters.size}
          style={parameters.style}
          className={parameters.className}
          theme={{ choice: parameters.theme, settings: settings }}
        >
          <Youtube />
        </BoxIcon>
      )
    case "Facebook":
      return (
        <BoxIcon
          id={id}
          key={key}
          size={parameters.size}
          style={parameters.style}
          className={parameters.className}
          theme={{ choice: parameters.theme, settings: settings }}
        >
          <Facebook />
        </BoxIcon>
      )
    case "Instagram":
      return (
        <BoxIcon
          id={id}
          key={key}
          size={parameters.size}
          style={parameters.style}
          className={parameters.className}
          theme={{ choice: parameters.theme, settings: settings }}
        >
          <Instagram />
        </BoxIcon>
      )
    default:
      return "Please add type icon :) "
  }
}

// PropTpyes
IconComponent.propTypes = {
  id: PropTypes.string,
  key: PropTypes.string,
  parameters: PropTypes.shape({
    size: PropTypes.number,
    theme: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
  }),
}

// PropTpyes default
IconComponent.defaultProps = {
  id: null,
  key: null,
  parameters: PropTypes.shape({
    size: 40,
    style: null,
    theme: false,
    className: null,
  }),
}

export default IconComponent
