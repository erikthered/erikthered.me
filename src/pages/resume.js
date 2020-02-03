import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

export default ({ data }) => {
  const resume = data.resumeJson
  console.log(resume)
  return (
    <div>
      <Helmet title="Erik Nelson's Resume" />
      <div class="container mx-auto print:text-xs">
        <section
          name="heading"
          className="flex flex-row items-center justify-between my-6 print:my-2"
        >
          <h1 className="border-none text-4xl font-bold">{resume.name}</h1>
          <h2 className="border-none text-2xl">{resume.info.label}</h2>
        </section>
        <section name="contact">
          <p>
            {resume.location.city}, {resume.location.region},{' '}
            {resume.location.country}
          </p>
          <p>
            Email: &nbsp;
            <a
              className="text-blue-400 hover:text-blue-200"
              href={`mailto:${resume.contact.email}`}
            >
              {resume.contact.email}
            </a>
          </p>
        </section>
        <section name="skills">
          <header className="my-4">
            <h3 className="font-bold">Skills</h3>
            {resume.skills.map(skill => (
              <p>
                <span className="font-bold">{skill.name}: </span>{' '}
                {skill.keywords.join(', ')}
              </p>
            ))}
          </header>
        </section>
        <section name="work-experience">
          <header className="my-4">
            <h3 className="font-bold">Work Experience</h3>
          </header>
          {resume.employment.history.map(job => (
            <article className="my-4">
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
                {job.highlights.map(highlight => (
                  <li className="my-1">{highlight}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>
        <section name="education"></section>
      </div>
    </div>
  )
}

export const query = graphql`
  {
    resumeJson {
      name
      info {
        label
        brief
      }
      contact {
        email
      }
      location {
        city
        region
        country
      }
      employment {
        summary
        history {
          employer
          position
          start
          end
          highlights
        }
      }
      skills {
        name
        keywords
      }
    }
  }
`
