// IMPORT PLUGIN
import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

// IMPORT COMPONENT
import Layout from "../layouts/index"
import List from "../components/molecules/list/list"
import Article from "../components/molecules/article/article"

// CREATE NEW COMPONENT

const TutorialArticle = props => {
  return (
    <>
      <StaticQuery
        query={graphql`
          query TutorialArticle {
            allDatoCmsTutorial {
              nodes {
                id
                slug
                title
                excerpt
                repairTime
                difficultyLevel
                meta {
                  firstPublishedAt(formatString: "DD MMM")
                }
                mainImage {
                  alt
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
                  ... on DatoCmsPkt {
                    id
                    title
                    description
                    image {
                      alt
                      title
                      fixed {
                        ...GatsbyDatoCmsFixed
                      }
                    }
                  }
                  ... on DatoCmsPktVideo {
                    id
                    title
                    description
                    video {
                      title
                      url
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
          let displayArticle = data.allDatoCmsTutorial.nodes.filter(article => {
            return article.id === props.pageContext.content.id
          })

          let info = {
            type: "tutorial",
            title: displayArticle[0].title,
            id: displayArticle[0].author.id,
            slug: displayArticle[0].author.slug,
            nick: displayArticle[0].author.nick,
            avatar: displayArticle[0].author.avatar,
            repairTime: displayArticle[0].repairTime,
            lastName: displayArticle[0].author.lastName,
            firstName: displayArticle[0].author.firstName,
            desciption: displayArticle[0].author.desciption,
            difficultyLevel: displayArticle[0].difficultyLevel,
          }

          return (
            <>
              <Layout siteBar="blogArticle" info={info}>
                <Article full fullTutorial content={displayArticle[0]} />
              </Layout>
            </>
          )
        }}
      />
    </>
  )
}

// EXPORT NEW COMPONENT
export default TutorialArticle
