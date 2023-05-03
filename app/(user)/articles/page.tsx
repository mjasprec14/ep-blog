import { getPosts } from '@sanity-utils';
import { Post } from '@sanity-typings';

import { ArticlesCard } from '@components';

export default async function Articles() {
  const posts: Post[] = await getPosts();

  // console.log(posts);
  return (
    <section className='min-h-screen w-full flex flex-col items-center justify-center py-16 space-y-8'>
      <h1 className='text-xl text-left uppercase font-semibold text-gray-500 tracking-[20px]'>
        Articles
      </h1>
      <div className='max-w-7xl h-screen'>
        <div className='grid md:grid-cols-3 gap-3'>
          {posts?.map((post) => (
            <ArticlesCard
              key={post?._id}
              post={post}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
