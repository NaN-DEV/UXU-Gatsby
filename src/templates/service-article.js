// IMPORT PLUGIN
import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

// IMPORT COMPONENT
import Layout from "../layouts/index"
import Seo from "../components/atoms/seo/seo"
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

                category {
                  id
                }

                mainImage {
                  alt
                  url
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
            url: displayArticle[0].slug,
            title: displayArticle[0].title,
            excerpt: displayArticle[0].excerpt,
            id: displayArticle[0].author.id,
            slug: displayArticle[0].author.slug,
            nick: displayArticle[0].author.nick,
            mainImage: displayArticle[0].mainImage,
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
                <Seo
                  title={info.title}
                  description={info.excerpt}
                  image={info.mainImage.url}
                  author={`${info.firstName} ${info.lastName}`}
                  url={`https://uxu.pl/uslugi/artykul/${info.url}`}
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
export default ServiceArticle
