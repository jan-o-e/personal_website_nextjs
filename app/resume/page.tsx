import { Resume, allResumes } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import ResumeSimple from '@/layouts/ResumeSimple'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Curriculum Vitae' })

export default function Page() {
const fetch_resume = allResumes.reduce((latestResume, currentResume) => {
    // If latestResume is null (initial iteration) or the current resume has a newer date, update latestResume
    if (!latestResume || currentResume.date > latestResume.date) {
      return currentResume
    }
    // If the currentResume doesn't have a newer date, keep the latestResume
    return latestResume
  }, null) as Resume
  const mainContent = coreContent(fetch_resume)

  return (
    <>
      <ResumeSimple content={mainContent}>
        <MDXLayoutRenderer code={fetch_resume.body.code} />
      </ResumeSimple>
    </>
  )
}
