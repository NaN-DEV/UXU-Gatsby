// Import plugin
import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

// Import component
import Layout from "../layouts/index"
import Ads from "../components/molecules/ads/ads"
import Section from "../components/organisms/section/section"

// Create new component
const ArticlePageComponent = props => {
  const { datoCmsArticle, allDatoCmsArticle } = props.data

  return (
    <>
      <Layout
        content={{
          title: datoCmsArticle.seo.title,
          description: datoCmsArticle.seo.description,
          image: datoCmsArticle.seo.image.url,
        }}
        parameters={{}}
      >
        <Section
          type="article"
          content={{ ...datoCmsArticle, othersArticlesThisAuthor: allDatoCmsArticle.nodes }}
        />
      </Layout>
    </>
  )
}

// Query GraphQL
export const ArticlePageComponentQuery = graphql`
  query ArticlePageComponentQuery($id: String, $author: String) {
    datoCmsArticle(id: { eq: $id }) {
      id
      slug
      title
      author {
        id
        name
        slug
        surname
        portfolio
        desciption
        work
        city
        country
        birthday
        socialMedia {
          id
          url
          title
        }
        image {
          url
          fluid {
            ...GatsbyDatoCmsFluid
          }
        }
        skills {
          id
          slug
          title
        }
      }
      image {
        url
        fluid(imgixParams: { maxW: 1280 }) {
          ...GatsbyDatoCmsFluid
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
            fluid(imgixParams: { maxW: 1280 }) {
              ...GatsbyDatoCmsFluid
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
          language
        }
        ... on DatoCmsGallery {
          id
          gallery {
            fluid(imgixParams: { maxW: 1280 }) {
              ...GatsbyDatoCmsFluid
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
      seo {
        title
        description
        image {
          url
        }
      }
    }
    allDatoCmsArticle(filter: { author: { id: { eq: $author } } }) {
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
          id
          slug
          name
          surname
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
export default ArticlePageComponent
