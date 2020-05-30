// IMPORT PLUGIN
import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

// IMPORT COMPONENT
import Layout from "../layouts/index"
import List from "../components/molecules/list/list"
import Article from "../components/molecules/article/article"

// CREATE NEW COMPONENT

const AuthorPage = props => {
  return (
    <>
      <StaticQuery
        query={graphql`
          query AuthorPageService {
            allDatoCmsAutor {
              nodes {
                id
                slug
                nick
                email
                lastName
                firstName
                desciption
                locationCity
                locationCountry
                telephoneNumber
                birthday(formatString: "YYYY")
                avatar {
                  alt
                  title
                  fixed {
                    ...GatsbyDatoCmsFixed
                  }
                }
                skil {
                  name
                  slug
                  id
                }
              }
            }

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
          }
        `}
        render={data => {
          let displayMainAuthor = data.allDatoCmsAutor.nodes.filter(author => {
            return author.id === props.pageContext.content.id
          })
          let typePost = [
            { name: "Blog", slug: `${displayMainAuthor[0].slug}` },
            { name: "Poradniki", slug: `${displayMainAuthor[0].slug}/poradniki/` },
            { name: "Uslugi", slug: `${displayMainAuthor[0].slug}/uslugi/` },
          ]
          return (
            <>
              <Layout siteBar="author" content={displayMainAuthor[0]}>
                <List author category active={2} title="Typ" items={typePost} />
                {data.allDatoCmsService.nodes.map((content, i) => {
                  let displayPost = content.author.id === props.pageContext.content.id

                  if (displayPost) {
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
export default AuthorPage
