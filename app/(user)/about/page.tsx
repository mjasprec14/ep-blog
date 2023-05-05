import { getPageInfo } from '@sanity-utils';
import { PageInfo } from '@sanity-typings';
import Image from 'next/image';
import { urlFor } from '@/src/sanity/sanity.utils';

export default async function About() {
  const pageInfo: PageInfo = await getPageInfo();

  return (
    <section className='min-h-screen w-full flex flex-col items-center justify-center'>
      <article className='max-w-7xl mx-auto py-16 md:py-0 md:px-10'>
        <div className='min-h-[35rem] grid md:grid-cols-3 gap-8 md:gap-10'>
          <div className='flex items-center justify-center'>
            <Image
              src={urlFor(pageInfo?.heroImage).url()}
              alt={`${pageInfo.name} about photo`}
              height={380}
              width={380}
              className='object-contain object-center rounded-full shadow-xl'
            />
          </div>
          <div className='flex items-center pb-36 md:pb-0 px-4 md:col-span-2'>
            <div className='space-y-6'>
              <h1 className='text-lg md:text-2xl text-gray-500 tracking-[10px]'>
                {pageInfo.name}
              </h1>
              <p className='w-full text-sm tracking-wide'>
                {pageInfo.backgroundInformation}
              </p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
