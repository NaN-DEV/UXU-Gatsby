// IMPORT PLUGIN
import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

// IMPORT COMPONENT
import Layout from "../layouts/index"
import Seo from "../components/atoms/seo/seo"
import List from "../components/molecules/list/list"
import Article from "../components/molecules/article/article"

// CREATE NEW COMPONENT

const TagPageBlog = props => {
  return (
    <>
      <StaticQuery
        query={graphql`
          query tagCategoryBlog {
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

          return (
            <>
              <Layout siteBar="tag">
                <List
                  tag
                  category
                  active={1}
                  items={typePost}
                  title={props.pageContext.content.name}
                />

                {data.allDatoCmsBlog.nodes.map((content, i) => {
                  let displayPost = content.tag.filter(tag => {
                    return tag.id === props.pageContext.content.id
                  })
                  if (displayPost.length > 0) {
                    return <Article short blog key={i} content={content} />
                  }
                })}
                <Seo
                  description={displayMainTag[0].excerpt}
                  image={displayMainTag[0].mainImage.fixed}
                  url={`https://uxu.pl/tag/${displayMainTag[0].slug}/blog/`}
                  title={`Lista wpisów na blogu powiązanych z ${props.pageContext.content.name} ?`}
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
export default TagPageBlog
