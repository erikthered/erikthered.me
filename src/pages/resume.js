import { graphql } from 'gatsby'
import React from 'react'
import Job from '../components/resume/job'
import SkillSet from '../components/resume/skillset'
import { SEO } from '../components/seo'

const Resume = ({ data }) => {
  const resume = data.resumeJson
  return (
    <div>
      <div className="mx-4 print:m-0">
        <div className="flex">
          <article className="w-1/2 mr-2 my-2 py-2 px-4">
            <h1 className="border-none text-5xl font-bold">{resume.name}</h1>
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
            <div className="flex">
              <section name="social" className="w-1/2 my-2">
                <h4 className="font-semibold mb-1">Social</h4>
                <ul className="ml-1">
                  {resume.social.map((persona, idx) => (
                    <li key={idx} className="my-0">
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
              <section name="education" className="w-1/2 my-2">
                <h4 className="font-semibold mb-1">Education</h4>
                {resume.education.history.map((edu, idx) => (
                  <p key={idx} className="ml-1">
                    {edu.institution} <br />
                    <span className="font-light">{edu.title}</span>
                  </p>
                ))}
              </section>
            </div>
          </article>
          <article className="w-1/2 ml-2 my-2 py-2 px-4 border-2 border-black">
            <section name="skills">
              <header>
                <h3 className="font-bold text-xl mb-2">Top Skills</h3>
                <ul>
                  {resume.skills.map((skill, idx) => (
                    <SkillSet key={idx} skillset={skill} />
                  ))}
                </ul>
              </header>
            </section>
          </article>
        </div>
        <section name="work-experience">
          <header className="my-2">
            <h3 className="font-bold text-xl">Work Experience</h3>
          </header>
          {resume.employment.history.map((job, idx) => (
            <Job key={idx} job={job} />
          ))}
        </section>
      </div>
    </div>
  )
}

export default Resume;

export const Head = () => (
  <SEO title="Erik Nelson's Resume"/>
)

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
      education {
        history {
          institution
          title
        }
      }
    }
  }
`
