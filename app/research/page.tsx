import researchData from '@/data/researchData'
import Card from '@/components/Card'
import siteMetadata from '@/data/siteMetadata'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Research' })

export default function ResearchProjects() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Research
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            A showcase of some physics research, more details can be found on <a className="text-gray-500 transition hover:text-primary-500" href={siteMetadata.googlescholar}> Google Scholar</a>
          </p> 
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {researchData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}