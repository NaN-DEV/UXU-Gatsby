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
    title: `Uzyskaj darmową wycenę naprawy`,
    description: `Nie masz zdrowia do formularzy ?`,
    button: [
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
          query addRepair {
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
              <Layout siteBar="repair" content={contentBoxAds}>
                ok
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
