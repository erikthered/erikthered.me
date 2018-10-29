import React from 'react'
import Layout from "../components/layout"
import Link from 'gatsby-link'

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div>
        <p>The site is still under construction, please pardon the mess!</p>
        <h2>Posts:</h2>
        {data.allFile.edges.map(({ node: { childMarkdownRemark: node } }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
              style={{ textDecoration: `none`, color: `inherit` }}
            >
              <h3>
                {node.frontmatter.title} - {node.frontmatter.date}
              </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query IndexQuery {
    allFile(filter: { relativeDirectory: { eq: "posts" } }) {
      totalCount
      edges {
        node {
          childMarkdownRemark {
            id
            frontmatter {
              title
              date(formatString: "DD MMMM, YYYY")
            }
            fields {
              slug
            }
            excerpt
          }
        }
      }
    }
  }
`
