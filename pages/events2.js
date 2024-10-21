import { useEffect, useState } from 'react';
import { createClient } from 'contentful';
import Image from 'next/image';

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchUpcomingEvents = async () => {
      try {
        const response = await client.getEntries({ content_type: 'upcomingEvents' }); // Ensure this matches your Contentful content type
        const formattedEvents = response.items.map(event => ({
          title: event.fields.title,
          date: event.fields.date,
          description: event.fields.description,
          image: event.fields.image.fields.file.url, // Adjust this according to your image structure in Contentful
        }));
        setEvents(formattedEvents);
      } catch (error) {
        console.error('Error fetching events from Contentful:', error);
      }
    };

    fetchUpcomingEvents();
  }, []);

  return (
    <div className="p-8">
      <div className="relative">
        <Image src="/images/image.jpg" alt="Events Background" layout="fill" objectFit="cover" className="absolute inset-0 opacity-100" />
        <h1 className="relative text-4xl font-bold text-white text-center mb-8">Upcoming Events</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {events.map((event, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image src={`https:${event.image}`} alt={event.title} width={400} height={250} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{event.title}</h2>
              <p className="text-gray-500">{event.date}</p>
              <p className="mt-2 text-gray-700">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
