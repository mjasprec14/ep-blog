import { Category } from '@sanity-typings';
import { PortableTextBlock } from 'sanity';
import { PortableText } from '@portabletext/react';
import { TbExternalLink } from 'react-icons/tb';
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
      <div className='absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-3 flex justify-between items-center'>
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

          <div className='line-clamp-2 text-sm'>
            {body?.map((item, idx) => (
              <PortableText
                key={idx}
                value={item}
              />
            ))}
          </div>

          <div className='flex flex-row gap-y-2 md:flex-row md:gap-x-2'>
            {categories?.map((category) => (
              <p
                key={category?._id}
                className='bg-blue-500 bg-opacity-40 text-white px-2 py-1 rounded-full text-xs md:text-xs font-semibold'
              >
                <span>{category?.title}</span>
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className='absolute bottom-3 right-3'>
        <ClientSideRoute route={route}>
          <p className='hidden text-xs uppercase text-white font-semibold items-center group-hover:flex '>
            Read Article
            <TbExternalLink
              className='ml-2'
              size={18}
            />
          </p>
        </ClientSideRoute>
      </div>
    </>
  );
}
