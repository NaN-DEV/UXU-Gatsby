// IMPORT PLUGIN
import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

// IMPORT COMPONENT
import Layout from "../layouts/index"
import Seo from "../components/atoms/seo/seo"
import List from "../components/molecules/list/list"
import Article from "../components/molecules/article/article"

// CREATE NEW COMPONENT

const BlogCategory = props => {
  const contentBoxAds = {
    title: `Blog technologiczny`,
  }

  return (
    <>
      <StaticQuery
        query={graphql`
          query BlogCategoryPage {
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
              <Layout siteBar="blogCategory" content={contentBoxAds}>
                <Seo
                  title="Blog technologiczny"
                  description="UXU to nie tylko serwis komputerowy ale też blog technologiczny, piszemy z pasją o nowinkach technologicznych jak komputery, laptopy, smartfony, tablety"
                />
                <List
                  services
                  category
                  mobile
                  active={props.pageContext.index}
                  title="Blog"
                  items={data.allDatoCmsBlogCategory.nodes}
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
export default BlogCategory
