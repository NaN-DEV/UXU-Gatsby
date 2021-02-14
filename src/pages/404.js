// Import plugin
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

// Import component
import Layout from "../layouts/index"
import Section from "../components/organisms/section/section"

// Create new component
const NotFoundPage = () => (
  <Layout
    content={{
      title: "Ups... 404",
      description: "Coś poszło nie tak :(",
    }}
    parameters={{ theme: "secondary" }}
  >
    <Section type="section404" />
  </Layout>
)

export default NotFoundPage
