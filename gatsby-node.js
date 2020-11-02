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

  queryResults.data.allDatoCmsBlogCategory.nodes.forEach((content, index) => {
    createPage({
      path: `/${content.slug}`,
      component: require.resolve(`./src/templates/blog-list.js`),
      context: { content, index },
    })
  })
  queryResults.data.allDatoCmsBlog.nodes.forEach((content, index) => {
    createPage({
      path: `/artykul/${content.slug}`,
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

  queryResults.data.allDatoCmsTag.nodes.forEach((content, index) => {
    createPage({
      path: `tag/${content.slug}`,
      component: require.resolve(`./src/templates/tag-info.js`),
      context: { content, index },
    })
  })
  queryResults.data.allDatoCmsTag.nodes.forEach((content, index) => {
    createPage({
      path: `tag/${content.slug}/blog`,
      component: require.resolve(`./src/templates/tag-list-blog.js`),
      context: { content, index },
    })
  })
}
