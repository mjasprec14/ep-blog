import { getPosts, getPageInfo, getSocials, getTweets } from '@sanity-utils';
import { Post, PageInfo, Social, Tweet } from '@sanity-typings';

import { BlogList, Featured, Tweets } from '@components';

export default async function Home() {
  const posts: Post[] = await getPosts();
  const tweets: Tweet[] = await getTweets();
  const pageInfo: PageInfo = await getPageInfo();
  const socials: Social[] = await getSocials();

  return (
    <main className='min-h-screen'>
      {/* Landing page latest news big section */}
      <Featured posts={posts} />
      {/* recent articles grid */}
      <BlogList posts={posts} />

      {/* business agriculture / products */}

      <Tweets tweets={tweets} />
    </main>
  );
}
