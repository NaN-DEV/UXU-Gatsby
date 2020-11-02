// IMPORT PLUGIN
import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

// IMPORT COMPONENT
import Layout from "../layouts/index"
import Seo from "../components/atoms/seo/seo"
import List from "../components/molecules/list/list"
import Article from "../components/molecules/article/article"
import { createGlobalStyle } from "styled-components"

// CREATE NEW COMPONENT

const BlogArticle = props => {
  const share = {
    type: "service",
    slug: props.pageContext.content.slug,
  }
  return (
    <>
      <StaticQuery
        query={graphql`
          query BlogArticle {
            allDatoCmsBlog {
              nodes {
                id
                title
                excerpt
                slug
                meta {
                  firstPublishedAt(formatString: "DD MMM")
                }
                mainImage {
                  alt
                  url
                  title
                  fixed {
                    ...GatsbyDatoCmsFixed
                  }
                }
                category {
                  id
                }
                author {
                  id
                  nick
                  slug
                  lastName
                  firstName
                  desciption
                  locationCity
                  locationCountry
                  birthday(formatString: "YYYY")
                  avatar {
                    alt
                    title
                    fixed {
                      ...GatsbyDatoCmsFixed
                    }
                  }
                }
                tag {
                  id
                  name
                  slug
                  color {
                    id
                    colorTxt {
                      red
                      green
                      blue
                      alpha
                      rgb
                      hex
                    }
                    colorBackground {
                      rgb
                      red
                      hex
                      green
                      blue
                      alpha
                    }
                  }
                }
                content {
                  ... on DatoCmsHeader {
                    id
                    header
                  }
                  ... on DatoCmsBlockQuote {
                    id
                    content
                  }
                  ... on DatoCmsTextContent {
                    id
                    textContent
                  }
                  ... on DatoCmsImage {
                    id
                    image {
                      alt
                      title
                      fixed {
                        ...GatsbyDatoCmsFixed
                      }
                    }
                  }
                  ... on DatoCmsVideo {
                    id
                    video {
                      url
                      title
                    }
                  }
                }
              }
            }
            allDatoCmsBlogCategory {
              nodes {
                id
                name
                slug
              }
            }
          }
        `}
        render={data => {
          let displayArticle = data.allDatoCmsBlog.nodes.filter(article => {
            return article.id === props.pageContext.content.id
          })

          return (
            <>
              <Layout siteBar="blogArticle">
                <Article full fullBlog content={displayArticle[0]} />
                <Seo
                  description={displayArticle[0].excerpt}
                  image={displayArticle[0].mainImage.url}
                  url={`https://uxu.pl/artykul/${displayArticle[0].slug}`}
                  title={displayArticle[0].title}
                />
              </Layout>
            </>
          )
        }}
      />
    </>
  )
}

// EXPORT NEW COMPONENT
export default BlogArticle
