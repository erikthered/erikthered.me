import React from 'react'

export default ({ skillset }) => {
  return (
    <li className="text-sm italic font-semibold">
      {skillset.name}:
      <ul className="flex flex-row text-sm not-italic font-normal mx-0">
        {skillset.keywords.map((skill, idx) => (
          <li
            key={idx}
            className="rounded bg-gray-400 px-2 mx-2 my-0 print:px-0 text-sm"
          >
            {skill}
          </li>
        ))}
      </ul>
    </li>
  )
}
