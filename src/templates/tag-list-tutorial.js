// IMPORT PLUGIN
import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

// IMPORT COMPONENT
import Layout from "../layouts/index"
import List from "../components/molecules/list/list"
import Article from "../components/molecules/article/article"

// CREATE NEW COMPONENT

const TagPage = props => {
  return (
    <>
      <StaticQuery
        query={graphql`
          query tagCategoryTutorial {
            allDatoCmsTag {
              nodes {
                id
                name
                slug
              }
            }
            allDatoCmsTutorial {
              nodes {
                id
                title
                excerpt
                repairTime
                difficultyLevel
                mainImage {
                  fixed {
                    ...GatsbyDatoCmsFixed
                  }
                }
                slug
                tag {
                  name
                  id
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
            { name: "Blog", slug: `${displayMainTag[0].slug}` },
            { name: "Poradniki", slug: `${displayMainTag[0].slug}/poradniki/` },
            { name: "Uslugi", slug: `${displayMainTag[0].slug}/uslugi/` },
          ]
          const contentBox = { title: "Tagi", tag: [...data.allDatoCmsTag.nodes] }
          return (
            <>
              <Layout siteBar="tag" content={contentBox}>
                <List
                  tag
                  category
                  active={1}
                  items={typePost}
                  title={props.pageContext.content.name}
                />
                {data.allDatoCmsTutorial.nodes.map((content, i) => {
                  let displayPost = content.tag.filter(tag => {
                    return tag.id === props.pageContext.content.id
                  })
                  if (displayPost.length > 0) {
                    return <Article short tutorial key={i} content={content} />
                  }
                })}
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
