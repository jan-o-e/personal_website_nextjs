import { TwitterApi } from 'twitter-api-v2'

// Instantiate with desired auth type (here's Bearer v2 auth)
const twitterClient = new TwitterApi(JSON.stringify(process.env.BEARER_TOKEN))
// Tell typescript it's a readonly app
const readOnlyClient = twitterClient.readOnly

export default async function fetchTweets() {
  try {
    const myTimeline = await readOnlyClient.v2.homeTimeline({
    // expansions: ['attachments.media_keys', 'attachments.poll_ids', 'referenced_tweets.id'],
    // 'media.fields': ['url'],
    })

    // myTimeline.includes contains a TwitterV2IncludesHelper instance
    // Initialize an empty array to store tweet IDs
    const tweet_ids: string[] = []
    for await (const tweet of myTimeline) {
      console.log(tweet.id)
      tweet_ids.push(tweet.id)
    }
    return tweet_ids
  } catch (e) {
    console.log(e)
    const tweets: string[] = [
      '1716866018075947369',
      '1716803589581283341',
      //'1718945865539170682',
      //'1702617257908556284',
    ]
    return tweets
  }
}
