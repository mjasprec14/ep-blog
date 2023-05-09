import {
  getPosts,
  getPageInfo,
  getSocials,
  getTweets,
  getEvents,
} from '@sanity-utils';
import { Post, PageInfo, Social, Tweet, Event } from '@sanity-typings';

import { BlogList, Featured, Tweets, Events } from '@components';

export default async function Home() {
  const posts: Post[] = await getPosts();
  const tweets: Tweet[] = await getTweets();
  const events: Event[] = await getEvents();
  const pageInfo: PageInfo = await getPageInfo();
  const socials: Social[] = await getSocials();

  return (
    <main className='min-h-screen'>
      <Featured posts={posts} />

      <BlogList posts={posts} />

      {/* business agriculture / products */}

      <Tweets tweets={tweets} />

      <Events events={events} />
    </main>
  );
}
