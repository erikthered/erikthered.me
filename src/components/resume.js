import React from 'react'

export default ({ data }) => {
    const content = data.file.childMarkdownRemark
    return (<div dangerouslySetInnerHTML={{ __html: content.html }} />)
}

export const query = graphql`
  query ResumeQuery {
    file(name:{eq:"resume"}) {
      childMarkdownRemark {
        html
      }
    }
  }
`
