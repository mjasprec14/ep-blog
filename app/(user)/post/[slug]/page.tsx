import { groq } from 'next-sanity';
import { Post } from '@sanity-typings';
import { sanityClient, urlFor } from '@/src/sanity/sanity.utils';
import Image from 'next/image';
import PortableText from 'react-portable-text';
import { RichTextComponents } from '@components';

type Props = {
  params: {
    slug: string;
  };
};

export default async function PostPage({ params: { slug } }: Props) {
  const query = groq`*[_type=='post' && slug.current == $slug][0]{
    ...,
    author->,
    categories[]->
  }`;

  const post: Post = await sanityClient.fetch(query, { slug });

  return (
    <section className='max-w-7xl mx-auto px-0 md:px-10 pb-28 space-y-6'>
      <div className='space-y-2 border border-[#F7AB0A] text-white'>
        <div className='relative min-h-56 flex flex-col md:flex-row justify-between'>
          <div className='absolute top-0 w-full h-full opacity-10 blur-sm p-10'>
            <Image
              src={urlFor(post?.mainImage).url()}
              alt={`${post?.title} photo`}
              fill
              className='object-cover object-center mx-auto'
            />
          </div>
          <article className='p-5 bg-[#F7AB0A] w-full'>
            <div className='flex flex-col md:flex-row justify-between gap-y-5'>
              <div>
                <h1 className='text-4xl font-extrabold'>{post?.title}</h1>

                <p>
                  {new Date(post._createdAt).toLocaleDateString('en-PH', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </p>
              </div>

              <div className='flex md:flex-col items-center space-x-2 md:items-end md:space-y-2'>
                <Image
                  className='rounded-full'
                  src={urlFor(post?.author.image).url()}
                  alt={`${post?.author.name} rounded photo`}
                  height={40}
                  width={40}
                />

                <div className='w-64 md:text-end'>
                  <h3 className='text-lg font-bold'>{post?.author.name}</h3>
                </div>
              </div>
            </div>

            <div>
              <h2 className='italic pt-10'>{post?.description}</h2>
              <div className='flex items-center justify-end mt-auto space-x-2'>
                {post.categories.map((category) => (
                  <p
                    className='bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold mt-4'
                    key={category._id}
                  >
                    {category?.title}
                  </p>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
      <article className='px-4'>
        <PortableText
          content={post?.body}
          serializers={RichTextComponents}
        />
      </article>
    </section>
  );
}
