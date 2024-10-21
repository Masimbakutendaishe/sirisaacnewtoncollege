import Image from 'next/image';
import { createClient } from 'contentful';
import { useEffect, useState } from 'react';

// Initialize Contentful Client
const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

const ClubsAtAGlancePage = () => {
  const [clubs, setClubs] = useState([]);
  const [clubActivities, setClubActivities] = useState([]);

  useEffect(() => {
    // Fetch the list of clubs
    const fetchClubs = async () => {
      const response = await client.getEntries({
        content_type: 'clubContent', // Make sure 'club' matches your Content Model ID for clubs
      });
      setClubs(response.items.map((item) => item.fields));
    };

    // Fetch the club activities (images and hover text)
    const fetchClubActivities = async () => {
      const response = await client.getEntries({
        content_type: 'clubActivity', // Make sure 'clubActivity' matches your Content Model ID for club activities
      });
      setClubActivities(response.items.map((item) => item.fields));
    };

    fetchClubs();
    fetchClubActivities();
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Background Image for the Heading */}
      <div className="relative h-48 w-full bg-cover bg-center" style={{ backgroundImage: "url('/images/image.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative text-left text-white text-5xl font-bold z-10 py-16 px-8">CLUBS AT A GLANCE</h1>
      </div>

      {/* Content Section */}
      <div className="p-8">

        {/* Clubs Overview Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Clubs Overview</h2>
          <p className="text-gray-700 mb-4">
            Our school offers a variety of clubs catering to diverse interests. Each club promotes teamwork, leadership, and personal growth.
          </p>
        </section>

        {/* Clubs Table Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Clubs Offered</h2>
          <table className="min-w-full bg-white border border-gray-300 mb-8">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b border-gray-300 text-left">Club Name</th>
                <th className="py-2 px-4 border-b border-gray-300 text-left">Description</th>
                <th className="py-2 px-4 border-b border-gray-300 text-left">Meeting Day</th>
              </tr>
            </thead>
            <tbody>
              {clubs.map((club, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b border-gray-300">{club.name}</td>
                  <td className="py-2 px-4 border-b border-gray-300">{club.description}</td>
                  <td className="py-2 px-4 border-b border-gray-300">{club.meetingDay}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Image Collage Section */}
        <section>
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Club Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {clubActivities.map((activity, index) => (
              <div key={index} className="relative group overflow-hidden">
                <Image
                  src={`https:${activity.image.fields.file.url}`} // Use Contentful's image URL
                  alt={`Club Activity ${index + 1}`}
                  layout="responsive"
                  width={500}
                  height={300}
                  className="transition-transform duration-300 ease-in-out transform group-hover:scale-105 rounded-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {activity.hoverText}
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default ClubsAtAGlancePage;
