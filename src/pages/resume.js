import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Job from '../components/resume/job'
import SkillSet from '../components/resume/skillset'

export default ({ data }) => {
  const resume = data.resumeJson
  return (
    <div>
      <Helmet title="Erik Nelson's Resume" />
      <div class="mx-4 print:text-sm print:m-0">
        <div class="flex">
          <article class="w-1/2 mr-2 my-2 py-2 px-4">
            <h1 className="border-none text-4xl font-bold">{resume.name}</h1>
            <h2 className="border-none text-2xl">{resume.info.label}</h2>
            <section name="contact">
              <p>
                {resume.location.city}, {resume.location.region},{' '}
                {resume.location.country}
              </p>
              <p>
                Email: &nbsp;
                <a
                  className="text-blue-700 hover:text-blue-600"
                  href={`mailto:${resume.contact.email}`}
                >
                  {resume.contact.email}
                </a>
              </p>
            </section>
            <section name="social">
              <ul>
                {resume.social.map(persona => (
                  <li className="my-0">
                    {persona.network}:{' '}
                    <a
                      className="text-blue-700 hover:text-blue-600"
                      href={persona.url}
                    >
                      {persona.user}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
            <section name="education"></section>
          </article>
          <article class="w-1/2 ml-2 my-2 py-2 px-4 border-2 border-black">
            <section name="skills">
              <header>
                <h3 className="font-bold text-xl mb-2">Top Skills</h3>
                <ul>
                  {resume.skills.map(skill => (
                    <SkillSet skillset={skill} />
                  ))}
                </ul>
              </header>
            </section>
          </article>
        </div>
        <section name="work-experience">
          <header className="my-4">
            <h3 className="font-bold text-xl">Work Experience</h3>
          </header>
          {resume.employment.history.map(job => (
            <Job job={job} />
          ))}
        </section>
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
      social {
        network
        user
        url
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
