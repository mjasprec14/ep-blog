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
      <div className='max-w-7xl mx-auto pb-4 group cursor-pointer text-white md:px-10'>
        <div className='relative w-full h-[60vh] drop-shadow-xl group-hover:-translate-y-2 transition ease-in duration-150'>
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
