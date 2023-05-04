import { Category } from '@sanity-typings';
import { PortableTextBlock } from 'sanity';
import { PortableText } from '@portabletext/react';
import { GoLinkExternal } from 'react-icons/go';
import { ClientSideRoute } from '@components';

type Props = {
  title: string;
  body: PortableTextBlock[];
  createdAt: string;
  categories: Category[];
  route: string;
};

export default function BlogContent({
  body,
  title,
  createdAt,
  categories,
  route,
}: Props) {
  return (
    <>
      <div className='absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-3 flex justify-between items-center group-hover:translate-y-40 transition-transform duration-300 ease-out'>
        <div className='space-y-2'>
          <div className='flex flex-row justify-between items-center'>
            <h3 className='font-bold'>{title}</h3>

            <p className='text-sm'>
              {new Date(createdAt).toLocaleDateString('en-PH', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </p>
          </div>

          <div className='line-clamp-3 text-sm'>
            {body?.map((item, idx) => (
              <PortableText
                key={idx}
                value={item}
              />
            ))}
          </div>
        </div>
      </div>
      <div className='absolute top-2 right-2 flex flex-row gap-y-2 md:gap-x-2 '>
        {categories?.map((category) => (
          <p
            key={category?._id}
            className='bg-black bg-opacity-50 text-white px-2 py-1 rounded-full text-xs md:text-xs group-hover:translate-x-24 transition-all duration-300 ease-in'
          >
            <span>{category?.title}</span>
          </p>
        ))}
      </div>
      <div className='opacity-0 absolute w-full h-full bg-black/70 group-hover:opacity-100 grid rounded-lg overflow-hidden '>
        <div className='m-auto'>
          <ClientSideRoute route={route}>
            <button className='text-white border rounded-full py-2 px-4 flex flex-row items-center space-x-3 opacity-0 translate-y-56 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in'>
              <span>Read article</span>
              <GoLinkExternal />
            </button>
          </ClientSideRoute>
        </div>
      </div>
    </>
  );
}
