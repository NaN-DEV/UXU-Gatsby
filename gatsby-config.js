require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `UXU`,
    description: `żyję z commitowania`,
    author: `@pawelNiedzwiecki`,
    siteUrl: `https://www.uxu.pl`,
  },
  plugins: [
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: process.env.API_DATO_CMS,
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TOKEN_ID,
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    `gatsby-plugin-react-svg`,
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: `src/assets/icon/uxu.png`,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/assets/",
      },
      __key: "images",
    },
  ],
}
