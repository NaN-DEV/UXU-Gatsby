// Import plugin
import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

// Import component
import Layout from "../layouts/index"
import Ads from "../components/molecules/ads/ads"
import Section from "../components/organisms/section/section"

// Create new component
const ExpertPageComponent = props => {
  const {
    name,
    surname,
    desciption,
    socialMedia,
    image,
    portfolio,
    work,
    city,
    country,
    birthday,
  } = props.data.datoCmsExpert

  return (
    <>
      <Layout
        parameters={{}}
        content={{ title: `${name} ${surname} - ${work}`, desciption, image }}
      >
        <Ads
          type="adsExpertFull"
          content={{
            work,
            name,
            city,
            image,
            country,
            surname,
            birthday,
            portfolio,
            desciption,
            socialMedia,
          }}
        />
        <Section
          type="listOfExpertArticles"
          content={{
            article: props.data.allDatoCmsArticle.nodes,
            skills: props.data.datoCmsExpert.skills,
          }}
        />
      </Layout>
    </>
  )
}

// Query GraphQL
export const ExpertPageComponentQuery = graphql`
  query ExpertPageComponentQuery($id: String) {
    datoCmsExpert(id: { eq: $id }) {
      id
      name
      surname
      portfolio
      desciption
      work
      city
      country
      birthday
      socialMedia {
        id
        url
        title
      }
      image {
        url
        fixed {
          ...GatsbyDatoCmsFixed
        }
      }
      skills {
        id
        slug
        title
      }
      seo {
        title
        description
        image {
          url
        }
      }
    }
    allDatoCmsArticle(filter: { author: { id: { eq: $id } } }) {
      nodes {
        id
        slug
        title
        image {
          fixed {
            ...GatsbyDatoCmsFixed
          }
        }
        tag {
          id
          slug
          title
        }
        author {
          id
          slug
          name
          surname
          image {
            fixed {
              ...GatsbyDatoCmsFixed
            }
          }
        }
        meta {
          firstPublishedAt
        }
      }
    }
  }
`

// Export new component
export default ExpertPageComponent
