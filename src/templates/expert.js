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
    slug,
    seo,
  } = props.data.datoCmsExpert

  return (
    <>
      <Layout
        content={{
          image: seo.image.url,
          desciption: seo.description,
          title: `${name} ${surname} - ${work}`,
        }}
        parameters={{}}
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
      slug
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
        fluid {
          ...GatsbyDatoCmsFluid
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
          fluid {
            ...GatsbyDatoCmsFluid
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
            fluid {
              ...GatsbyDatoCmsFluid
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
