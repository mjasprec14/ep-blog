import { Event } from '@sanity-typings';
import { getEvents } from '@sanity-utils';
import { EventsCard } from '@components';

export default async function Events() {
  const events: Event[] = await getEvents();

  return (
    <section
      id='events'
      className='min-h-screen w-full flex flex-col items-center justify-center py-16 space-y-8'
    >
      <div className='max-w-7xl mx-auto group cursor-pointer mt-1 pb-4 px-2 xs:px-2 md:px-10'>
        <h1 className='text-gray-500 text-xs text-center uppercase tracking-[12px] xs:text-left xs:tracking-[20px pt-8 pb-4 drop-shadow-lg'>
          Upcoming event
        </h1>

        <div className='w-full grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3'>
          {events.map((event) => (
            <EventsCard
              key={event._id}
              event={event}
            />
          ))}
        </div>

        <h2 className='text-gray-500 text-xs text-center uppercase tracking-[12px] xs:text-left xs:tracking-[20px pt-8 pb-4 drop-shadow-lg'>
          Recent events
        </h2>

        <div className='w-full grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3'>
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
