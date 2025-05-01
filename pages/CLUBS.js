import Link from 'next/link';
import Image from 'next/image';

const CLUBS = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Image for the Heading */}
      <div className="relative h-48 w-full bg-cover bg-center" style={{ backgroundImage: "url('/images/chess.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative text-left text-white text-5xl font-bold z-10 py-16">CLUBS</h1>
      </div>

      {/* Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">

        {/* Clubs At a Glance Section */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-48 w-full">
            <Image
              src="/images/image3.jpg" // Replace with your image path
              alt="the Clubs At a Glance"
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
            <button className="absolute top-2 right-2 text-white text-sm py-1 px-2 rounded-lg shadow-lg" style={{ backgroundColor: "hsla(32, 91%, 18%, 0.945)" }}>
              Clubs Overview
            </button>
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Clubs At a Glance</h2>
            <p className="text-gray-700">
              Discover the variety of clubs available at our college...
            </p>
            <Link href="/clubs_glance" legacyBehavior>
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
                Read Some More
              </a>
            </Link>
          </div>
        </div>

        {/* Clubs Offered At The College Section */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-48 w-full">
            <Image
              src="/images/chess.jpg" // Replace with your image path
              alt="Clubs Offered"
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
            <button className="absolute top-2 right-2 text-white text-sm py-1 px-2 rounded-lg shadow-lg" style={{ backgroundColor: "hsla(32, 91%, 18%, 0.945)" }}>
              Clubs Offered
            </button>
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Clubs Offered At The College</h2>
            <p className="text-gray-700">
              Learn about the diverse clubs and their activities available to students...
            </p>
            <Link href="/clubs_offered" legacyBehavior>
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

export default CLUBS;
