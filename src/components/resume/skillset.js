import React from 'react'

export default ({ skillset }) => {
  return (
    <li className="text-sm italic font-semibold">
      {skillset.name}:
      <ul className="flex flex-row text-sm">
        {skillset.keywords.map(skill => (
          <li className="rounded bg-gray-400 px-2 mx-2 print:px-0">{skill}</li>
        ))}
      </ul>
    </li>
  )
}
