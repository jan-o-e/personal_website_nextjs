import Card from '@/components/Card'
import siteMetadata from '@/data/siteMetadata'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Interests' })

export default function InterestsPage() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            My Interests
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            My interests are wide ranging and include quantum optics, computing and information, as well as the philosophy of science and physics.
            A showcase of some physics research can be found on my  <a href="/research" style={{ color: '#800080' }}>Research Page</a> and a detailed overview of publications can be found on <a className="text-gray-500 transition hover:text-primary-500" href={siteMetadata.googlescholar}> Google Scholar</a>. 
          </p> 
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          I am also interested in software development, particularly for applications in scientific research and the development of disruptive and novel technologies.
          </p>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
           I have partaken in a number of hackathons and some of my favorite projects are showcased on my <a href="/projects" style={{ color: '#800080' }}>Projects Page</a>.
          </p>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            If you are interested in collaborating on a project, or have ideas that you would like to share, please get in touch and I look forward to hearing from you.
            </p>
        </div>
      </div>
    </>
  )
}