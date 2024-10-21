import Image from 'next/image';
import Link from 'next/link';

const AlumniNetworkPage = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Image for the Heading */}
      <div className="relative h-48 w-full bg-cover bg-center" style={{ backgroundImage: "url('/images/alumni1.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative text-left text-white text-5xl font-bold z-10 py-16">ALUMNI NETWORK</h1>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto p-8 space-y-12">
        {/* Section 1: Join the Alumni Network */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/alumni2.jpg"
              alt="Join Alumni Network"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Join the Alumni Network</h2>
            <p className="text-gray-700">
              Become part of a thriving community of graduates who stay connected and support each other. By joining our alumni network, you can access exclusive benefits, events, and networking opportunities. Stay in touch with your peers and expand your professional connections.
            </p>
            <Link href="/join-alumni" legacyBehavior>
              <a className="mt-6 inline-block text-white bg-blue-900 py-2 px-4 rounded-lg shadow-lg transition duration-300 ease-in-out hover:bg-white hover:text-blue-900">
                Join Now
              </a>
            </Link>
          </div>
        </div>

        {/* Section 2: Notable Alumni */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Notable Alumni</h2>
            <p className="text-gray-700 mb-6">
              Our alumni have gone on to achieve incredible success in various fields, including business, academia, sports, and entertainment. Explore some of the amazing individuals who have made a difference globally.
            </p>
            <Link href="/notable-alumni" legacyBehavior>
              <a className="inline-block text-white bg-blue-900 py-2 px-4 rounded-lg shadow-lg transition duration-300 ease-in-out hover:bg-white hover:text-blue-900">
                View Notable Alumni
              </a>
            </Link>
          </div>
          <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/image.jpg"
              alt="Notable Alumni"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Section 3: Alumni Events */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Upcoming Alumni Events</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-48 w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/culture.png"
                alt="Alumni Event 1"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="relative h-48 w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/alumni1.jpg"
                alt="Alumni Event 2"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link href="/alumni-events" legacyBehavior>
              <a className="inline-block text-white bg-blue-900 py-2 px-4 rounded-lg shadow-lg transition duration-300 ease-in-out hover:bg-white hover:text-blue-900">
                View All Events
              </a>
            </Link>
          </div>
        </div>

        {/* Section 4: Alumni Support */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/image2.jpg"
              alt="Alumni Support"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Alumni Support and Services</h2>
            <p className="text-gray-700">
              Our alumni network offers a wide range of support services including career advice, mentorship programs, and more. Stay connected with the institution and get the help you need to excel in your career.
            </p>
            <Link href="/alumni-support" legacyBehavior>
              <a className="mt-6 inline-block text-white bg-blue-900 py-2 px-4 rounded-lg shadow-lg transition duration-300 ease-in-out hover:bg-white hover:text-blue-900">
                The Network
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniNetworkPage;
