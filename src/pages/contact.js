// Important plugin
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

// Important component
import Layout from "../layouts/index"
import Ads from "../components/molecules/ads/ads"
import Section from "../components/organisms/section/section"

// Create new component
const ServiceCategory = props => {
  const { datoCmsContact, datoCmsPage } = useStaticQuery(
    graphql`
      query {
        datoCmsContact {
          id
          nameCompany
          street
          postCode
          city
          country
          krs
          regon
          vatId
          mail
        }
        datoCmsPage(title: { eq: "contact" }) {
          id
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
          title: datoCmsPage.seo.title,
          description: datoCmsPage.seo.description,
          image: datoCmsPage.seo.image,
        }}
        parameters={{ theme: "secondary" }}
      >
        <Ads type="classic" content={{ title: "hej! poznajmy sie :)" }} />
        <Section type="contact" content={{ title: "formularz" }} />
      </Layout>
    </>
  )
}

// Export new component
export default ServiceCategory
