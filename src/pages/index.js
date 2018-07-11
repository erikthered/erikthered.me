import React from 'react'
import Link from 'gatsby-link'

export default ({ data }) => {
  console.log(data)
  return (
    <div>
      <h2>Posts:</h2>
      {data.allFile.edges.map(({ node }) => (
        <div key={node.childMarkdownRemark.id}>
          <Link
            to={node.childMarkdownRemark.fields.slug}
            css={{ textDecoration: `none`, color: `inherit` }}
          >
            <h3>{node.childMarkdownRemark.frontmatter.title}{" "}- {node.childMarkdownRemark.frontmatter.date}</h3>
            <p>{node.childMarkdownRemark.excerpt}</p>
          </Link>
        </div>
      ))}
    </div>
  )
}

export const query = graphql`
  query IndexQuery {
    allFile(filter:{relativeDirectory:{eq:"posts"}, extension:{eq:"md"}}) {
      totalCount
      edges {
        node {
          childMarkdownRemark{
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