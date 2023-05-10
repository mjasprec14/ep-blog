const event = {
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    {
      name: 'eventName',
      title: 'Event Name',
      type: 'string',
    },
    {
      name: 'eventOverview',
      title: 'Event Overview',
      type: 'string',
    },
    {
      name: 'eventDate',
      title: 'Event Date',
      type: 'datetime',
    },
    {
      name: 'eventEndDate',
      title: 'Event End Date',
      type: 'datetime',
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string',
    },
    {
      name: 'admission',
      title: 'Admission',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'eventName',
        maxLength: 96,
      },
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'upcomingEvent',
      title: 'Upcoming Event',
      type: 'boolean',
    },
  ],
};

export default event;
