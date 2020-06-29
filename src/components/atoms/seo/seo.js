import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql, Link } from "gatsby"

function SEO({ description, lang, meta, title, url, image, author, schema }) {
  return (
    <>
      <StaticQuery
        query={graphql`
          query SEO {
            datoCmsSite {
              globalSeo {
                fallbackSeo {
                  description
                  title
                  twitterCard
                  image {
                    url
                  }
                }
                siteName
                titleSuffix
                twitterAccount
                facebookPageUrl
              }
            }
          }
        `}
        render={data => {
          const metaDescription = description || data.datoCmsSite.globalSeo.fallbackSeo.description
          return (
            <>
              <Helmet
                htmlAttributes={{
                  lang,
                }}
                title={title ? title : data.datoCmsSite.globalSeo.titleSuffix}
                meta={[
                  {
                    name: `author`,
                    content: author,
                  },
                  {
                    name: `description`,
                    content: metaDescription,
                  },
                  {
                    property: `og:title`,
                    content: title,
                  },
                  {
                    property: `og:description`,
                    content: metaDescription,
                  },
                  {
                    property: `og:url`,
                    content: url,
                  },
                  {
                    property: `og:image`,
                    content: image ? image : data.datoCmsSite.globalSeo.fallbackSeo.image.url,
                  },
                  {
                    property: `og:type`,
                    content: `website`,
                  },
                ].concat(meta)}
                script={[
                  {
                    src: "https://www.googletagmanager.com/gtag/js?id=UA-168799110-2",
                    type: "text/javascript",
                  },
                  {
                    type: "text/javascript",
                    innerHTML:
                      "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'UA-168799110-2');",
                  },
                  {
                    type: "application/ld+json",
                    innerHTML: schema,
                  },
                ]}
              />
            </>
          )
        }}
      />
    </>
  )
}

SEO.defaultProps = {
  author: `NaN LLC`,
  url: `https://uxu.pl`,
  lang: `pl`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  author: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
