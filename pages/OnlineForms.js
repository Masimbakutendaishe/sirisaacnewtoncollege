import Link from 'next/link';
import Image from 'next/image';

const OnlineForms = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Image for the Heading */}
      <div className="relative h-48 w-full bg-cover bg-center" style={{ backgroundImage: "url('/images/image.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative text-left text-white text-5xl font-bold z-10 py-16">ONLINE FORMS</h1>
      </div>

      {/* Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">

        {/* Admission Form Section */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-48 w-full">
            <Image
              src="/images/image.jpg" // Replace with your image path
              alt="The Admission Form"
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
            <button className="absolute top-2 right-2 text-white text-sm py-1 px-2 rounded-lg shadow-lg" style={{ backgroundColor: "hsla(32, 91%, 18%, 0.945)" }}>
              Admission Form
            </button>
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Admission Form</h2>
            <p className="text-gray-700">
              Fill out the admission form to enroll your child in our school.
            </p>
            <Link href="/admissionsform" legacyBehavior>
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
                Fill Form
              </a>
            </Link>
          </div>
        </div>

        {/* Transfer Form Section */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-48 w-full">
            <Image
              src="/images/classimage.jpg" // Replace with your image path
              alt="Transfer Form"
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
            <button className="absolute top-2 right-2 text-white text-sm py-1 px-2 rounded-lg shadow-lg" style={{ backgroundColor: "hsla(32, 91%, 18%, 0.945)" }}>
              Transfer Form
            </button>
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Transfer Form</h2>
            <p className="text-gray-700">
              Complete the transfer form if you wish to move your child from another school.
            </p>
            <Link href="/transferform" legacyBehavior>
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
                Fill Form
              </a>
            </Link>
          </div>
        </div>

        {/* Medical Form Section */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-48 w-full">
            <Image
              src="/images/med.jpg" // Replace with your image path
              alt="Medical Form"
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
            <button className="absolute top-2 right-2 text-white text-sm py-1 px-2 rounded-lg shadow-lg" style={{ backgroundColor: "hsla(32, 91%, 18%, 0.945)" }}>
              Medical Form
            </button>
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Medical Form</h2>
            <p className="text-gray-700">
              Fill out the medical form to provide necessary health information for your child.
            </p>
            <Link href="/medicalform" legacyBehavior>
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
                Fill Form
              </a>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default OnlineForms;
