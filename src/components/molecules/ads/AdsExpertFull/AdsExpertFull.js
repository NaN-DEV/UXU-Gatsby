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
  AdsExpertBox,
  AdsExpert,
  Img,
  BoxContent,
  ExpertName,
  ExpertDescription,
  ExpertPage,
  Point,
  PointIcon,
  PointScore,
} from "./style/style"

// Import component
import Row from "../../../atoms/row/row"

// Create new component
const AdsExpertComponent = props => {
  const { content } = props

  return (
    <AdsExpertBox theme={{ settings: settings }}>
      <Row parameters={{ style: { maxWidth: "150rem" }, className: "AdsExpertRow" }}>
        <AdsExpert theme={{ settings: settings }}>
          <Img theme={{ settings: settings }} fluid={content.image.fluid} />

          <BoxContent theme={{ settings: settings }}>
            <ExpertName theme={{ settings: settings }}>
              {content.name} {content.surname}
            </ExpertName>
            <ExpertDescription theme={{ settings: settings }}>{content.desciption}</ExpertDescription>

            <ExpertPage theme={{ settings: settings }}>
              <List type="level" parameters={{}}>
                <Point theme={{ settings: settings }}>
                  <PointIcon theme={{ settings: settings }}>
                    <Icon type="Point" parameters={{ size: 2 }} />
                  </PointIcon>
                  <PointScore theme={{ settings: settings }}>
                    {content.city}, {content.country}
                  </PointScore>
                </Point>
                {console.log(content.socialMedia)}
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
        </AdsExpert>
      </Row>
    </AdsExpertBox>
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
