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
          query skillPage {
            allDatoCmsSkil {
              nodes {
                id
                slug
                name
              }
            }
            allDatoCmsAutor {
              nodes {
                id
                slug
                lastName
                firstName
                avatar {
                  fixed {
                    ...GatsbyDatoCmsFixed
                  }
                }
                skil {
                  id
                }
              }
            }
          }
        `}
        render={data => {
          const contentBox = { title: "Umiejętności", skill: [...data.allDatoCmsSkil.nodes] }
          return (
            <>
              <Layout siteBar="skill" content={contentBox}>
                {data.allDatoCmsAutor.nodes.map((content, i) => {
                  let displayPost = content.skil.filter(skill => {
                    return skill.id === props.pageContext.content.id
                  })

                  if (displayPost.length > 0) {
                    return <Article author key={i} content={content} />
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
