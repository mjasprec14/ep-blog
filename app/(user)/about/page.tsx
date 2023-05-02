import { getPageInfo } from '@sanity-utils';
import { PageInfo } from '@sanity-typings';
import Image from 'next/image';
import { urlFor } from '@/src/sanity/sanity.utils';

export default async function About() {
  const pageInfo: PageInfo = await getPageInfo();

  console.log(pageInfo);
  return (
    <section className='w-full min-h-screen border border-red-500 text-red-500'>
      <h1>ABOUT PAGE</h1>
      <article>
        <div className='w-1/2'>
          {pageInfo.name}
          {pageInfo.backgroundInformation}
        </div>
      </article>
    </section>
  );
}
