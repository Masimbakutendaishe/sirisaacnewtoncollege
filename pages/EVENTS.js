import Link from 'next/link';
import Image from 'next/image';

const EVENTS = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Image for the Heading */}
      <div className="relative h-48 w-full bg-cover bg-center" style={{ backgroundImage: "url('/images/culture.png')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative text-left text-white text-5xl font-bold z-10 py-16">EVENTS</h1>
      </div>

      {/* Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">

        {/* Events At a Glance Section */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-48 w-full">
            <Image
              src="/images/culture.png" // Replace with your image path
              alt="Events At a Glance"
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
            <button className="absolute top-2 right-2 text-white text-sm py-1 px-2 rounded-lg shadow-lg" style={{ backgroundColor: "hsla(32, 91%, 18%, 0.945)" }}>
              Events Overview
            </button>
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Events At a Glance</h2>
            <p className="text-gray-700">
              Get an overview of all of the exciting events happening at our college...
            </p>
            <Link href="/calendar" legacyBehavior>
              <a
                className="mt-4 inline-block text-white py-1 px-4 rounded-lg shadow-lg transition duration-300 ease-in-out"
                style={{ backgroundColor: "hsla(32, 91%, 18%, 0.945)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'white';
                  e.currentTarget.style.color = "hsla(32, 91%, 18%, 0.945)";
                  e.currentTarget.style.border = "1px solid hsla(32, 91%, 18%, 0.945)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "hsla(32, 91%, 18%, 0.945)";
                  e.currentTarget.style.color = "white";
                  e.currentTarget.style.border = "none";
                }}
              >
                Read More
              </a>
            </Link>
          </div>
        </div>

        {/* Upcoming Events Section */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-48 w-full">
            <Image
              src="/images/image.jpg" // Replace with your image path
              alt="Upcoming Events"
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
            <button className="absolute top-2 right-2 text-white text-sm py-1 px-2 rounded-lg shadow-lg" style={{ backgroundColor: "hsla(32, 91%, 18%, 0.945)" }}>
              Upcoming Events
            </button>
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Upcoming Events</h2>
            <p className="text-gray-700">
              Stay updated with the latest upcoming events and activities...
            </p>
            <Link href="/events2" legacyBehavior>
              <a
                className="mt-4 inline-block text-white py-1 px-4 rounded-lg shadow-lg transition duration-300 ease-in-out"
                style={{ backgroundColor: "hsla(32, 91%, 18%, 0.945)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'white';
                  e.currentTarget.style.color = "hsla(32, 91%, 18%, 0.945)";
                  e.currentTarget.style.border = "1px solid hsla(32, 91%, 18%, 0.945)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "hsla(32, 91%, 18%, 0.945)";
                  e.currentTarget.style.color = "white";
                  e.currentTarget.style.border = "none";
                }}
              >
                Read More
              </a>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default EVENTS;
