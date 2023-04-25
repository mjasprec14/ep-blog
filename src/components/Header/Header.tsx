import Image from 'next/image';
import Link from 'next/link';
import { Author } from '@sanity-typings';

type Props = {
  author: Author;
};

export default async function Header({ author }: Props) {
  console.log(author);
  return (
    <header className='w-full flex flex-col justify-between items-center space-x-2 font-bold px-10 py-5'>
      <div>
        <Link href='/'>
          <Image
            src={''}
            alt='Emmanuel Piñol rounded photo'
            height={50}
            width={50}
            className=''
          />
        </Link>
      </div>
      <div></div>
    </header>
  );
}
