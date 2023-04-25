import { Category } from '@sanity-typings';
import { Block } from '@/src/sanity/typings/typings';
import { PortableTextBlock } from 'sanity';

type Props = {
  title: string;
  body: PortableTextBlock[];
  createdAt: string;
  categories: Category[];
};

export default function BlogContent({
  body,
  title,
  createdAt,
  categories,
}: Props) {
  return (
    <div className='absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between items-center'>
      <div>
        <p className='font-bold'>{title}</p>

        <p>
          {new Date(createdAt).toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </p>
      </div>

      <div className='flex flex-col gap-y-2 md:flex-row md:gap-x-2'>
        {categories?.map((category) => (
          <div
            key={category?._id}
            className='bg-white bg-opacity-20 text-black px-3 py-1 rounded-full text-xs md:text-sm font-semibold'
          >
            <p>{category?.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
