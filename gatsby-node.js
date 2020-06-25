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
          category {
            id
          }
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
          category {
            id
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
      allDatoCmsService {
        nodes {
          id
          slug
          title
          category {
            id
          }
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

  const sortCategoryArticlea = (allCategory, allArticle) => {
    const ArrayListSortArticle = []
    allCategory.forEach(item => {
      ArrayListSortArticle.push([])
    })
    allCategory.forEach((category, indexCaregory) => {
      allArticle.forEach((article, indexArticle) => {
        let articleSwitch
        article.category.forEach(item => {
          if (item.id === category.id) {
            articleSwitch = true
          } else {
            return null
          }
        })
        if (articleSwitch) {
          ArrayListSortArticle[indexCaregory].push(article)
        }
      })
    })
    return ArrayListSortArticle
  }

  // BUILD LIST SERVICE ALL
  queryResults.data.allDatoCmsServicesCategory.nodes.forEach((item, index) => {
    const category = item
    const posts = queryResults.data.allDatoCmsService.nodes
    const postsPerPage = 3
    const numPages = Math.ceil(posts.length / postsPerPage)

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/uslugi/` : `/uslugi/${i + 1}`,
        component: require.resolve(`./src/templates/service-list-all.js`),
        context: {
          index,
          content: category,
          currentPage: i + 1,
          limit: postsPerPage,
          category: category.id,
          skip: i * postsPerPage,
        },
      })
    })
  })

  // BUILD LIST SERVICE IN CATEGORY
  sortCategoryArticlea(
    queryResults.data.allDatoCmsServicesCategory.nodes,
    queryResults.data.allDatoCmsService.nodes
  ).forEach((item, index) => {
    const category = queryResults.data.allDatoCmsServicesCategory.nodes[index]
    const posts = item
    const postsPerPage = 3
    const numPages = Math.ceil(posts.length / postsPerPage)

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/uslugi/${category.slug}` : `/uslugi/${category.slug}/${i + 1}`,
        component: require.resolve(`./src/templates/service-list-category.js`),
        context: {
          index,
          content: category,
          currentPage: i + 1,
          limit: postsPerPage,
          category: category.id,
          skip: i * postsPerPage,
        },
      })
    })
  })

  queryResults.data.allDatoCmsService.nodes.forEach((content, index) => {
    createPage({
      path: `uslugi/${content.slug}`,
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
