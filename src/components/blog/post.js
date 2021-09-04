import React from 'react'
import Layout from '../layout'
import { graphql } from 'gatsby'

const Post = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div>
        <div className="my-2 py-2 flex">
          <h1 className="text-2xl w-3/4">{post.frontmatter.title}</h1>
          <h2 className="text-xs w-1/4 text-right self-end">
            {post.frontmatter.date}
          </h2>
        </div>
        <div
          className="markdown"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </Layout>
  )
}

export default Post;

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`
