// Import plugin
import React from "react"

import { useStaticQuery, graphql } from "gatsby"

// import settings
import settings from "../../../../layouts/settings/settings"

// Import styles
import { Section, BoxInfo, Title, Info } from "./style/style"

// Import component
import Row from "../../../atoms/row/row"
import Button from "../../../atoms/button/button"

// Create new component
const Section404Component = props => {
  const { parameters, content } = props

  const { allDatoCmsTag, datoCmsContact, allDatoCmsArticle } = useStaticQuery(
    graphql`
      query {
        datoCmsContact {
          socialMedia {
            url
            title
          }
        }
        allDatoCmsTag {
          nodes {
            id
            title
            slug
          }
        }
      }
    `
  )

  return (
    <>
      <Section theme={{ settings: settings }}>
        <Row parameters={{ className: "row" }}>
          <BoxInfo theme={{ settings: settings }}>
            <Title theme={{ settings: settings }}>404</Title>
            <Info theme={{ settings: settings }}>Strona nie istnieje</Info>
            <Button type="linkIn" content={{ title: "Home", to: "/" }} parameters={{}}>
              Powrót do strony głownej
            </Button>
          </BoxInfo>
        </Row>
      </Section>
    </>
  )
}

// Export new component
export default Section404Component
