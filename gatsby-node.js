/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allFile(filter: { relativeDirectory: { eq: "posts" } }) {
          edges {
            node {
              childMarkdownRemark {
                fields {
                  slug
                }
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allFile.edges.forEach(
        ({ node: { childMarkdownRemark: node } }) => {
          createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/components/blog/post.js`),
            context: {
              slug: node.fields.slug,
            },
          })
        }
      )
      resolve()
    })
  })
}
