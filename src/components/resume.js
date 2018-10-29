import React from 'react'
import Layout from './layout'

export default ({ data }) => {
  const content = data.file.childMarkdownRemark
  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: content.html }} />
    </Layout>
  )
}

export const query = graphql`
  query ResumeQuery {
    file(name: { eq: "resume" }) {
      childMarkdownRemark {
        html
      }
    }
  }
`
