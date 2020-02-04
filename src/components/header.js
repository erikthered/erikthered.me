import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div className="bg-red-900 mb-4 px-2 text-white">
    <div>
      <h1 className="text-5xl">
        <Link to="/">{siteTitle}</Link>
      </h1>
    </div>
  </div>
)

export default Header
