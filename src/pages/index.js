import React from 'react'
import Link from 'gatsby-link'

export default ({ data }) => {
  console.log(data)
  return (
  <div>
    <h2>Posts:</h2>
    {data.allMarkdownRemark.edges.map(({node}) => (
      <div key={node.id}>
        <h3>{node.frontmatter.title}{" "}- {node.frontmatter.date}</h3>
        <p>{node.excerpt}</p>
      </div>
    ))}
  </div>
)}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  } 
`;