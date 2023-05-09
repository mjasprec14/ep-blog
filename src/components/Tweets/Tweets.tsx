import { urlFor } from '@/src/sanity/sanity.utils';
import { Tweet } from '@sanity-typings';
import Image from 'next/image';

type Props = {
  tweets: Tweet[];
};

export default function Tweets({ tweets }: Props) {
  return (
    <section
      id='tweets'
      className='py-16'
    >
      <h2 className='text-gray-500 text-xs text-center uppercase tracking-[12px] xs:text-left  xs:tracking-[20px] pb-4 drop-shadow-lg'>
        Message
      </h2>
      <div className='max-w-7xl mx-auto py-8 flex flex-row overflow-x-scroll space-x-5 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent'>
        {tweets?.map((tweet) => (
          <div
            key={tweet?._id}
            className='flex-1 break-inside-avoid rounded-lg border border-gray-300 bg-white/20 bg-clip-padding p-6 pb-4 backdrop-blur-lg backdrop-filter md:min-w-[360px] w-full h-fit space-y-4'
          >
            <div className='flex flex-row space-x-4'>
              <Image
                src={urlFor(tweet.author.image).url()}
                alt='Author Image'
                height={40}
                width={40}
                className='rounded-full object-contain'
              />

              <div>
                <p className='font-semibold'>{tweet.author.name}</p>
                <p className='text-xs text-gray-500'>
                  {new Date(tweet.publishedAt).toLocaleDateString('en-PH', {
                    day: 'numeric',
                    month: 'long',
                  })}
                </p>
              </div>
            </div>
            <p>{tweet?.tweetMessage}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
