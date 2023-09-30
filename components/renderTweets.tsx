import { genPageMetadata } from 'app/seo'
import React from 'react'
import { Tweet } from 'react-tweet'
import fetchTweets from '@/components/TwitterAPI'

export default async function Tweets() {
  //fetch tweets from API
  const tweets = await fetchTweets()

  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        {tweets.map((tweet) => (
          <div key={tweet} className="mb-4 h-custom-height overflow-y-auto">
            <Tweet id={tweet} />
          </div>
        ))}
      </div>
    </>
  )
}
