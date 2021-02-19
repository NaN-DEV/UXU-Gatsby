// Import plugin
import React from "react"
import PropTypes from "prop-types"

// Import settings
import List from "../../list/list"
import Icon from "../../../atoms/icon/icon"
import Button from "../../../atoms/button/button"
import settings from "../../../../layouts/settings/settings"

// Import style
import {
  ExpertAds,
  Img,
  BoxContent,
  ExpertName,
  ExpertDescription,
  ExpertMoreInfo,
  Point,
  PointTitle,
  PointScore,
} from "./style/style"

// Import component
import Row from "../../../atoms/row/row"
import { Description } from "../AdsTag/style/style"

// Create new component
const AdsExpertComponent = props => {
  const { content } = props
  return (
    <ExpertAds theme={{ settings: settings }}>
      <Img fluid={content.image.fluid} />
      <ExpertName theme={{ settings: settings }}>
        {content.name} {content.surname}
      </ExpertName>
      <ExpertDescription theme={{ settings: settings }}>{content.desciption}</ExpertDescription>
      <Button
        type="linkIn"
        parameters={{ theme: "primary" }}
        content={{ title: `${content.name} ${content.surname}`, to: `/e/${content.slug}` }}
      >
        więcej
      </Button>
      <ExpertMoreInfo>
        <List type="vertical" parameters={{}}>
          <Point theme={{ settings: settings }}>
            <PointTitle theme={{ settings: settings }}>praca</PointTitle>
            <PointScore theme={{ settings: settings }}>{content.work}</PointScore>
          </Point>
          <Point theme={{ settings: settings }}>
            <PointTitle theme={{ settings: settings }}>lokalizacja</PointTitle>
            <PointScore theme={{ settings: settings }}>
              {content.city}, {content.country}
            </PointScore>
          </Point>
          <Point theme={{ settings: settings }}>
            <PointTitle theme={{ settings: settings }}>wiek</PointTitle>
            <PointScore theme={{ settings: settings }}>
              {Math.round((Date.now() - new Date(content.birthday).getTime()) / 31557600000)}
            </PointScore>
          </Point>
        </List>
      </ExpertMoreInfo>
    </ExpertAds>
  )
}

// PropTpyes
AdsExpertComponent.propTypes = {
  content: PropTypes.shape({ title: PropTypes.string }),
}

// PropTypes default
AdsExpertComponent.defaultProps = {
  content: PropTypes.shape({ title: "add title" }),
}

// Export new component
export default AdsExpertComponent
