import { Social } from '@sanity-typings';
import { SocialIcon } from 'react-social-icons';

type Props = {
  socials: Social[];
};
export default function Footer({ socials }: Props) {
  return (
    <footer id='footer'>
      <div className='w-full bg-gray-800 h-[14rem] p-6 grid md:grid-cols-2 items-center justify-between'>
        <div className='flex flex-col space-y-6 items-center justify-center'>
          <div className='flex flex-row space-x-4 items-center'>
            {socials?.map((social) => (
              <SocialIcon
                key={social._id}
                url={social?.url}
                style={{ height: 36, width: 36 }}
                aria-label={social?.title}
                fgColor={'gray'}
                bgColor='transparent'
              />
            ))}
          </div>
          <p className='text-xs font-medium text-gray-500 uppercase tracking-[10px]'>
            Contact us
          </p>
        </div>

        <div></div>
      </div>
      <div className='w-full bg-gray-900 text-center px-4 py-2 border-t-2 border-t-orange-600'>
        <p className='text-xs text-gray-500 uppercase font-semibold tracking-[5px] dark:text-neutral-200'>
          {new Date().getFullYear()} &copy; All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
