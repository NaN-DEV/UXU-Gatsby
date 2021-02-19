exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const queryResults = await graphql(`
    query gatsbyNode {
      allDatoCmsTag {
        nodes {
          slug
          id
        }
      }
      allDatoCmsExpert {
        nodes {
          id
          slug
        }
      }
      allDatoCmsArticle {
        nodes {
          id
          slug
          author {
            id
          }
        }
      }
    }
  `)

  queryResults.data.allDatoCmsTag.nodes.forEach((content, index) => {
    createPage({
      path: `t/${content.slug}`,
      component: require.resolve(`./src/templates/tag.js`),
      context: { id: content.id, content, index },
    })
  })

  queryResults.data.allDatoCmsExpert.nodes.forEach((content, index) => {
    createPage({
      path: `e/${content.slug}`,
      component: require.resolve(`./src/templates/expert.js`),
      context: { id: content.id, content, index },
    })
  })

  queryResults.data.allDatoCmsArticle.nodes.forEach((content, index) => {
    createPage({
      path: `a/${content.slug}`,
      component: require.resolve(`./src/templates/article.js`),
      context: { id: content.id, author: content.author.id, content, index },
    })
  })
}
