// IMPORT PLUGIN
import React from "react"

// IMPORT STYLES
import Icon from "./style/style"

// IMPORT SETTINGS STYLE
import theme from "../../../layouts/settings"

// IMPORT COMPONENT ICON
import Heart from "./heart/heart"
import Money from "./money/money"
import Clock from "./clock/clock"
import TokTok from "./tiktok/tiktok"
import Twiter from "./twiter/twiter"
import Skills from "./skills/skills"
import YouTube from "./youtube/youtube"
import Facebook from "./facebook/facebook"
import Calendar from "./calendar/calendar"
import Instagram from "./instagram/instagram"
import HamburgerIcon from "./hamburger/hamburger"
import NotificationIcon from "./notification/notification"
import Tools from "./tools/tools"
import Rocket from "./rocket/rocket"
import Ask from "./ask/ask"
import Box from "./box/box"
import Map from "./map/map"
import Protection from "./protection/protection"

// CREATE NEW COMPONENT

const IconComponent = props => {
  const {
    hover,
    clock,
    money,
    calendar,
    youtube,
    facebook,
    hamburger,
    instagram,
    className,
    notification,
    skills,
    tiktok,
    twitter,
    heart,
    tools,
    rocket,
    ask,
    box,
    map,
    protection,
  } = props

  return (
    <>
      <Icon theme={theme} className={className} hover={hover} {...props}>
        {heart && <Heart />}
        {clock && <Clock />}
        {money && <Money />}
        {tiktok && <TikTok />}
        {twitter && <Twiter />}
        {youtube && <YouTube />}
        {facebook && <Facebook />}
        {calendar && <Calendar />}
        {skills && <Skills />}
        {tools && <Tools />}
        {rocket && <Rocket />}
        {ask && <Ask />}
        {box && <Box />}
        {map && <Map />}
        {protection && <Protection />}
        {instagram && <Instagram />}
        {hamburger && <HamburgerIcon />}
        {notification && <NotificationIcon />}
      </Icon>
    </>
  )
}

export default IconComponent
