module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: process.env.WPGRAPHQL_URL || `http://headless.local/graphql`,
      },
    },
  ],
}
