import Link from 'next/link';
import Image from 'next/image';

const ADMISSIONS = () => {
  return (
    <div className="relative overflow-hidden">
      {/* The Background Image for the Heading */}
      <div className="relative h-48 w-full bg-cover bg-center" style={{ backgroundImage: "url('/images/image2.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative text-left text-white text-5xl font-bold z-10 py-16">ADMISSIONS</h1>
      </div>

      {/* The Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        {/* Application Process and Forms Section */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-48 w-full">
            <Image
              src="/images/classimage.jpg" // Replace with your image path
              alt="Application Process and Forms"
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
            <button className="absolute top-2 right-2 text-white text-sm py-1 px-2 rounded-lg shadow-lg" style={{ backgroundColor: "hsla(32, 91%, 18%, 0.945)" }}>
              Application Process
            </button>
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Application Process and Forms</h2>
            <p className="text-gray-700">
              Find all the necessary steps and forms required for admission...
            </p>
            <Link href="/application-forms" legacyBehavior>
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

        {/* Grade R Section */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-48 w-full">
            <Image
              src="/images/image2.jpg" // Replace with your image path
              alt="Grade R"
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
            <button className="absolute top-2 right-2 text-white text-sm py-1 px-2 rounded-lg shadow-lg" style={{ backgroundColor: "hsla(32, 91%, 18%, 0.945)" }}>
              Grade R
            </button>
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Grade R</h2>
            <p className="text-gray-700">
              Discover the curriculum and admission requirements for Grade R...
            </p>
            <Link href="/grade_r" legacyBehavior>
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

        {/* Grade 12 Section */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-48 w-full">
            <Image
              src="/images/sportsimage.jpg" // Replace with your image path
              alt="Grade 12"
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
            <button className="absolute top-2 right-2 text-white text-sm py-1 px-2 rounded-lg shadow-lg" style={{ backgroundColor: "hsla(32, 91%, 18%, 0.945)" }}>
              Grade 12
            </button>
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Grade 12</h2>
            <p className="text-gray-700">
              Learn about the admission process and requirements for Grade 12...
            </p>
            <Link href="/grade_12" legacyBehavior>
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

        {/* Current School Fee Structure Section */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-48 w-full">
            <Image
              src="/images/image3.jpg" // Replace with your image path
              alt="Current School Fee Structure"
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
            <button className="absolute top-2 right-2 text-white text-sm py-1 px-2 rounded-lg shadow-lg" style={{ backgroundColor: "hsla(32, 91%, 18%, 0.945)" }}>
              School Fees
            </button>
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Current School Fee Structure</h2>
            <p className="text-gray-700">
              View the latest fee structure for all grades.
            </p>
            <Link href="/fees" legacyBehavior>
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

        {/* Payment Details Section */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-48 w-full">
            <Image
              src="/images/image.jpg" // Replace with your image path
              alt="Payment Details"
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
            <button className="absolute top-2 right-2 text-white text-sm py-1 px-2 rounded-lg shadow-lg" style={{ backgroundColor: "hsla(32, 91%, 18%, 0.945)" }}>
              Payment Details
            </button>
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Payment Details</h2>
            <p className="text-gray-700">
              Understand the payment methods and deadlines.
            </p>
            <Link href="/payment_details" legacyBehavior>
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

export default ADMISSIONS;
