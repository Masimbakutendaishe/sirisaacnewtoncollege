import Image from 'next/image';
import Link from 'next/link';

const CampusLife = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Image for the Heading */}
      <div className="relative h-48 w-full bg-cover bg-center" style={{ backgroundImage: "url('/images/alumni1.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative text-left text-white text-5xl font-bold z-10 py-16">CAMPUS LIFE</h1>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto p-8 space-y-12">
        {/* Section 1: Join the Alumni Network */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/image2.jpg"
              alt="Campus Life"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">The Lively College Campus!</h2>
            <p className="text-gray-700">
              On campus, students may engage in a number of exciting activities in between lessons.
            </p>
            <Link href="/join-alumni" legacyBehavior>
              <a className="mt-6 inline-block text-white bg-blue-900 py-2 px-4 rounded-lg shadow-lg transition duration-300 ease-in-out hover:bg-white hover:text-blue-900">
                Campus Location
              </a>
            </Link>
          </div>
        </div>

        {/* Section 2: Notable Alumni */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">The Park</h2>
            <p className="text-gray-700 mb-6">
              The Park is a place for students to engage in colorful yet constructive activities together!
            </p>
            <Link href="/notable-alumni" legacyBehavior>
              <a className="inline-block text-white bg-blue-900 py-2 px-4 rounded-lg shadow-lg transition duration-300 ease-in-out hover:bg-white hover:text-blue-900">
                The Park At a Glance
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
          <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Trips</h2>
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
                src="/images/image3.jpg"
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
                View Gallery
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
            <h2 className="text-3xl font-bold text-blue-900 mb-4">College Support and Services</h2>
            <p className="text-gray-700">
              Our college offers a wide range of support services including career advice, mentorship programs, and more.
            </p>
            <Link href="/alumni-support" legacyBehavior>
              <a className="mt-6 inline-block text-white bg-blue-900 py-2 px-4 rounded-lg shadow-lg transition duration-300 ease-in-out hover:bg-white hover:text-blue-900">
                Learn More
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampusLife;
