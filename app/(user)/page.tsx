import { getPosts, getPageInfo, getSocials } from '@sanity-utils';
import { Post, PageInfo, Social } from '@sanity-typings';

import { BlogList, Featured, Footer } from '@components';

export default async function Home() {
  const posts: Post[] = await getPosts();
  const pageInfo: PageInfo = await getPageInfo();
  const socials: Social[] = await getSocials();

  return (
    <main className='min-h-screen'>
      {/* Landing page latest news big section */}
      <Featured posts={posts} />
      {/* recent articles grid */}
      <BlogList posts={posts} />

      {/* business agriculture / products */}
    </main>
  );
}
