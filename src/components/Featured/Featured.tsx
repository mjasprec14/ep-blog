import { urlFor } from '@/src/sanity/sanity.utils';
import { Post } from '@sanity-typings';
import Image from 'next/image';
import BlogContent from '../BlogList/BlogContent';

type Props = {
  posts: Post[];
};

export default function Featured({ posts }: Props) {
  const featuredPosts = posts.filter((post) => post.isFeaturedPost);

  const [latestPost] = [...featuredPosts];

  return (
    <section id='featured-article'>
      <div className='max-w-7xl mx-auto mt-1 pb-4 px-2 xs:px-2 group cursor-pointer  md:px-10'>
        <h1 className='text-gray-500 text-xs text-center uppercase tracking-[12px] xs:text-left xs:tracking-[20px pt-8 pb-4'>
          Featured article
        </h1>
        <div className='relative w-full h-[60vh] drop-shadow-xl text-white overflow-hidden'>
          <Image
            src={urlFor(latestPost?.mainImage).url()}
            alt={`${latestPost.title} article photo `}
            fill
            className='object-cover object-bottom rounded-lg'
          />
          <BlogContent
            createdAt={latestPost?._createdAt}
            body={latestPost?.body}
            title={latestPost?.title}
            categories={latestPost?.categories}
            route={`/post/${latestPost.slug.current}`}
          />
        </div>
      </div>
    </section>
  );
}
