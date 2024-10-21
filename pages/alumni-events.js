import Image from 'next/image';

const AlumniEventsPage = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Image for the Heading */}
      <div className="relative h-48 w-full bg-cover bg-center" style={{ backgroundImage: "url('/images/image.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative text-left text-white text-5xl font-bold z-10 py-16">ALUMNI EVENTS</h1>
      </div>

      {/* Events Section */}
      <div className="max-w-4xl mx-auto p-8">
        <h2 className="text-2xl font-bold mb-6">Upcoming Alumni Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Event 1 */}
          <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-48 w-full">
              <Image
                src="/images/image.jpg" // Replace with your image path
                alt="Alumni Event 1"
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Alumni Reunion 2024</h3>
              <p className="text-gray-700">
                Join us for the annual alumni reunion. Connect with fellow graduates and enjoy an evening of memories and networking.
              </p>
              <p className="text-gray-600 mt-2">Date: April 15, 2024</p>
              <p className="text-gray-600">Location: Main Hall, Sir Isaac Newton College</p>
            </div>
          </div>

          {/* Event 2 */}
          <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-48 w-full">
              <Image
                src="/images/image2.jpg" // Replace with your image path
                alt="Alumni Event 2"
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Career Development Workshop</h3>
              <p className="text-gray-700">
                Enhance your skills with our career development workshop tailored for alumni. Expert speakers will guide you through the latest trends and opportunities.
              </p>
              <p className="text-gray-600 mt-2">Date: May 20, 2024</p>
              <p className="text-gray-600">Location: Room 101, Sir Isaac Newton College</p>
            </div>
          </div>

          {/* Event 3 */}
          <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-48 w-full">
              <Image
                src="/images/image.jpg" // Replace with your image path
                alt="Alumni Event 3"
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Annual Sports Day</h3>
              <p className="text-gray-700">
                Come cheer for your favorite teams during our Annual Sports Day! Participate in various activities and reconnect with old friends.
              </p>
              <p className="text-gray-600 mt-2">Date: March 10, 2024</p>
              <p className="text-gray-600">Location: College Sports Field</p>
            </div>
          </div>

          {/* Add more events similarly */}
        </div>
      </div>
    </div>
  );
};

export default AlumniEventsPage;
