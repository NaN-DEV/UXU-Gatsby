// IMPORT PLUGIN
import React from "react"

// IMPORT SETTINGS STYLE
import theme from "../../../layouts/settings"

// IMPORT COMPONENT ICON
import BoxTag from "./tag/tag"
import BoxAds from "./ads/ads"
import BoxHelp from "./help/help"
import BoxInfo from "./info/info"
import BoxSkill from "./skill/skill"
import BoxAuthor from "./author/author"
import BoxClassic from "./classic/classic"
import BoxiInfoService from "./infoservice/infoservice"

// CREATE NEW COMPONENT

const BoxComponent = props => {
  const {
    classic,
    ads,
    children,
    content,
    author,
    tag,
    skill,
    info,
    infoService,
    big,
    help,
  } = props

  return (
    <>
      {tag && <BoxTag content={content} />}
      {ads && <BoxAds content={content} big={big ? 1 : 0} />}
      {info && <BoxInfo content={content} />}
      {skill && <BoxSkill content={content} />}
      {author && <BoxAuthor content={content} />}
      {help && <BoxHelp content={help} />}
      {infoService && <BoxiInfoService content={content} />}
      {classic && <BoxClassic>{children}</BoxClassic>}
    </>
  )
}

export default BoxComponent
