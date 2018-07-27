/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {

    createPage({
      path: `/resume`,
      component: path.resolve(`./src/components/resume.js`)
    })

    graphql(`
        {
          allFile(filter:{relativeDirectory:{eq:"posts"}}) {
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
        result.data.allFile.edges.forEach(({ node: { childMarkdownRemark: node } }) => {
          createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/components/blog-post.js`),
            context: {
              slug: node.fields.slug
            },
          })
        })
        resolve()
      })
  })
}