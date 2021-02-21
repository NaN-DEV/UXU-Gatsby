// Important plugin
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

// Important component
import Layout from "../layouts/index"
import Ads from "../components/molecules/ads/ads"
import Section from "../components/organisms/section/section"

// Create new component
const PrivacyPageComponent = props => {
  const { datoCmsPrivacy } = useStaticQuery(
    graphql`
      query {
        datoCmsPrivacy {
          id
          description {
            id
            text
          }
          seo {
            title
            description
            image {
              url
            }
          }
        }
      }
    `
  )
  return (
    <>
      <Layout
        content={{
          title: datoCmsPrivacy.seo.title,
          image: datoCmsPrivacy.seo.image.url,
          description: datoCmsPrivacy.seo.description,
        }}
        parameters={{}}
      >
        <Section type="pageInformation" content={{ ...datoCmsPrivacy }} />
      </Layout>
    </>
  )
}

// Export new component
export default PrivacyPageComponent
