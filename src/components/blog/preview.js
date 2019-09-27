import React from 'react'
import Link from 'gatsby-link'

export default ({ node }) => {
  return (
    <div key={node.id} class="my-2 p-2">
      <Link to={node.fields.slug} class="hover:no-underline">
        <div class="flex py-2">
          <h3 class="flex-2 text-2xl">{node.frontmatter.title}</h3>
          <h4 class="flex-1 text-xs text-right self-center">
            {node.frontmatter.date}
          </h4>
        </div>
      </Link>
    </div>
  )
}
