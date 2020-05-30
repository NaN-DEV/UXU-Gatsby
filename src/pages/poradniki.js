// IMPORT PLUGIN
import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

// IMPORT COMPONENT
import Layout from "../layouts/index"
import List from "../components/molecules/list/list"
import Article from "../components/molecules/article/article"

// CREATE NEW COMPONENT

const ServiceCategory = props => {
  const contentBoxAds = {
    title: `Poradniki napraw`,
  }

  return (
    <>
      <StaticQuery
        query={graphql`
          query TutorialsPage {
            allDatoCmsTutorial {
              nodes {
                id
                slug
                title
                excerpt
                repairTime
                difficultyLevel
                mainImage {
                  fixed {
                    ...GatsbyDatoCmsFixed
                  }
                }
                tag {
                  name
                  id
                  slug
                }
                category {
                  id
                }
                author {
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
            allDatoCmsTutorialsCategory {
              nodes {
                name
                slug
                id
              }
            }
          }
        `}
        render={data => {
          return (
            <>
              <Layout siteBar="tutorialCategory" content={contentBoxAds}>
                {data.allDatoCmsTutorial.nodes.map((content, i) => {
                  return <Article short tutorial key={i} content={content} />
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
export default ServiceCategory
