import Image from 'next/image';

const GlimpseOfCollege = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Image for the Heading */}
      <div className="relative h-48 w-full bg-cover bg-center" style={{ backgroundImage: "url('/images/image.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative text-left text-white text-5xl font-bold z-10 py-16 px-8">GLIMPSE OF THE COLLEGE</h1>
      </div>

      {/* Content Section */}
      <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Library Section */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-48 w-full">
            <Image
              src="/images/image3.jpg" // Replace with your relevant image path
              alt="Library"
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Library</h2>
            <p className="text-gray-700">
              Our library is a hub of knowledge, equipped with a vast collection of books, journals, and digital resources for all students.
            </p>
          </div>
        </div>

        {/* Campus Grounds Section */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-48 w-full">
            <Image
              src="/images/culture.jpg" // Replace with your relevant image path
              alt="Campus Grounds"
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Campus Grounds</h2>
            <p className="text-gray-700">
              Enjoy our beautifully landscaped campus grounds, perfect for relaxation, study, and socializing with friends.
            </p>
          </div>
        </div>

        {/* Classroom Section */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-48 w-full">
            <Image
              src="/images/image.jpg" // Replace with your relevant image path
              alt="Classroom"
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Classroom</h2>
            <p className="text-gray-700">
              Our modern classrooms are equipped with the latest technology to facilitate an engaging and interactive learning experience.
            </p>
          </div>
        </div>

        {/* Sports Facility Section */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-48 w-full">
            <Image
              src="/images/image2.jpg" // Replace with your relevant image path
              alt="Sports Facility"
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Sports Facility</h2>
            <p className="text-gray-700">
              Our state-of-the-art sports facility provides students with opportunities to engage in various sports and physical activities.
            </p>
          </div>
        </div>

        {/* Cafeteria Section */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-48 w-full">
            <Image
              src="/images/culture.png" // Replace with your relevant image path
              alt="Cafeteria"
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Cafeteria</h2>
            <p className="text-gray-700">
              Our cafeteria offers a variety of healthy and delicious meal options, providing a great space for students to gather and relax.
            </p>
          </div>
        </div>

        {/* Auditorium Section */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-48 w-full">
            <Image
              src="/images/image.jpg" // Replace with your relevant image path
              alt="Auditorium"
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Auditorium</h2>
            <p className="text-gray-700">
              Our auditorium hosts various events, lectures, and performances, providing an excellent venue for students to showcase their talents.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default GlimpseOfCollege;
