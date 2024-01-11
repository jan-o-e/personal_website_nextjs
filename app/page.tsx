import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import Main from './Main'
import AboutPage from './about/page'
import Tweets from '../components/renderTweets'

export default async function Page() {
  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <Main posts={posts} />
        <Tweets />
        <AboutPage />
      </div>
    </>
  )
}
