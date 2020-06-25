// IMPORT PLUGIN
import React from "react"
import { graphql, Link } from "gatsby"

// IMPORT COMPONENT
import Layout from "../layouts/index"
import Seo from "../components/atoms/seo/seo"
import List from "../components/molecules/list/list"
import Article from "../components/molecules/article/article"
import Pagination from "../components/molecules/pagination/pagination"

// CREATE NEW COMPONENT

export default class ServiceCategory extends React.Component {
  render() {
    console.log(this.props)
    const contentBoxAds = {
      title: `Problem z ${
        (this.props.pageContext.content.name === "laptopy" && "laptopem") ||
        (this.props.pageContext.content.name === "pc" && "komputerem") ||
        (this.props.pageContext.content.name === "tablety" && "tabletem") ||
        (this.props.pageContext.content.name === "smartfony" && "smartfonem") ||
        (this.props.pageContext.content.name === "smartwatch" && "smartwatchem") ||
        (this.props.pageContext.content.name && this.props.pageContext.content.name)
      } ? Zajmiemy się nim !`,
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
        <Layout siteBar="serviceCategory" content={contentBoxAds}>
          <List
            services
            category
            active={this.props.pageContext.index}
            title="Usługi"
            items={this.props.data.allDatoCmsServicesCategory.nodes}
          />
          {this.props.data.allDatoCmsService.nodes.map((content, i) => (
            <>
              <Article short services key={i} content={content} />
            </>
          ))}
          <Seo
            title={`${this.props.pageContext.content.name} lista usług`}
            description={`${contentBoxAds.title} Znajdziesz tutaj pełną listę usług dla : ${this.props.pageContext.content.name}`}
            url={`https://uxu.pl/uslugi/lista/${this.props.pageContext.content.slug}`}
          />
          <Pagination
            currentPage={this.props.pageContext.currentPage}
            numPages={this.props.pageContext.numPages}
            slug={`/uslugi/${this.props.pageContext.content.slug}`}
          />
        </Layout>
      </>
    )
  }
}

export const blogListQuery = graphql`
  query ServiceCategoryCategory($skip: Int!, $limit: Int!, $category: String) {
    allDatoCmsService(
      limit: $limit
      skip: $skip
      filter: { category: { elemMatch: { id: { eq: $category } } } }
    ) {
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
    allDatoCmsServicesCategory {
      nodes {
        id
        name
        slug
      }
    }
  }
`
