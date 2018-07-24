import React from 'react'
import Link from 'gatsby-link'

export default ({ data }) => {
  console.log(data)
  return (
    <div>
      <h2>Posts:</h2>
      {data.allFile.edges.map(({ node: {childMarkdownRemark : node} }) => (
        <div key={node.id}>
          <Link
            to={node.fields.slug}
            css={{ textDecoration: `none`, color: `inherit` }}
          >
            <h3>{node.frontmatter.title}{" "}- {node.frontmatter.date}</h3>
            <p>{node.excerpt}</p>
          </Link>
        </div>
      ))}
    </div>
  )
}

export const query = graphql`
  query IndexQuery {
    allFile(filter:{relativeDirectory:{eq:"posts"}}) {
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
`;