// IMPORT PLUGIN
import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

// IMPORT COMPONENT
import Layout from "../layouts/index"
import Seo from "../components/atoms/seo/seo"
import List from "../components/molecules/list/list"
import Article from "../components/molecules/article/article"

// CREATE NEW COMPONENT

const TagPageInfo = props => {
  return (
    <>
      <StaticQuery
        query={graphql`
          query tagInfo {
            allDatoCmsTag {
              nodes {
                id
                name
                slug
                mainImage {
                  fixed {
                    ...GatsbyDatoCmsFixed
                  }
                }
                excerpt
                content {
                  ... on DatoCmsHeader {
                    id
                    header
                  }
                  ... on DatoCmsImage {
                    id
                    image {
                      fixed {
                        ...GatsbyDatoCmsFixed
                      }
                      alt
                      title
                    }
                  }
                  ... on DatoCmsTextContent {
                    id
                    textContent
                  }
                  ... on DatoCmsVideo {
                    id
                    video {
                      url
                    }
                  }
                  ... on DatoCmsBlockQuote {
                    id
                    content
                  }
                }
              }
            }
            allDatoCmsBlog {
              nodes {
                id
                slug
                title
                excerpt
                mainImage {
                  fixed {
                    ...GatsbyDatoCmsFixed
                  }
                }
                tag {
                  id
                  name
                  slug
                }
                category {
                  id
                }
                author {
                  id
                  firstName
                  lastName
                  nick
                  slug
                  avatar {
                    fixed {
                      ...GatsbyDatoCmsFixed
                    }
                  }
                }
                meta {
                  firstPublishedAt(formatString: "MMM DD")
                }
              }
            }
          }
        `}
        render={data => {
          let displayMainTag = data.allDatoCmsTag.nodes.filter(tag => {
            return tag.id === props.pageContext.content.id
          })

          let typePost = [
            { name: "Co to jest ?", slug: `${displayMainTag[0].slug}` },
            { name: "Lista artykułów", slug: `${displayMainTag[0].slug}/blog/` },
          ]
          console.log(displayMainTag[0].mainImage.fixed)
          return (
            <>
              <Layout siteBar="tag">
                <Article
                  full
                  fullTag
                  listType={typePost}
                  content={displayMainTag[0]}
                  listTypeName={props.pageContext.content.name}
                />
                <Seo
                  title={`Co to jest ${props.pageContext.content.name} ?`}
                  description={displayMainTag[0].excerpt}
                  image={displayMainTag[0].mainImage.fixed}
                  url={`https://uxu.pl/tag/${displayMainTag[0].slug}`}
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
export default TagPageInfo
