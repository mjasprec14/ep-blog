import { getPosts } from '@sanity-utils';
import { urlFor } from '@/src/sanity/sanity.utils';

import Image from 'next/image';

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className='min-h-screen'>
      <h1>{posts[0]?.title}</h1>
      <Image
        src={urlFor(posts[0]?.mainImage).url()}
        alt={``}
        height={400}
        width={400}
      />

      {/* Landing page latest news big section */}

      {/* recent articles grid */}

      {/* business agriculture / products */}
    </main>
  );
}
