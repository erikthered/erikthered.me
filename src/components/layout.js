import React from 'react'

import { useSiteMetadata } from '../hooks/use-site-metadata'
import Header from './header'

export default function Layout({ children, location }) {
  const { title } = useSiteMetadata()

  return (
    <div className="container mx-auto">
      <Header siteTitle={title} />
      <div>{children}</div>
    </div>
  )
}
