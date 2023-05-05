import { urlFor } from '@/src/sanity/sanity.utils';
import { Event } from '@sanity-typings';
import Image from 'next/image';

type Props = {
  event: Event;
};

export default function EventsCard({ event }: Props) {
  return (
    <div className='h-[25rem] w-[22rem] shadow-2xl rounded-md overflow-hidden'>
      <div className='h-[60%] relative '>
        <Image
          src={urlFor(event.mainImage).url()}
          alt={`${event.eventName} photo`}
          fill
          className='object-cover object-center'
        />
      </div>

      <div className='grid grid-cols-3 items-center'>
        <div className='flex flex-col items-center p-3 text-gray-500 border-r border-gray-300'>
          <p className='text-lg'>
            {new Date(event.eventDate).toLocaleDateString('en-PH', {
              month: 'long',
            })}
          </p>
          <p className='text-2xl'>
            {new Date(event.eventDate).toLocaleDateString('en-PH', {
              day: 'numeric',
            })}
          </p>
        </div>

        <div className='text-xl col-span-2 font-semibold p-3 '>
          {event.eventName}
        </div>

        <div className='col-span-3 p-4 border-t border-gray-300'>
          <div className='grid grid-cols-3'>
            <div className='col-start-2 col-span-2 pl-3'>
              <span className='text-xs text-gray-500'>Address</span>
              <p className='text-xs'>{event?.address}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
