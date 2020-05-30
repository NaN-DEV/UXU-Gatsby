// IMPORT PLUGIN
import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

// IMPORT COMPONENT
import Layout from "../layouts/index"
import List from "../components/molecules/list/list"
import Article from "../components/molecules/article/article"

// CREATE NEW COMPONENT

const TutorialsCategory = props => {
  const contentBoxAds = {
    title: `Poradniki napraw ${
      (props.pageContext.content.name === "laptopy" && "laptopów") ||
      (props.pageContext.content.name === "pc" && "komputerów") ||
      (props.pageContext.content.name === "tablety" && "tabletów") ||
      (props.pageContext.content.name === "smartfony" && "smartfonów") ||
      (props.pageContext.content.name === "smartwatch" && "smartwatchów") ||
      (props.pageContext.content.name && props.pageContext.content.name)
    }`,
  }
  console.log()
  return (
    <>
      <StaticQuery
        query={graphql`
          query TutorialCategory {
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
                <List
                  services
                  category
                  mobile
                  active={props.pageContext.index}
                  title="Blog"
                  items={data.allDatoCmsTutorialsCategory.nodes}
                />
                {data.allDatoCmsTutorial.nodes.map((content, i) => {
                  let displayPost = content.category.filter(item => {
                    return item.id === props.pageContext.content.id
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
export default TutorialsCategory
