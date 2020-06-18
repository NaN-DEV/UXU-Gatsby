// IMPORT PLUGIN
import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

// IMPORT COMPONENT
import Layout from "../layouts/index"
import Seo from "../components/atoms/seo/seo"
import List from "../components/molecules/list/list"
import Article from "../components/molecules/article/article"

// CREATE NEW COMPONENT

const AuthorPage = props => {
  const contentBoxAds = {
    title: `Blog technologiczny`,
  }

  return (
    <>
      <StaticQuery
        query={graphql`
          query AuthorPageTutorial {
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
            allDatoCmsTutorial {
              nodes {
                id
                title
                excerpt
                repairTime
                difficultyLevel
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
                  id
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
                <List author category active={1} title="Typ" items={typePost} />
                {data.allDatoCmsTutorial.nodes.map((content, i) => {
                  let displayPost = content.author.id === props.pageContext.content.id

                  if (displayPost) {
                    return <Article short tutorial key={i} content={content} />
                  }
                })}
                <Seo
                  title={`Potrzebujesz pomocy w naprawie ${displayMainAuthor[0].firstName} ${displayMainAuthor[0].lastName} pomoże Ci`}
                  description={`W UXU pracują pasjonaci dlatego też chętnie dzielimy się swoją wiedzą. Znajdziesz tutaj poradniki autorstwa ${displayMainAuthor[0].firstName} ${displayMainAuthor[0].lastName}`}
                  image={displayMainAuthor[0].avatar.url}
                  author={`${displayMainAuthor[0].firstName} ${displayMainAuthor[0].lastName}`}
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
export default AuthorPage
