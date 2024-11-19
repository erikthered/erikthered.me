import { graphql } from 'gatsby'
import React from 'react'
import { SEO } from '../../components/seo'
import Layout from '../../components/layout'

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

export const query = graphql`
  query BlogPostQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`

export const Head = ({ data }) => (
  <SEO title={data.markdownRemark.frontmatter.title}/>
)

export default Post;
