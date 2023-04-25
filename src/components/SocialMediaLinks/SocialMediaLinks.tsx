import { SocialIcon } from 'react-social-icons';

import { SocialMediaItems } from './SocialMediaLinks.utils';

export default function SocialMediaLinks() {
  return (
    <div className='absolute right-2 bottom-24 flex flex-col space-y-3 z-100'>
      {SocialMediaItems?.map((social) => (
        <SocialIcon
          key={social?.label}
          url={social?.extLink}
          target='_blank'
          label={`${social?.label} external link`}
          style={{ height: 32, width: 32 }}
        />
      ))}
    </div>
  );
}
