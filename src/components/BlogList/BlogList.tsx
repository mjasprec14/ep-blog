import { Post } from '@sanity-typings';
import Image from 'next/image';
import { urlFor } from '@/src/sanity/sanity.utils';
import BlogContent from './BlogContent';

type Props = {
  posts: Post[];
};

export default function BlogList({ posts }: Props) {
  const allRecentPost = posts.filter((post) => !post?.isFeaturedPost);
  const recentPost = allRecentPost.slice(0, 3);

  return (
    <section
      id='blog-list'
      className='pb-16'
    >
      <div className='max-w-7xl mx-auto px-2 xs:px-10'>
        <h2 className='text-gray-500 text-xs text-center uppercase tracking-[12px] xs:text-left  xs:tracking-[20px] pb-4 drop-shadow-lg'>
          Recent articles
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3'>
          {recentPost?.map((post) => (
            <div
              key={post?._id}
              className='group cursor-pointer flex flex-col rounded-lg overflow-hidden'
            >
              <div className='relative w-full h-80 drop-shadow-xl'>
                <Image
                  className='object-cover object-center rounded-lg'
                  src={urlFor(post?.mainImage).url()}
                  alt={`Article image - ${post?.title}`}
                  fill
                />
                <BlogContent
                  createdAt={post?._createdAt}
                  body={post?.body}
                  title={post?.title}
                  categories={post?.categories}
                  route={`/post/${post.slug.current}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
