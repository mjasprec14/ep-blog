import { getPosts } from '@sanity-utils';
import { Post } from '@sanity-typings';

import { BlogList, Featured } from '@components';

export default async function Home() {
  const posts: Post[] = await getPosts();

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
