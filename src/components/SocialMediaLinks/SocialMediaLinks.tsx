import { SocialIcon } from 'react-social-icons';

import { SocialMediaItems } from './SocialMediaLinks.utils';

export default function SocialMediaLinks() {
  return (
    <div className='fixed right-[5px] top-[40%] z-100'>
      <div className='flex flex-col space-y-3 px-2'>
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
