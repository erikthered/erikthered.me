import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <div className="bg-red-900 mb-4 px-2 text-white">
    <div className="flex flex-row">
      <h1 className="text-5xl w-2/3">
        <Link to="/">{siteTitle}</Link>
      </h1>
      <div className="w-1/3 self-center text-right mr-4">
        <a href="/resume" target="_blank">
          Resume
        </a>
      </div>
    </div>
  </div>
)

export default Header
