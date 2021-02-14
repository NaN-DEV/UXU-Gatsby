// Import plugin
import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

// Import component
import Layout from "../layouts/index"
import Ads from "../components/molecules/ads/ads"
import Section from "../components/organisms/section/section"

// Create new component
const ArticlePageComponent = props => {
  const { datoCmsArticle } = props.data

  return (
    <>
      <Layout content={{ title: datoCmsArticle.title }} parameters={{}}>
        <Section type="article" content={{ ...datoCmsArticle }} />
      </Layout>
    </>
  )
}

// Query GraphQL
export const ArticlePageComponentQuery = graphql`
  query ArticlePageComponentQuery($id: String) {
    datoCmsArticle(id: { eq: $id }) {
      id
      slug
      title
      author {
        id
        slug
        name
        surname
        image {
          fixed {
            ...GatsbyDatoCmsFixed
          }
        }
      }
      image {
        url
        fixed(imgixParams: { maxW: 1280 }) {
          ...GatsbyDatoCmsFixed
        }
      }
      description {
        ... on DatoCmsText {
          id
          text
        }
        ... on DatoCmsImage {
          id
          image {
            fixed(imgixParams: { maxW: 1280 }) {
              ...GatsbyDatoCmsFixed
            }
          }
        }
        ... on DatoCmsVideo {
          id
          video {
            url
          }
        }
        ... on DatoCmsCode {
          id
          code
        }
        ... on DatoCmsGallery {
          id
          gallery {
            fixed(imgixParams: { maxW: 1280 }) {
              ...GatsbyDatoCmsFixed
            }
          }
        }
      }
      tag {
        id
        slug
        title
        color {
          id
          colorBackground {
            hex
          }
          colorTxt {
            hex
          }
        }
      }
      meta {
        firstPublishedAt
      }
    }
  }
`

// Export new component
export default ArticlePageComponent
