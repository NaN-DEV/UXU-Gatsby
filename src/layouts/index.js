// import plugin
import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

// import style
import GlobalStyle from "./style/globalStyle"

// import settings style
import settings from "./settings/settings"

// import component
import Row from "../components/atoms/row/row"
import Header from "../components/organisms/header/header"
import Footer from "../components/organisms/footer/footer"

// create new component
const Root = props => {
  const { content, parameters, children } = props

  const { datoCmsSite } = useStaticQuery(
    graphql`
      query {
        datoCmsSite {
          id
          domain
          globalSeo {
            siteName
            titleSuffix
            twitterAccount
            facebookPageUrl
            fallbackSeo {
              title
              description
              twitterCard
              image {
                url
              }
            }
          }
        }
      }
    `
  )

  const title = content.title ? content.title : datoCmsSite.globalSeo.siteName
  const image = content.image ? content.image : datoCmsSite.globalSeo.fallbackSeo.image.url
  const url = content.slug ? `https://www.uxu.pl/${content.slug}` : `https://www.uxu.pl/`
  const description = content.description
    ? content.description
    : datoCmsSite.globalSeo.fallbackSeo.description

  return (
    <>
      <Helmet htmlAttributes={{ lang: "pl" }}>
        {/* General tags */}
        <title>
          {title} {datoCmsSite.globalSeo.titleSuffix}
        </title>
        <meta name="description" content={description} />
        <meta name="image" content={image} />
        <link rel="canonical" href={url} />

        {/* OpenGraph tags */}
        <meta name="og:url" content={url} />
        <meta name="og:image" content={image} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} />

        {/* Twitter Card tags */}
        <meta name="twitter:title" content={title} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:creator" content={datoCmsSite.globalSeo.twitterAccount} />

        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Roboto+Mono:wght@700&display=swap"
          rel="stylesheet"
          defer
        />
      </Helmet>

      <GlobalStyle theme={{ theme: parameters.theme, settings: settings }} />
      <Header />
      {children}
      <Footer />
    </>
  )
}

// PropTpyes
Root.propTypes = {
  children: PropTypes.node.isRequired,
  parameters: PropTypes.shape({
    theme: PropTypes.string,
  }),
  content: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
  }),
}

// PropTpyes default
Root.defaultProps = {
  id: null,
  key: null,
  parameters: PropTypes.shape({
    theme: false,
  }),
  content: PropTypes.shape({ title: false, description: false, image: null }),
}

// export new component
export default Root
