// IMPORT PLUGIN
import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

// IMPORT COMPONENT
import Row from "../components/atoms/row/row"
import Section from "../components/organisms/section/section"

// CREATE NEW COMPONENT

const IndexPage = () => {
  return (
    <StaticQuery
      query={graphql`
        query Home {
          allDatoCmsHome {
            nodes {
              sectionHeroHome {
                id
                title
                image {
                  fixed {
                    ...GatsbyDatoCmsFixed
                  }
                }
                button {
                  id
                  name
                  slug
                }
              }
            }
          }
          allDatoCmsReview {
            nodes {
              avatar {
                fixed {
                  ...GatsbyDatoCmsFixed
                }
                title
                alt
              }
              id
              name
              opinion
              rating
              source
            }
          }
          allDatoCmsService {
            nodes {
              id
              slug
              title
              excerpt
              fromPrice
              averageLeadTime
              mainImage {
                alt
                title
                fixed {
                  ...GatsbyDatoCmsFixed
                }
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <>
            <Section
              sectionHeroHome
              content={data.allDatoCmsHome.nodes[0].sectionHeroHome}
            />
            <Section reviews content={data.allDatoCmsReview.nodes} />
            <Section listService content={data.allDatoCmsService.nodes} />
            <Section
              listArticleCarusel
              title="Co słychać na Blogu...?"
              content={data.allDatoCmsReview.nodes}
            />
            <Section
              listArticleCarusel
              title="Nowe poradinki..."
              content={data.allDatoCmsReview.nodes}
            />
          </>
        )
      }}
    />
  )
}

export default IndexPage
