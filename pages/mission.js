import Link from 'next/link';
import Image from 'next/image';

const MISSION_STATEMENT = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Image for the Heading */}
      <div className="relative h-48 w-full bg-cover bg-center" style={{ backgroundImage: "url('/images/image.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative text-left text-white text-5xl font-bold z-10 py-16">OUR MISSION STATEMENT</h1>
      </div>

      {/* Mission Statement Section */}
      <div className="bg-white p-8">
        <div className=" rounded-lg shadow-lg p-6" style={{ backgroundImage: "url('/images/image.jpg')" }}>
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-700">
            Our mission is to be an outstanding and peaceful institution which provides learning for life and addresses the changes in the educational system effectively. In attempting to realize the above, we pledge to equip ourselves continuously with skills required to meet the demands of the curriculum. We prepare students for a future of excellence, equipping them with the knowledge, skills, and character to succeed in life.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 p-8">
        {/* Respect Section */}
        <div className="relative  rounded-lg shadow-lg overflow-hidden" style={{ backgroundImage: "url('/images/image.jpg')" }}>
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Respect</h3>
            <p className="text-gray-700">
              We value and honor the diverse perspectives and identities of all individuals within our school community.
            </p>
          </div>
        </div>

        {/* Integrity Section */}
        <div className="relative  rounded-lg shadow-lg overflow-hidden" style={{ backgroundImage: "url('/images/image.jpg')" }}>
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Integrity</h3>
            <p className="text-gray-700">
              We promote honesty, transparency, and ethical conduct in all academic and social interactions.
            </p>
          </div>
        </div>

        {/* Responsibility Section */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden" style={{ backgroundImage: "url('/images/image.jpg')" }}>
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Responsibility</h3>
            <p className="text-gray-700">
              We encourage students to take ownership of their learning and the well-being of others.
            </p>
          </div>
        </div>
      </div>


    </div>
  );
};

export default MISSION_STATEMENT;
