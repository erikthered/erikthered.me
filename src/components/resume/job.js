import React from 'react'

export default ({ job }) => {
  return (
    <article className={'p-2 ' + (job.end ? '' : 'bg-gray-400')}>
      <header>
        <div className="flex flex-row items-center my-2">
          <h4 className="font-bold mr-8">{job.employer}</h4>
          <h5 className="italic">{job.position}</h5>
        </div>
        <div className="flex flex-row items-center mb-2">
          <h6>
            {job.start} - {job.end || 'Present'}
          </h6>
        </div>
      </header>
      <ul className="list-disc ml-6">
        {job.highlights.map((highlight, idx) => (
          <li key={idx} className="my-0">
            {highlight}
          </li>
        ))}
      </ul>
    </article>
  )
}
