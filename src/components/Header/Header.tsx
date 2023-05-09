'use client';
import Image from 'next/image';
import Link from 'next/link';
import { navitems } from './Header.utils';
import { useTheme } from 'next-themes';
import { FiMoon, FiSun } from 'react-icons/fi';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <header className='relative flex items-center font-bold p-4 space-y-2 md:space-x-2 md:flex-row justify-between md:items-center md:px-10 md:py-4 shadow offset-y-2 blur-2  dark:border-b dark:border-gray-500'>
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
          <h1 className='hidden md:inline-block text-xl'>Manny Piñol</h1>
        </Link>
      </div>

      <div className='flex flex-col items-end space-x-2 text-gray-500 dark:text-neutral-300'>
        <div className='flex justify-end md:justify-center md:items-center space-x-8'>
          {navitems?.map((nav, idx) => (
            <Link
              key={idx}
              href={nav?.route}
              className='hidden md:inline md:text-[12px] tracking-[3px] uppercase font-semibold drop-shadow-sm '
            >
              {nav.name}
            </Link>
          ))}
          {currentTheme === 'dark' ? (
            <button
              onClick={() => setTheme('light')}
              className='animate-bounce hidden md:inline'
            >
              <FiMoon size={20} />
            </button>
          ) : (
            <button
              onClick={() => setTheme('dark')}
              className='animate-bounce hidden md:inline'
            >
              <FiSun size={20} />
            </button>
          )}
        </div>
        <div className='text-center md:text-right'>
          <p className='text-[10px] md:mt-2'>
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

      <div className='md:hidden'>
        <button
          onClick={() => setShowMenu(true)}
          className='text-gray-500'
        >
          <AiOutlineMenu size={20} />
        </button>
      </div>

      {showMenu ? (
        <motion.div
          initial={{ x: 600, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          className='fixed z-50 -top-2 left-0 bg-white shadow-2xl h-screen w-full text-gray-500 dark:bg-zinc-900'
        >
          <div className='flex justify-end items-center p-6'>
            <button onClick={() => setShowMenu((prev) => !prev)}>
              <AiOutlineClose size={25} />
            </button>
          </div>

          <div className='flex flex-col items-center space-y-16 py-36'>
            {navitems?.map((nav, idx) => (
              <Link
                key={idx}
                href={nav?.route}
                className='text-[12px] tracking-[3px] uppercase font-semibold drop-shadow-sm'
                onClick={() => setShowMenu((prev) => !prev)}
              >
                {nav.name}
              </Link>
            ))}
            {currentTheme === 'dark' ? (
              <button
                onClick={() => setTheme('light')}
                className='animate-bounce'
              >
                <FiMoon size={20} />
              </button>
            ) : (
              <button
                onClick={() => setTheme('dark')}
                className='animate-bounce'
              >
                <FiSun size={20} />
              </button>
            )}
          </div>
        </motion.div>
      ) : null}
    </header>
  );
}
