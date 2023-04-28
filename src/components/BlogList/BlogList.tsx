import { Post } from '@sanity-typings';
import Image from 'next/image';
import { urlFor } from '@/src/sanity/sanity.utils';
import BlogContent from './BlogContent';
import { PortableText } from '@portabletext/react';
import { TbExternalLink } from 'react-icons/tb';
import { ClientSideRoute } from '@components';

type Props = {
  posts: Post[];
};

export default function BlogList({ posts }: Props) {
  const recentPost = posts.filter((post) => !post?.isFeaturedPost);

  return (
    <section id='blog-list'>
      <div className='min-h-screen max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 px-10 gap-10 gap-y-16 pb-24'>
        {recentPost?.map((post) => (
          <div
            key={post?._id}
            className='group cursor-pointer flex flex-col'
          >
            <div className='relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out'>
              <Image
                className='object-cover object-left lg:object-center'
                src={urlFor(post?.mainImage).url()}
                alt={`Article image - ${post?.title}`}
                fill
              />
              <BlogContent
                createdAt={post?._createdAt}
                body={post?.body}
                title={post?.title}
                categories={post?.categories}
              />
            </div>
            <div className='mt-3 flex-1 space-y-3 relative'>
              <p className='underline text-lg font-bold'>{post?.title}</p>
              <div className='line-clamp-2 text-gray-500 text-sm'>
                {post?.body.map((item, idx) => (
                  <PortableText
                    key={idx}
                    value={item}
                  />
                ))}
              </div>

              <ClientSideRoute route={`/post/${post.slug.current}`}>
                <p className='absolute right-0 md:top-[14%] text-sm mt-3 font-semibold flex items-center group-hover:underline'>
                  Read Full Article
                  <TbExternalLink className='ml-2' />
                </p>
              </ClientSideRoute>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
