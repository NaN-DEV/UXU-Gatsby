// IMPORT PLUGIN
import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

// IMPORT COMPONENT
import Layout from "../layouts/index"
import List from "../components/molecules/list/list"
import Article from "../components/molecules/article/article"

// CREATE NEW COMPONENT

const BlogArticle = props => {
  const share = {
    type: "service",
    slug: props.pageContext.content.slug,
  }
  return (
    <>
      <StaticQuery
        query={graphql`
          query BlogArticle {
            allDatoCmsBlog {
              nodes {
                id
                title
                excerpt
                slug
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
          let displayArticle = data.allDatoCmsBlog.nodes.filter(article => {
            return article.id === props.pageContext.content.id
          })

          let info = {
            type: "blog",
            title: displayArticle[0].title,
            id: displayArticle[0].author.id,
            slug: displayArticle[0].author.slug,
            nick: displayArticle[0].author.nick,
            avatar: displayArticle[0].author.avatar,
            lastName: displayArticle[0].author.lastName,
            birthday: displayArticle[0].author.birthday,
            firstName: displayArticle[0].author.firstName,
            desciption: displayArticle[0].author.desciption,
            locationCity: displayArticle[0].author.locationCity,
            locationCountry: displayArticle[0].author.locationCountry,
          }

          return (
            <>
              <Layout siteBar="blogArticle" info={info}>
                <Article full fullBlog content={displayArticle[0]} />
              </Layout>
            </>
          )
        }}
      />
    </>
  )
}

// EXPORT NEW COMPONENT
export default BlogArticle
