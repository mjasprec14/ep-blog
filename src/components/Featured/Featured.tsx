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
  console.log(latestPost);
  return (
    <section id='featured-article'>
      <div className='max-w-7xl mt-5 mx-auto pb-4 md:px-10  text-white'>
        <div className='h-[60vh] drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out'>
          <Image
            src={urlFor(latestPost?.mainImage).url()}
            alt={`${latestPost.title} article photo `}
            fill
            className='object-contain object-center'
          />
          <BlogContent
            createdAt={latestPost?._createdAt}
            body={latestPost?.body}
            title={latestPost?.title}
            categories={latestPost?.categories}
          />
        </div>
      </div>
    </section>
  );
}
