import Image from 'next/image';

const TEAMS = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Image for the Heading */}
      <div className="relative h-48 w-full bg-cover bg-center" style={{ backgroundImage: "url('/images/image.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative text-left text-white text-5xl font-bold z-10 py-16">OUR TEAMS</h1>
      </div>

      {/* Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        {/* Netball Section */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
          <div className="relative h-48 w-full">
            <Image
              src="/images/image2.jpg" // Replace with your image path
              alt="Netball Team"
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
            <button className="absolute top-2 right-2 text-white text-sm py-1 px-2 rounded-lg shadow-lg" style={{ backgroundColor: "hsla(32, 91%, 18%, 0.945)" }}>
              Netball
            </button>
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Netball</h2>
            <p className="text-gray-700">
              Join our dynamic Netball team and develop your skills in teamwork and strategy...
            </p>
          </div>
        </div>

        {/* Volleyball Section */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
          <div className="relative h-48 w-full">
            <Image
              src="/images/image2.jpg" // Replace with your image path
              alt="Volleyball Team"
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
            <button className="absolute top-2 right-2 text-white text-sm py-1 px-2 rounded-lg shadow-lg" style={{ backgroundColor: "hsla(32, 91%, 18%, 0.945)" }}>
              Volleyball
            </button>
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Volleyball</h2>
            <p className="text-gray-700">
              Be part of our energetic Volleyball team and enhance your skills on the court...
            </p>
          </div>
        </div>

        {/* Cricket Section */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
          <div className="relative h-48 w-full">
            <Image
              src="/images/image2.jpg" // Replace with your image path
              alt="Cricket Team"
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
            <button className="absolute top-2 right-2 text-white text-sm py-1 px-2 rounded-lg shadow-lg" style={{ backgroundColor: "hsla(32, 91%, 18%, 0.945)" }}>
              Cricket
            </button>
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Cricket</h2>
            <p className="text-gray-700">
              Join our Cricket team to master your batting and bowling techniques...
            </p>
          </div>
        </div>

        {/* Hockey Section */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
          <div className="relative h-48 w-full">
            <Image
              src="/images/image2.jpg" // Replace with your image path
              alt="Hockey Team"
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
            <button className="absolute top-2 right-2 text-white text-sm py-1 px-2 rounded-lg shadow-lg" style={{ backgroundColor: "hsla(32, 91%, 18%, 0.945)" }}>
              Hockey
            </button>
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Hockey</h2>
            <p className="text-gray-700">
              Experience the thrill of Hockey and improve your skills with our team...
            </p>
          </div>
        </div>

        {/* Add additional team sections similarly */}
      </div>
    </div>
  );
};

export default TEAMS;
