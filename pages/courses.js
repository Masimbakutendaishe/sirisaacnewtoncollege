import Link from 'next/link';
import Image from 'next/image';

const COURSES = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Image for the Heading */}
      <div className="relative h-48 w-full bg-cover bg-center" style={{ backgroundImage: "url('/images/image.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative text-left text-white text-5xl font-bold z-10 py-16">OUR COURSES</h1>
      </div>

      {/* Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        {/* Biology Section */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
          <div className="relative h-48 w-full">
            <Image
              src="/images/image.jpg" // Replace with your image path
              alt="Biology"
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
            <button className="absolute top-2 right-2 text-white text-sm py-1 px-2 rounded-lg shadow-lg" style={{ backgroundColor: "hsla(32, 91%, 18%, 0.945)" }}>
              Biology
            </button>
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Biology</h2>
            <p className="text-gray-700">
              Explore the wonders of life, from cellular processes to ecosystems.
            </p>
          </div>
        </div>

        {/* Physics Section */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
          <div className="relative h-48 w-full">
            <Image
              src="/images/image.jpg" // Replace with your image path
              alt="Physics"
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
            <button className="absolute top-2 right-2 text-white text-sm py-1 px-2 rounded-lg shadow-lg" style={{ backgroundColor: "hsla(32, 91%, 18%, 0.945)" }}>
              Physics
            </button>
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Physics</h2>
            <p className="text-gray-700">
              Understand the principles governing the physical universe.
            </p>
          </div>
        </div>

        {/* Computer Science Section */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
          <div className="relative h-48 w-full">
            <Image
              src="/images/image.jpg" // Replace with your image path
              alt="Computer Science"
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
            <button className="absolute top-2 right-2 text-white text-sm py-1 px-2 rounded-lg shadow-lg" style={{ backgroundColor: "hsla(32, 91%, 18%, 0.945)" }}>
              Computer Science
            </button>
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Computer Science</h2>
            <p className="text-gray-700">
              Dive into programming, algorithms, and the fundamentals of computing.
            </p>
          </div>
        </div>

        {/* Maths Section */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
          <div className="relative h-48 w-full">
            <Image
              src="/images/image.jpg" // Replace with your image path
              alt="Maths"
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
            <button className="absolute top-2 right-2 text-white text-sm py-1 px-2 rounded-lg shadow-lg" style={{ backgroundColor: "hsla(32, 91%, 18%, 0.945)" }}>
              Maths
            </button>
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Maths</h2>
            <p className="text-gray-700">
              Master mathematical concepts and problem-solving techniques.
            </p>
          </div>
        </div>

        {/* Robotics Section */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
          <div className="relative h-48 w-full">
            <Image
              src="/images/image.jpg" // Replace with your image path
              alt="Robotics"
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
            <button className="absolute top-2 right-2 text-white text-sm py-1 px-2 rounded-lg shadow-lg" style={{ backgroundColor: "hsla(32, 91%, 18%, 0.945)" }}>
              Robotics
            </button>
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Robotics</h2>
            <p className="text-gray-700">
              Learn about the design and programming of robots to automate tasks.
            </p>
          </div>
        </div>

        {/* English Section */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
          <div className="relative h-48 w-full">
            <Image
              src="/images/image.jpg" // Replace with your image path
              alt="English"
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
            <button className="absolute top-2 right-2 text-white text-sm py-1 px-2 rounded-lg shadow-lg" style={{ backgroundColor: "hsla(32, 91%, 18%, 0.945)" }}>
              English
            </button>
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">English</h2>
            <p className="text-gray-700">
              Enhance your language skills, literature appreciation, and communication.
            </p>
          </div>
        </div>

        {/* History Section */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
          <div className="relative h-48 w-full">
            <Image
              src="/images/image.jpg" // Replace with your image path
              alt="History"
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
            <button className="absolute top-2 right-2 text-white text-sm py-1 px-2 rounded-lg shadow-lg" style={{ backgroundColor: "hsla(32, 91%, 18%, 0.945)" }}>
              History
            </button>
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">History</h2>
            <p className="text-gray-700">
              Discover significant events that shaped our world and culture.
            </p>
          </div>
        </div>

        {/* Art Section */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
          <div className="relative h-48 w-full">
            <Image
              src="/images/image.jpg" // Replace with your image path
              alt="Art"
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
            <button className="absolute top-2 right-2 text-white text-sm py-1 px-2 rounded-lg shadow-lg" style={{ backgroundColor: "hsla(32, 91%, 18%, 0.945)" }}>
              Art
            </button>
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Art</h2>
            <p className="text-gray-700">
              Explore creativity through various mediums and artistic expression.
            </p>
          </div>
        </div>

        {/* Add additional course sections similarly */}
      </div>
    </div>
  );
};

export default COURSES;
