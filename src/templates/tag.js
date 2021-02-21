// Import plugin
import React from "react"
import { graphql } from "gatsby"

// Import component
import Layout from "../layouts/index"
import Ads from "../components/molecules/ads/ads"
import Section from "../components/organisms/section/section"

// Create new component
const TagPageComponent = props => {
  const { datoCmsTag } = props.data
  console.log(datoCmsTag)
  return (
    <>
      <Layout
        content={{
          title: datoCmsTag.seo.title,
          image: datoCmsTag.seo.image.url,
          description: datoCmsTag.seo.description,
        }}
        parameters={{}}
      >
        <Ads type="tag" content={{ ...datoCmsTag }} />
        <Section
          type="listArticleWithTag"
          content={{ article: props.data.allDatoCmsArticle.nodes }}
        />
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
        fluid {
          ...GatsbyDatoCmsFluid
        }
      }
      color {
        colorBackground {
          hex
        }
        colorTxt {
          hex
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
          fluid {
            ...GatsbyDatoCmsFluid
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
            fluid {
              ...GatsbyDatoCmsFluid
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
