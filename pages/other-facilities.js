import Image from 'next/image';

const OtherFacilities = () => {
  return (
    <div className="relative overflow-hidden bg-gray-100">
      {/* Background Image for the Heading */}
      <div className="relative h-48 w-full bg-cover bg-center" style={{ backgroundImage: "url('/images/image.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative text-left text-white text-5xl font-bold z-10 py-16 px-8">OTHER FACILITIES</h1>
      </div>

      {/* Facilities Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        {/* Sports Facilities Section */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
          <div className="relative h-48 w-full">
            <Image
              src="/images/image.jpg" // Replace with your image path
              alt="Sports Facilities"
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Sports Facilities</h2>
            <p className="text-gray-700 mb-4">
              Our sports facilities include a range of options for students to engage in physical activities:
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Football and rugby fields</li>
              <li>Basketball and tennis courts</li>
              <li>Swimming pool</li>
              <li>Gymnasium with modern equipment</li>
              <li>Track and field area for athletics</li>
            </ul>
          </div>
        </div>

        {/* Auditorium Section */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
          <div className="relative h-48 w-full">
            <Image
              src="/images/image2.jpg" // Replace with your image path
              alt="Auditorium"
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Auditorium</h2>
            <p className="text-gray-700 mb-4">
              Our auditorium is a state-of-the-art facility designed for various events:
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Seating for up to 300 people</li>
              <li>Advanced sound and lighting systems</li>
              <li>Ideal for presentations, performances, and conferences</li>
              <li>Equipped with audio-visual technology</li>
            </ul>
          </div>
        </div>

        {/* Library Section */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
          <div className="relative h-48 w-full">
            <Image
              src="/images/image.jpg" // Replace with your image path
              alt="Library"
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Library</h2>
            <p className="text-gray-700 mb-4">
              Our library offers a conducive environment for study and research:
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Extensive collection of books, journals, and digital resources</li>
              <li>Study areas with comfortable seating</li>
              <li>Access to computers and Wi-Fi</li>
              <li>Quiet rooms for focused study</li>
            </ul>
          </div>
        </div>

        {/* Science Labs Section */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
          <div className="relative h-48 w-full">
            <Image
              src="/images/image2.jpg" // Replace with your image path
              alt="Science Labs"
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Science Labs</h2>
            <p className="text-gray-700 mb-4">
              Our science labs provide students with hands-on learning experiences:
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Fully equipped biology, chemistry, and physics labs</li>
              <li>Modern equipment for experiments and research</li>
              <li>Experienced instructors to guide students</li>
              <li>Opportunities for practical learning and experimentation</li>
            </ul>
          </div>
        </div>

        {/* IT Lab Section */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
          <div className="relative h-48 w-full">
            <Image
              src="/images/image.jpg" // Replace with your image path
              alt="IT Lab"
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">IT Lab</h2>
            <p className="text-gray-700 mb-4">
              Our IT lab is designed to enhance students' technological skills:
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Access to the latest software and hardware</li>
              <li>Workstations equipped with high-speed internet</li>
              <li>Support for coding, design, and multimedia projects</li>
              <li>Workshops and training sessions on various IT topics</li>
            </ul>
          </div>
        </div>

        {/* Performing Arts Section */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
          <div className="relative h-48 w-full">
            <Image
              src="/images/image2.jpg" // Replace with your image path
              alt="Performing Arts"
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Performing Arts</h2>
            <p className="text-gray-700 mb-4">
              Our performing arts facility fosters creativity and expression:
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Theater space for drama and music performances</li>
              <li>Dance studios for various styles</li>
              <li>Music rooms for individual and group practice</li>
              <li>Regular performances and showcases for students</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherFacilities;
