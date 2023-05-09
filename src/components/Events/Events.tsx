import { EventsCard } from '@components';
import { Event } from '@sanity-typings';

type Props = {
  events: Event[];
};

export default function Events({ events }: Props) {
  return (
    <section
      id='events'
      className='py-16'
    >
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-gray-500 text-xs text-center uppercase tracking-[12px] xs:tracking-[20px pt-8 pb-4 drop-shadow-lg'>
          Upcoming event
        </h2>

        <div className='w-full grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 justify-center md:justify-start px-4 lg:px-0'>
          {events.map((event) => (
            <EventsCard
              key={event._id}
              event={event}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
