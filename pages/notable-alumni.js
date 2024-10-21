import Image from 'next/image';

const NotableAlumniPage = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Image for the Heading */}
      <div className="relative h-48 w-full bg-cover bg-center" style={{ backgroundImage: "url('/images/image.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative text-left text-white text-5xl font-bold z-10 py-16">NOTABLE ALUMNI</h1>
      </div>

      {/* Alumni Sections */}
      <div className="max-w-4xl mx-auto p-8">
        <h2 className="text-2xl font-bold mb-6">Our Distinguished Graduates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Alumni 1 */}
          <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-48 w-full">
              <Image
                src="/images/image.jpg" // Replace with your image path
                alt="Alumnus 1"
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Alumnus Name 1</h3>
              <p className="text-gray-700">
                Brief description about the alumnus, highlighting their achievements and contributions.
              </p>
            </div>
          </div>

          {/* Alumni 2 */}
          <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-48 w-full">
              <Image
                src="/images/image2.jpg" // Replace with your image path
                alt="Alumnus 2"
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Alumnus Name 2</h3>
              <p className="text-gray-700">
                Brief description about the alumnus, highlighting their achievements and contributions.
              </p>
            </div>
          </div>

          {/* Alumni 3 */}
          <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-48 w-full">
              <Image
                src="/images/image.jpg" // Replace with your image path
                alt="Alumnus 3"
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Alumnus Name 3</h3>
              <p className="text-gray-700">
                Brief description about the alumnus, highlighting their achievements and contributions.
              </p>
            </div>
          </div>

          {/* Add more alumni sections as needed */}
        </div>
      </div>
    </div>
  );
};

export default NotableAlumniPage;
