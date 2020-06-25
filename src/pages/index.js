// IMPORT PLUGIN
import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

// IMPORT COMPONENT
import Layout from "../layouts/index"
import Seo from "../components/atoms/seo/seo"
import List from "../components/molecules/list/list"
import Article from "../components/molecules/article/article"
import Pagination from "../components/molecules/pagination/pagination"

// CREATE NEW COMPONENT

const IndexPage = () => {
  const contentBoxAds = {
    title: "Problem z komputerem ? Zajmiemy się nim!",
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
          query Home {
            allDatoCmsService {
              nodes {
                id
                slug
                title
                excerpt
                repairCost
                repairAverageTime
                mainImage {
                  alt
                  title
                  fixed {
                    ...GatsbyDatoCmsFixed
                  }
                }
                category {
                  id
                  name
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
            datoCmsSite {
              globalSeo {
                fallbackSeo {
                  description
                  title
                  twitterCard
                }
                siteName
                titleSuffix
                twitterAccount
                facebookPageUrl
              }
            }
          }
        `}
        render={data => {
          const numPages = Math.ceil(data.allDatoCmsService.nodes.length / 3)
          return (
            <>
              <Layout siteBar="home" content={contentBoxAds}>
                <Seo
                  title={`${data.datoCmsSite.globalSeo.fallbackSeo.title}`}
                  description={data.datoCmsSite.globalSeo.fallbackSeo.description}
                />
                <List
                  services
                  category
                  active={0}
                  title="Usługi"
                  items={data.allDatoCmsServicesCategory.nodes}
                />
                {data.allDatoCmsService.nodes.map((content, i) => {
                  if (i < 3) {
                    return <Article short services key={i} content={content} />
                  }
                })}
                <Pagination currentPage={1} numPages={numPages} slug="/uslugi" />
              </Layout>
            </>
          )
        }}
      />
    </>
  )
}

// EXPORT NEW COMPONENT
export default IndexPage
