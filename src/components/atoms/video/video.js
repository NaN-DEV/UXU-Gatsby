// IMPORT PLUGIN
import React from "react"

// IMPORT SETTINGS STYLE
import theme from "../../../layouts/settings"

// IMPORT  STYLE
import { Video } from "./style/style"

// CREATE NEW COMPONENT

const VideoComponent = ({ videoSrcURL, videoTitle, ...props }) => (
  <Video {...props} theme={theme}>
    <iframe
      frameBorder="0"
      allowFullScreen
      src={videoSrcURL}
      title={videoTitle}
      mozallowfullscreen="true"
      webkitallowfullscreen="true"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    />
  </Video>
)
export default VideoComponent
