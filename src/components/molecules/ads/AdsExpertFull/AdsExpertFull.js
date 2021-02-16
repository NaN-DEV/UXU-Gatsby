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
  AdsExpert,
  Img,
  BoxContent,
  ExpertName,
  ExpertDescription,
  ExpertPage,
  BoxExpertContact,
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
    <Row parameters={{ style: { maxWidth: "150rem" } }}>
      <AdsExpert theme={{ settings: settings }}>
        <Img fluid={content.image.fixed} />
        <BoxContent theme={{ settings: settings }}>
          <ExpertName theme={{ settings: settings }}>
            {content.name} {content.surname}
          </ExpertName>
          <ExpertDescription theme={{ settings: settings }}>{content.desciption}</ExpertDescription>
          <ExpertPage theme={{ settings: settings }}>
            <List type="level" parameters={{}}>
              {content.socialMedia.map((item, i) => {
                return (
                  <Button
                    type="linkOut"
                    key={`${item.id}_${i}_siteBarListSocialMedia`}
                    content={{ to: item.url }}
                    parameters={{ className: "social" }}
                  >
                    <Icon type={item.title} parameters={{ size: 2 }} />
                  </Button>
                )
              })}
            </List>
          </ExpertPage>
        </BoxContent>
        <BoxExpertContact>
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
        </BoxExpertContact>
      </AdsExpert>
    </Row>
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
