import React from 'react'
import { Link } from 'gatsby'

const Preview = ({ node }) => {
  return (
    <div key={node.id} className="my-2 p-2">
      <Link to={"blog" + node.fields.slug} className="hover:no-underline">
        <div className="flex py-2">
          <h3 className="flex-2 text-2xl">{node.frontmatter.title}</h3>
          <h4 className="flex-1 text-xs text-right self-center">
            {node.frontmatter.date}
          </h4>
        </div>
      </Link>
    </div>
  )
}

export default Preview;