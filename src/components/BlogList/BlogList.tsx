import { Post } from '@sanity-typings';
import Image from 'next/image';
import { urlFor } from '@/src/sanity/sanity.utils';
import BlogContent from './BlogContent';
import { PortableText } from '@portabletext/react';

type Props = {
  posts: Post[];
};

export default function BlogList({ posts }: Props) {
  return (
    <section id='blog-list'>
      <div className='py-48 min-h-screen max-w-7xl mx-auto'>
        {posts?.map((post) => (
          <div
            key={post?._id}
            className='group cursor-pointer flex flex-col'
          >
            <div className='relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out z-20'>
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
            <div className='mt-5 flex-1'>
              <p>{post?.title}</p>

              {post?.body.map((item, idx) => (
                <PortableText
                  key={idx}
                  value={item}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
