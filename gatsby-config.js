require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://www.uxu.pl`,
  },
  plugins: [
    { resolve: `gatsby-plugin-sitemap` },
    { resolve: `gatsby-plugin-sharp` },
    { resolve: `gatsby-plugin-next-seo` },
    { resolve: `gatsby-plugin-react-svg` },
    { resolve: `gatsby-transformer-sharp` },
    { resolve: `gatsby-plugin-react-helmet` },
    { resolve: `gatsby-plugin-styled-components` },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: process.env.API_DISQUS,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/icon/uxu.png`,
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        // You can find your read-only API token under the Settings > API tokens
        // section of your administrative area:
        apiToken: process.env.API_DATO_CMS,

        // If you are working on development/staging environment, you might want to
        // preview the latest version of records instead of the published one:
        previewMode: false,

        // Disable automatic reloading of content when some change occurs on DatoCMS:
        disableLiveReload: false,

        // Custom API base URL (most don't need this)
        // apiUrl: 'https://site-api.datocms.com',

        // Setup locale fallbacks
        // In this example, if some field value is missing in Italian, fall back to English
        localeFallbacks: {
          it: ["pl"],
        },
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.uxu.pl",
        sitemap: "https://www.uxu.pl/sitemap.xml",
        policy: [
          {
            userAgent: "*",
            allow: "/",
            disallow: [
              "https://www.uxu.pl/autor/",
              "https://www.uxu.pl/kontakt",
              "https://www.uxu.pl/autor/melon",
            ],
          },
        ],
      },
    },
  ],
}
