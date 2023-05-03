import { urlFor } from '@/src/sanity/sanity.utils';
import { Post } from '@sanity-typings';
import Image from 'next/image';
import { GoLinkExternal } from 'react-icons/go';

type Props = {
  post: Post;
};

export default function ArticlesCard({ post }: Props) {
  //   console.log(post);
  return (
    <div className='relative h-[15rem] w-[22rem] md:w-[25rem] shadow-xl rounded-lg cursor-pointer group overflow-hidden'>
      <Image
        src={urlFor(post?.mainImage).url()}
        alt={`${post?.title} - article photo`}
        fill
        className='object-cover object-center rounded-lg'
      />

      <div className='opacity-0 absolute flex text-white bg-black/50 h-full w-full group-hover:opacity-100 transition-opacity duration-300 ease-in'>
        <button className='m-auto border  rounded-full py-2 px-4 flex flex-row items-center space-x-3'>
          <span>Read article</span>
          <GoLinkExternal />
        </button>
      </div>

      <div className='absolute bottom-0 left-0 bg-black/40 w-full py-3 text-center group-hover:translate-y-[60px] transition-transform duration-300 ease-out'>
        <h2 className='text-xl font-semibold text-white'>{post.title}</h2>
      </div>
    </div>
  );
}
