import { SocialIcon } from 'react-social-icons';

import { SocialMediaItems } from './SocialMediaLinks.utils';

export default function SocialMediaLinks() {
  return (
    <div className='fixed right-0 top-1/2 transform -translate-y-1/2 z-20 border-t border-r rounded-tl-3xl rounded-bl-3xl pl-2 py-3 bg-black/20 backdrop-blur-lg'>
      <div className='flex flex-col space-y-3 px-1'>
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
