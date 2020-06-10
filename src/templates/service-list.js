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
    title: `Problem z ${
      (props.pageContext.content.name === "laptopy" && "laptopem") ||
      (props.pageContext.content.name === "pc" && "komputerem") ||
      (props.pageContext.content.name === "tablety" && "tabletem") ||
      (props.pageContext.content.name === "smartfony" && "smartfonem") ||
      (props.pageContext.content.name === "smartwatch" && "smartwatchem") ||
      (props.pageContext.content.name && props.pageContext.content.name)
    } ? Zajmiemy się nim !`,
    button: [
      {
        id: "box-ads-home-repair",
        title: "Zgłoś online",
        slug: "oddaj-do-naprawy",
      },
      {
        id: "box-ads-home-telephone",
        tel: 888881441,
      },
    ],
  }

  return (
    <>
      <StaticQuery
        query={graphql`
          query ServiceCategory {
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
                repairStep {
                  ... on DatoCmsPktVideo {
                    id
                    title
                    video {
                      url
                      title
                      provider
                      providerUid
                      thumbnailUrl
                      width
                      height
                    }
                    description
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
          return (
            <>
              <Layout siteBar="serviceCategory" content={contentBoxAds}>
                <List
                  services
                  category
                  active={props.pageContext.index}
                  title="Usługi"
                  items={data.allDatoCmsServicesCategory.nodes}
                />
                {data.allDatoCmsService.nodes.map((content, i) => {
                  let displayPost = content.category.filter(item => {
                    return item.id === props.pageContext.content.id
                  })
                  if (displayPost.length > 0) {
                    return <Article short services key={i} content={content} />
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
export default ServiceCategory
