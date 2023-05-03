import { urlFor } from '@/src/sanity/sanity.utils';
import { Post } from '@sanity-typings';
import Image from 'next/image';
import { GoLinkExternal } from 'react-icons/go';
import { ClientSideRoute } from '@components';

type Props = {
  post: Post;
};

export default function ArticlesCard({ post }: Props) {
  return (
    <div className='relative h-[15rem] w-[21rem] md:w-[22rem] lg:w-[25rem] shadow-xl rounded-lg group overflow-hidden'>
      <Image
        src={urlFor(post?.mainImage).url()}
        alt={`${post?.title} - article photo`}
        fill
        className='object-cover object-center rounded-lg'
      />

      <span className='absolute top-2 right-2 text-white p-1 rounded-full bg-slate-900/50 text-xs group-hover:translate-x-[80px] transition-transform duration-300 ease-out'>
        {post?.categories[0].title}
      </span>

      <div className='opacity-0 absolute flex text-white bg-black/50 h-full w-full group-hover:opacity-100 transition-opacity duration-300 ease-in'>
        <div className='m-auto '>
          <ClientSideRoute route={`/post/${post?.slug.current}`}>
            <button className='border rounded-full py-2 px-4 flex flex-row items-center space-x-3'>
              <span>Read article</span>
              <GoLinkExternal />
            </button>
          </ClientSideRoute>
        </div>
      </div>

      <div className='absolute bottom-0 left-0 bg-black/40 w-full py-3 text-center group-hover:translate-y-[60px] transition-transform duration-300 ease-out'>
        <h2 className='text-xl font-semibold text-white'>{post.title}</h2>
      </div>
    </div>
  );
}
