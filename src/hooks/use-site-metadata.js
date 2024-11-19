import { useStaticQuery, graphql } from 'gatsby'

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          title
          siteUrl
          description
          keywords
        }
      }
    }
  `)
  return site.siteMetadata
}
