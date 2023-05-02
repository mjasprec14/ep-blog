import { SocialIcon } from 'react-social-icons';

import { SocialMediaItems } from './SocialMediaLinks.utils';

export default function SocialMediaLinks() {
  return (
    <div className='fixed left-1/2 -translate-x-1/2 bottom-0 z-20 border-t border-r rounded-tl-3xl rounded-tr-3xl px-3 pt-2 pb-1 bg-white backdrop-blur-lg bg-opacity-10'>
      <div className='flex flex-row space-x-3 px-2'>
        {SocialMediaItems?.map((social) => (
          <SocialIcon
            key={social?.label}
            url={social?.extLink}
            target='_blank'
            label={`${social?.label} external link`}
            style={{ height: 30, width: 30 }}
          />
        ))}
      </div>
    </div>
  );
}
