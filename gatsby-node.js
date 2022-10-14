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
}
