// Import plugin
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

// Import component
import Layout from "../layouts/index"
import Ads from "../components/molecules/ads/ads"
import Section from "../components/organisms/section/section"

// Create new component

const IndexPage = () => {
  const { datoCmsPage, allDatoCmsArticle } = useStaticQuery(
    graphql`
      query {
        datoCmsPage(title: { eq: "home" }) {
          id
          seo {
            title
            description
            image {
              url
            }
          }
        }
        allDatoCmsArticle {
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
  )

  return (
    <>
      <Layout
        content={{
          title: datoCmsPage.seo.title,
          description: datoCmsPage.seo.description,
          image: datoCmsPage.seo.image,
        }}
        parameters={{}}
      >
        <Ads type="classic" content={{ title: "z pamiętnika pato programisty..." }} />
        <Section type="listArticle" content={{ article: allDatoCmsArticle.nodes }} />
      </Layout>
    </>
  )
}

// EXPORT NEW COMPONENT
export default IndexPage
