exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const queryResults = await graphql(`
    query gatsbyNode {
      allDatoCmsBlogCategory {
        nodes {
          name
          slug
          id
        }
      }
      allDatoCmsBlog {
        nodes {
          id
          slug
          title
        }
      }
      allDatoCmsTutorialsCategory {
        nodes {
          id
          slug
          name
        }
      }
      allDatoCmsTutorial {
        nodes {
          id
          slug
          title
        }
      }
      allDatoCmsServicesCategory {
        nodes {
          id
          name
          slug
        }
      }
      allDatoCmsService {
        nodes {
          id
          slug
          title
        }
      }
      allDatoCmsTag {
        nodes {
          name
          slug
          id
        }
      }
      allDatoCmsAutor {
        nodes {
          id
          slug
          lastName
          firstName
        }
      }
      allDatoCmsSkil {
        nodes {
          id
          slug
          name
        }
      }
    }
  `)
  queryResults.data.allDatoCmsServicesCategory.nodes.forEach((content, index) => {
    createPage({
      path: `uslugi/lista/${content.slug}`,
      component: require.resolve(`./src/templates/service-list.js`),
      context: { content, index },
    })
  })
  queryResults.data.allDatoCmsService.nodes.forEach((content, index) => {
    createPage({
      path: `uslugi/artykul/${content.slug}`,
      component: require.resolve(`./src/templates/service-article.js`),
      context: { content, index },
    })
  })
  queryResults.data.allDatoCmsTutorialsCategory.nodes.forEach((content, index) => {
    createPage({
      path: `poradniki/lista/${content.slug}`,
      component: require.resolve(`./src/templates/tutorial-list.js`),
      context: { content, index },
    })
  })
  queryResults.data.allDatoCmsTutorial.nodes.forEach((content, index) => {
    createPage({
      path: `poradniki/artykul/${content.slug}`,
      component: require.resolve(`./src/templates/tutorial-article.js`),
      context: { content, index },
    })
  })
  queryResults.data.allDatoCmsBlogCategory.nodes.forEach((content, index) => {
    createPage({
      path: `blog/lista/${content.slug}`,
      component: require.resolve(`./src/templates/blog-list.js`),
      context: { content, index },
    })
  })
  queryResults.data.allDatoCmsBlog.nodes.forEach((content, index) => {
    createPage({
      path: `blog/artykul/${content.slug}`,
      component: require.resolve(`./src/templates/blog-article.js`),
      context: { content, index },
    })
  })
  queryResults.data.allDatoCmsAutor.nodes.forEach((content, index) => {
    createPage({
      path: `autor/${content.slug}`,
      component: require.resolve(`./src/templates/author-list-blog.js`),
      context: { content, index },
    })
  })
  queryResults.data.allDatoCmsAutor.nodes.forEach((content, index) => {
    createPage({
      path: `autor/${content.slug}/uslugi/`,
      component: require.resolve(`./src/templates/author-list-service.js`),
      context: { content, index },
    })
  })
  queryResults.data.allDatoCmsAutor.nodes.forEach((content, index) => {
    createPage({
      path: `autor/${content.slug}/poradniki/`,
      component: require.resolve(`./src/templates/author-list-tutorial.js`),
      context: { content, index },
    })
  })
  queryResults.data.allDatoCmsTag.nodes.forEach((content, index) => {
    createPage({
      path: `tag/${content.slug}`,
      component: require.resolve(`./src/templates/tag-list-blog.js`),
      context: { content, index },
    })
  })
  queryResults.data.allDatoCmsTag.nodes.forEach((content, index) => {
    createPage({
      path: `tag/${content.slug}/uslugi`,
      component: require.resolve(`./src/templates/tag-list-service.js`),
      context: { content, index },
    })
  })
  queryResults.data.allDatoCmsTag.nodes.forEach((content, index) => {
    createPage({
      path: `tag/${content.slug}/poradniki`,
      component: require.resolve(`./src/templates/tag-list-tutorial.js`),
      context: { content, index },
    })
  })
  queryResults.data.allDatoCmsSkil.nodes.forEach((content, index) => {
    createPage({
      path: `umiejetnosci/${content.slug}`,
      component: require.resolve(`./src/templates/skill-list-author.js`),
      context: { content, index },
    })
  })
}
