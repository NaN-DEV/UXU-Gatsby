// IMPORT PLUGIN
import React from "react"

// IMPORT SETTINGS STYLE
import theme from "../../../layouts/settings"

// IMPORT COMPONENT ICON
import BoxTag from "./tag/tag"
import BoxAds from "./ads/ads"
import BoxInfo from "./info/info"
import BoxSkill from "./skill/skill"
import BoxAuthor from "./author/author"
import BoxClassic from "./classic/classic"
import BoxiInfoService from "./infoservice/infoservice"

// CREATE NEW COMPONENT

const BoxComponent = props => {
  const { classic, ads, children, content, author, tag, skill, info, infoService } = props

  return (
    <>
      {tag && <BoxTag content={content} />}
      {ads && <BoxAds content={content} />}
      {info && <BoxInfo content={content} />}
      {skill && <BoxSkill content={content} />}
      {author && <BoxAuthor content={content} />}
      {infoService && <BoxiInfoService content={content} />}
      {classic && <BoxClassic key="classic">{children}</BoxClassic>}
    </>
  )
}

export default BoxComponent
