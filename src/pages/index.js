import React from 'react'
import Layout from '../components/layout'
import BlogPostPreview from '../components/blog/preview'
import { graphql } from 'gatsby'

export default ({ data }) => {
  return (
    <Layout>
      <div class="flex">
        <section class="w-3/4 mr-12">
          <h2 class="font-bold">Latest Blog Posts:</h2>
          {data.allFile.edges
            .map(({ node: { childMarkdownRemark: node } }) => node)
            .sort((a, b) => {
              if (a.frontmatter.date > b.frontmatter.date) {
                return -1
              }
              if (a.frontmatter.date < b.frontmatter.date) {
                return 1
              }
              return 0
            })
            .map(node => (
              <BlogPostPreview node={node} />
            ))}
        </section>
        <section class="w-1/4 mr-6">
          <header>
            <h2 class="font-bold">About Me:</h2>
          </header>
          <p>
            I'm a web developer based out of Cleveland, OH. I have 10 years of
            experience writing web APIs, using technologies including the JVM,
            Ruby, cloud and and container technologies.
          </p>
          <p>
            Most recently I've been working with serverless applications and
            SPAs using frameworks like React.
          </p>
        </section>
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
          }
        }
      }
    }
  }
`
