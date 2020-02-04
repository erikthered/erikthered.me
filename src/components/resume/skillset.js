import React from 'react'

export default ({ skillset }) => {
  return (
    <React.Fragment>
      <li className="text-sm italic">{skillset.name}:</li>
      <ul className="flex flex-row text-xs">
        {skillset.keywords.map(skill => (
          <li className="rounded bg-gray-400 px-2 mx-2">{skill}</li>
        ))}
      </ul>
    </React.Fragment>
  )
}
