import Image from 'next/image';
import { useEffect, useState } from 'react';
import { createClient } from 'contentful'; // Make sure to install contentful

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

const ClubsOfferedPage = () => {
  const [clubs, setClubs] = useState([]);
  const [activities, setActivities] = useState([]); // New state for activities

  useEffect(() => {
    const fetchClubs = async () => {
      try {
        const response = await client.getEntries({ content_type: 'club2' });
        const fetchedClubs = response.items.map(item => ({
          name: item.fields.name,
          meetingDay: item.fields.meetingDay,
          meetingTime: item.fields.meetingTime,
        }));
        setClubs(fetchedClubs);
      } catch (error) {
        console.error('Error fetching clubs:', error);
      }
    };

    const fetchActivities = async () => {
      try {
        const response = await client.getEntries({ content_type: 'activity' }); // Assuming your content type for activities is 'activity'
        const fetchedActivities = response.items.map(item => ({
          image: item.fields.image.fields.file.url, // Adjust this based on your Contentful model
          hoverText: item.fields.hoverText, // Assuming you have a hover text field
        }));
        setActivities(fetchedActivities);
      } catch (error) {
        console.error('Error fetching activities:', error);
      }
    };

    fetchClubs();
    fetchActivities(); // Fetch activities when the component mounts
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Background Image for the Heading */}
      <div className="relative h-48 w-full bg-cover bg-center" style={{ backgroundImage: "url('/images/image.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative text-left text-white text-5xl font-bold z-10 py-16 px-8">CLUBS OFFERED</h1>
      </div>

      {/* Content Section */}
      <div className="p-8">

        {/* Clubs At a Glance Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
          {[
            { title: "Science Club", image: "/images/image3.jpg" },
            { title: "Art Club", image: "/images/image2.jpg" },
            { title: "Drama Club", image: "/images/image.jpg" },
            { title: "Debate Club", image: "/images/chess.jpg" },
            { title: "Music Club", image: "/images/image3.jpg" },
            { title: "Chess Club", image: "/images/image2.jpg" },
            { title: "Photography Club", image: "/images/image.jpg" },
            { title: "Coding Club", image: "/images/image3.jpg" },
            { title: "Environmental Club", image: "/images/image2.jpg" },
          ].map((club, index) => (
            <div key={index} className="relative bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src={club.image}
                  alt={club.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
                <button className="absolute top-2 right-2 text-white text-sm py-1 px-2 rounded-lg shadow-lg" style={{ backgroundColor: "hsla(32, 91%, 18%, 0.945)" }}>
                  {club.title}
                </button>
              </div>
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{club.title}</h2>
                <p className="text-gray-700">
                  Join us in the {club.title} to explore new horizons and engage in exciting activities!
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Meeting Days Table Section */}
        <section>
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Meeting Days of Clubs</h2>
          <table className="min-w-full bg-white border border-gray-300 rounded-lg">
            <thead>
              <tr className="bg-blue-900 text-white">
                <th className="py-2 px-4 border-b">Club Name</th>
                <th className="py-2 px-4 border-b">Meeting Day</th>
                <th className="py-2 px-4 border-b">Time</th>
              </tr>
            </thead>
            <tbody>
              {clubs.length > 0 ? (
                clubs.map((club, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="text-center py-2 px-4 border-b">{club.name}</td>
                    <td className="text-center py-2 px-4 border-b">{club.meetingDay}</td>
                    <td className="text-center py-2 px-4 border-b">{club.meetingTime}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="py-2 px-4 text-center">Loading clubs...</td>
                </tr>
              )}
            </tbody>
          </table>
        </section>

        {/* Image Collage Section */}
        <section className="mt-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Club Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {activities.length > 0 ? (
              activities.map((activity, index) => (
                <div key={index} className="relative group overflow-hidden">
                  <Image
                    src={`https:${activity.image}`} // Ensure to prepend 'https:' for the image URL
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
              ))
            ) : (
              <div className="text-center py-4">Loading activities...</div>
            )}
          </div>
        </section>

      </div>
    </div>
  );
};

export default ClubsOfferedPage;
