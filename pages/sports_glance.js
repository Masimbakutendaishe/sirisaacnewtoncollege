import Image from 'next/image';
import { createClient } from 'contentful';
import { useEffect, useState } from 'react';

// Initialize Contentful Client
const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

const SportsAtAGlancePage = () => {
  const [sportsPerson, setSportsPerson] = useState(null);
  const [events, setEvents] = useState([]);
  const [highlights, setHighlights] = useState([]);

  useEffect(() => {
    // Fetch the Sports Person of the Month
    const fetchSportsPerson = async () => {
      const response = await client.getEntries({
        content_type: 'sportsPerson', // Ensure 'sportsPerson' matches your Content Model ID
        limit: 1,
      });
      setSportsPerson(response.items[0].fields);
    };

    // Fetch Upcoming Sports Events
    const fetchEvents = async () => {
      const response = await client.getEntries({
        content_type: 'sportsEvent', // Ensure 'sportsEvent' matches your Content Model ID
        order: 'fields.date', // Order events by date
      });
      setEvents(response.items.map((item) => item.fields));
    };

    // Fetch Sports Highlights
    const fetchHighlights = async () => {
      const response = await client.getEntries({
        content_type: 'sportsHighlight', // Ensure 'sportsHighlight' matches your Content Model ID
      });
      setHighlights(response.items.map((item) => item.fields));
    };

    fetchSportsPerson();
    fetchEvents();
    fetchHighlights();
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Background Image for the Heading */}
      <div className="relative h-48 w-full bg-cover bg-center" style={{ backgroundImage: "url('/images/image.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative text-left text-white text-5xl font-bold z-10 py-16 px-8">SPORTS AT A GLANCE</h1>
      </div>

      {/* Content Section */}
      <div className="p-8">
        {/* Commitment to Costs Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Commitment to Sporting Excellence</h2>
          <p className="text-gray-700 mb-4">
            Our school is dedicated to providing high-quality sports programs while keeping costs manageable for families. We believe in promoting physical education and making sports accessible to all students.
          </p>
        </section>

        {/* Sports Person of the Month Section */}
        {sportsPerson && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Sports Person of the Month</h2>
            <div className="flex items-center mb-4">
              <div className="relative w-48 h-48">
                <Image
                  src={`https:${sportsPerson.image.fields.file.url}`} // Use Contentful's image URL
                  alt={sportsPerson.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full border-4 border-blue-900"
                />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold">{sportsPerson.name}</h3>
                <p className="text-gray-700">{sportsPerson.description}</p>
              </div>
            </div>
          </section>
        )}

        {/* Upcoming Sports Events Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Upcoming Sports Events</h2>
          <table className="min-w-full bg-white border border-gray-300 mb-8">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b border-gray-300 text-left">Event</th>
                <th className="py-2 px-4 border-b border-gray-300 text-left">Date</th>
                <th className="py-2 px-4 border-b border-gray-300 text-left">Location</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b border-gray-300">{event.event}</td>
                  <td className="py-2 px-4 border-b border-gray-300">{new Date(event.date).toLocaleDateString()}</td>
                  <td className="py-2 px-4 border-b border-gray-300">{event.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Image Collage Section */}
        <section>
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Sports Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {highlights.map((highlight, index) => (
              <div key={index} className="relative group overflow-hidden">
                <Image
                  src={`https:${highlight.image.fields.file.url}`} // Use Contentful's image URL for each highlight
                  alt={highlight.title}
                  layout="responsive"
                  width={500}
                  height={300}
                  className="transition-transform duration-300 ease-in-out transform group-hover:scale-105 rounded-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {highlight.title}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default SportsAtAGlancePage;
