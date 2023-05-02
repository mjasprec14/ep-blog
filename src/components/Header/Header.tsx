'use client';
import Image from 'next/image';
import Link from 'next/link';
import { navitems } from './Header.utils';
import { useTheme } from 'next-themes';
import { FiMoon, FiSun } from 'react-icons/fi';

export default function Header() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  console.log(currentTheme);
  return (
    <header className='flex items-center font-bold p-4 space-y-2 md:space-x-2 md:flex-row md:justify-between md:items-center md:px-10 md:py-4 shadow offset-y-2 blur-2  dark:border-b dark:border-neutral-300'>
      <div>
        <Link
          href='/'
          className='flex items-center space-x-3'
        >
          <Image
            src='https://live.staticflickr.com/65535/52845552760_5e1b626a7d_m.jpg'
            alt='Emmanuel Piñol rounded photo'
            height={50}
            width={50}
            className='rounded-full'
          />
          <h1 className='text-xl'>Manny Piñol</h1>
        </Link>
      </div>

      <div>
        <div className='flex items-center space-x-8'>
          {navitems?.map((nav, idx) => (
            <Link
              key={idx}
              href={nav?.route}
              className='hidden md:inline md:text-[12px] text-gray-500 dark:text-neutral-300 tracking-[3px] uppercase font-semibold drop-shadow-md hover:animate-pulse transition'
            >
              {nav.name}
            </Link>
          ))}
          {currentTheme === 'dark' ? (
            <button onClick={() => setTheme('light')}>
              <FiMoon size={20} />
            </button>
          ) : (
            <button onClick={() => setTheme('dark')}>
              <FiSun size={20} />
            </button>
          )}
        </div>
        <div className='text-right'>
          <p className='text-[10px] mt-2'>
            {`${new Date().toLocaleDateString('en-PH', {
              weekday: 'long',
            })}, ${new Date().toLocaleDateString('en-PH', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}`}
          </p>
        </div>
      </div>
    </header>
  );
}
