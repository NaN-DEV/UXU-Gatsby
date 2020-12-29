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
    title: "BLOG PROGRAMISTY",
  }
  return (
    <>
      <StaticQuery
        query={graphql`
          query Home {
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
            allDatoCmsBlog {
              nodes {
                id
                title
                excerpt
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
            allDatoCmsBlogCategory {
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
              <Layout siteBar="home" content={contentBoxAds}>
                <Seo
                  title={`${data.datoCmsSite.globalSeo.fallbackSeo.title}`}
                  description={data.datoCmsSite.globalSeo.fallbackSeo.description}
                />
                {data.allDatoCmsBlog.nodes.map((content, i) => {
                  return <Article short blog key={i} content={content} />
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
export default IndexPage
