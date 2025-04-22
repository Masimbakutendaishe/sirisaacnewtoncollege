import Link from 'next/link';
import Image from 'next/image';

const ABOUTUS = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Image for the Heading */}
      <div className="relative h-48 w-full bg-cover bg-center" style={{ backgroundImage: "url('/images/image.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative text-left text-white text-5xl font-bold z-10 py-16">ABOUT OUR SCHOOL</h1>
      </div>

      {/* Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        {/* Our Facilities Section */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-48 w-full">
            <Image
              src="/images/image.jpg" // one can replace with your image path
              alt="Our Facilities"
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
            {/* Button on the top-right corner of the image */}
            <button className="absolute top-2 right-2 text-white text-sm py-1 px-2 rounded-lg shadow-lg" style={{ backgroundColor: "hsla(32, 91%, 18%, 0.945)" }}>
              Our Facilities
            </button>
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Our Facilities</h2>
            <p className="text-gray-700">
              Explore our state-of-the-art facilities designed to enhance learning experiences...
            </p>
            {/* Read More Link */}
            <Link href="/facilities" legacyBehavior>
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

        {/* Our Educational Model Section */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-48 w-full">
            <Image
              src="/images/classimage.jpg" // Replace with your image path
              alt="Our Educational Model"
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
            <button className="absolute top-2 right-2 text-white text-sm py-1 px-2 rounded-lg shadow-lg" style={{ backgroundColor: "hsla(32, 91%, 18%, 0.945)" }}>
              Educational Model
            </button>
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Our Educational Model</h2>
            <p className="text-gray-700">
              Discover the unique educational framework that fosters excellence and innovation...
            </p>
            <Link href="/educational_model" legacyBehavior>
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

        {/* Glimpse of the College Section */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-48 w-full">
            <Image
              src="/images/image2.jpg" // Replace with your image path
              alt="Glimpse of the College"
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
            <button className="absolute top-2 right-2 text-white text-sm py-1 px-2 rounded-lg shadow-lg" style={{ backgroundColor: "hsla(32, 91%, 18%, 0.945)" }}>
              Glimpse of the College
            </button>
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Glimpse of the College</h2>
            <p className="text-gray-700">
              Take a tour of our college campus and witness the vibrant student life...
            </p>
            <Link href="/glimpse" legacyBehavior>
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

        {/* Our History and Culture Section */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-48 w-full">
            <Image
              src="/images/image3.jpg" // Replace with your image path
              alt="Our History and Culture"
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
            <button className="absolute top-2 right-2 text-white text-sm py-1 px-2 rounded-lg shadow-lg" style={{ backgroundColor: "hsla(32, 91%, 18%, 0.945)" }}>
              Our History and Culture
            </button>
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Our History and Culture</h2>
            <p className="text-gray-700">
              Dive into the rich history and cultural heritage that define our institution...
            </p>
            <Link href="/history" legacyBehavior>
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

        {/* Our Mission Statement Section */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-48 w-full">
            <Image
              src="/images/image.jpg" // Replace with your image path
              alt="Our Mission Statement"
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
            <button className="absolute top-2 right-2 text-white text-sm py-1 px-2 rounded-lg shadow-lg" style={{ backgroundColor: "hsla(32, 91%, 18%, 0.945)" }}>
              Mission Statement
            </button>
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Our Mission Statement</h2>
            <p className="text-gray-700">
              Learn about our vision and goals for providing quality education...
            </p>
            <Link href="/mission" legacyBehavior>
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

        {/* Add additional sections similarly */}
      </div>
    </div>
  );
};

export default ABOUTUS;
