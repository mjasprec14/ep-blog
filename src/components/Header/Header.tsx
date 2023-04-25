import Image from 'next/image';
import Link from 'next/link';
import { navitems } from './Header.utils';

export default function Header() {
  return (
    <header className='flex items-center font-bold p-4 space-y-2 mb-16 md:space-x-2 md:flex-row md:justify-between md:items-center md:px-10 md:py-5 shadow offset-y-2 blur-2'>
      <div>
        <Link
          href='/'
          className='flex items-center space-x-2'
        >
          <Image
            src='https://live.staticflickr.com/65535/52845552760_5e1b626a7d_m.jpg'
            alt='Emmanuel Piñol rounded photo'
            height={50}
            width={50}
            className='rounded-full'
          />
          <h1>Manny Piñol</h1>
        </Link>
      </div>
      <div className='flex items-center space-x-8'>
        {navitems?.map((nav, idx) => (
          <Link
            key={idx}
            href={nav?.route}
            className='hidden md:inline md:text-[12px] text-gray-500 tracking-[3px] uppercase font-semibold drop-shadow-md hover:animate-pulse transition'
          >
            {nav.name}
          </Link>
        ))}
      </div>
    </header>
  );
}
