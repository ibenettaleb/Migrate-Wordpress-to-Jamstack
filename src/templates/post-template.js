import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

export const query = graphql`
  query ($id: String!) {
    wpPost(id: { eq: $id }) {
      title
      content
    }
  }
`

const PostTemplate = ({ data }) => {
  const post = data.wpPost
  return (
    <Layout>
      <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </Layout>
  )
}

export default PostTemplate
