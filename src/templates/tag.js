// Import plugin
import React from "react"
import { graphql } from "gatsby"

// Import component
import Layout from "../layouts/index"
import Ads from "../components/molecules/ads/ads"
import Section from "../components/organisms/section/section"

// Create new component
const TagPageComponent = props => {
  const { title, description, image, seo } = props.data.datoCmsTag

  return (
    <>
      <Layout
        content={{
          title: seo.title,
          description: seo.description,
          image: seo.image,
        }}
        parameters={{}}
      >
        <Ads
          type="tag"
          parameters={{ border: "#000", shadow: "#000" }}
          content={{ title, description, image }}
        />
        <Section type="listArticle" content={{ article: props.data.allDatoCmsArticle.nodes }} />
      </Layout>
    </>
  )
}

// Query GraphQL
export const TagPageComponentQuery = graphql`
  query TagPageInfoQuery($id: String) {
    datoCmsTag(id: { eq: $id }) {
      id
      title
      description
      image {
        fixed {
          ...GatsbyDatoCmsFixed
        }
      }
      seo {
        title
        description
        image {
          url
        }
      }
    }
    allDatoCmsArticle(filter: { tag: { elemMatch: { id: { eq: $id } } } }) {
      nodes {
        id
        slug
        title
        image {
          fixed {
            ...GatsbyDatoCmsFixed
          }
        }
        tag {
          id
          slug
          title
        }
        author {
          name
          surname
          slug
          image {
            fixed {
              ...GatsbyDatoCmsFixed
            }
          }
        }
        meta {
          firstPublishedAt
        }
      }
    }
  }
`

// Export new component
export default TagPageComponent
