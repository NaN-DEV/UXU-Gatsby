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
    title: `Problem z komputerem ? Zajmiemy się nim !`,
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
          query ServiceAll {
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
                  active={0}
                  title="Usługi"
                  items={data.allDatoCmsServicesCategory.nodes}
                />
                {data.allDatoCmsService.nodes.map((content, i) => {
                  return <Article short key={i} content={content} />
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
