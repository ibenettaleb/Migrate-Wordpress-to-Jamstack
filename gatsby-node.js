exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allWpPage {
        nodes {
          id
          uri
        }
      }
      allWpPost {
        nodes {
          id
          uri
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const pages = result.data.allWpPage.nodes
  pages.forEach(page => {
    createPage({
      path: page.uri,
      component: require.resolve(`./src/templates/page-template.js`),
      context: {
        id: page.id,
      },
    })
  })

  const posts = result.data.allWpPost.nodes
  posts.forEach(post => {
    createPage({
      path: `/blog${post.uri}`,
      component: require.resolve(`./src/templates/post-template.js`),
      context: {
        id: post.id,
      },
    })
  })
}
