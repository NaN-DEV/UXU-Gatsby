// IMPORT PLUGIN
import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

// IMPORT COMPONENT
import Layout from "../layouts/index"
import List from "../components/molecules/list/list"
import Article from "../components/molecules/article/article"

// CREATE NEW COMPONENT

const ServiceArticle = props => {
  const share = {
    type: "service",
    slug: props.pageContext.content.slug,
  }
  return (
    <>
      <StaticQuery
        query={graphql`
          query ServiceArticle {
            allDatoCmsService {
              nodes {
                id
                slug
                title
                excerpt
                repairCost
                repairAverageTime
                meta {
                  firstPublishedAt(formatString: "DD MMM")
                }
                repairStep {
                  ... on DatoCmsPktVideo {
                    id
                    title
                    description
                    video {
                      url
                      title
                      provider
                      providerUid
                      thumbnailUrl
                      width
                      height
                    }
                  }
                  ... on DatoCmsPkt {
                    id
                    description
                    title
                    image {
                      alt
                      title
                      fixed {
                        ...GatsbyDatoCmsFixed
                      }
                    }
                  }
                }
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
              }
            }
            allDatoCmsServicesCategory {
              nodes {
                id
                name
                slug
              }
            }
          }
        `}
        render={data => {
          let displayArticle = data.allDatoCmsService.nodes.filter(article => {
            return article.id === props.pageContext.content.id
          })

          let info = {
            title: displayArticle[0].title,
            id: displayArticle[0].author.id,
            slug: displayArticle[0].author.slug,
            nick: displayArticle[0].author.nick,
            avatar: displayArticle[0].author.avatar,
            repairCost: displayArticle[0].repairCost,
            lastName: displayArticle[0].author.lastName,
            firstName: displayArticle[0].author.firstName,
            repairAverageTime: displayArticle[0].repairAverageTime,
          }

          return (
            <>
              <Layout siteBar="serviceArticle" share={share} infoService={info}>
                <Article full fullService content={displayArticle[0]} />
              </Layout>
            </>
          )
        }}
      />
    </>
  )
}

// EXPORT NEW COMPONENT
export default ServiceArticle
