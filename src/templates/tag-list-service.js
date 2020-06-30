// IMPORT PLUGIN
import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

// IMPORT COMPONENT
import Layout from "../layouts/index"
import Seo from "../components/atoms/seo/seo"
import List from "../components/molecules/list/list"
import Article from "../components/molecules/article/article"

// CREATE NEW COMPONENT

const TagPage = props => {
  return (
    <>
      <StaticQuery
        query={graphql`
          query tagCategoryService {
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
            allDatoCmsService {
              nodes {
                id
                slug
                title
                excerpt
                repairCost
                repairAverageTime
                category {
                  id
                }
                mainImage {
                  alt
                  title
                  fixed {
                    ...GatsbyDatoCmsFixed
                  }
                }
                author {
                  id
                  nick
                  slug
                  firstName
                  lastName
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
            { name: "Blog", slug: `${displayMainTag[0].slug}/blog/` },
            { name: "Poradniki", slug: `${displayMainTag[0].slug}/poradniki/` },
            { name: "Uslugi", slug: `${displayMainTag[0].slug}/uslugi/` },
          ]
          const contentBox = {
            title: "Sprawdź inne tagi",
            tag: [...data.allDatoCmsTag.nodes],
            name: props.pageContext.content.name,
            slug: `/tag/${props.pageContext.content.slug}`,
          }
          return (
            <>
              <Layout siteBar="tag" boxTagservice boxTag content={contentBox}>
                <List
                  tag
                  category
                  active={3}
                  items={typePost}
                  title={props.pageContext.content.name}
                />
                {data.allDatoCmsService.nodes.map((content, i) => {
                  let displayPost = content.tag.filter(tag => {
                    return tag.id === props.pageContext.content.id
                  })
                  if (displayPost.length > 0) {
                    return <Article short services key={i} content={content} />
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
export default TagPage
