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
      {tag && <BoxTag content={content} {...props} />}
      {ads && <BoxAds content={content} {...props} big={big ? 1 : 0} />}
      {info && <BoxInfo content={content} {...props} />}
      {skill && <BoxSkill content={content} {...props} />}
      {author && <BoxAuthor content={content} {...props} />}
      {help && <BoxHelp content={help} {...props} />}
      {infoService && <BoxiInfoService content={content} {...props} />}
      {classic && <BoxClassic {...props}>{children}</BoxClassic>}
    </>
  )
}

export default BoxComponent
