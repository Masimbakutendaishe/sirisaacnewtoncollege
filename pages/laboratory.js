import Image from 'next/image';

const Laboratory = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Image for the Heading */}
      <div className="relative h-48 w-full bg-cover bg-center" style={{ backgroundImage: "url('/images/image.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative text-left text-white text-5xl font-bold z-10 py-16">OUR LABORATORY</h1>
      </div>

      {/* Laboratory Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        {/* Laboratory Facilities Section */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-48 w-full">
            <Image
              src="/images/image.jpg" // Replace with your image path
              alt="Laboratory Facilities"
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Laboratory Facilities</h2>
            <p className="text-gray-700 mb-4">
              Our laboratory is equipped with state-of-the-art facilities, including:
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Biology Lab: Equipped for dissections and biological studies.</li>
              <li>Chemistry Lab: State-of-the-art equipment for chemical experiments.</li>
              <li>Physics Lab: Resources for conducting various physics experiments.</li>
              <li>Computer Lab: Up-to-date computers and software for simulations.</li>
              <li>Multimedia Lab: Facilities for video production and editing.</li>
            </ul>
          </div>
        </div>

        {/* Laboratory Services Section */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-48 w-full">
            <Image
              src="/images/image2.jpg" // Replace with your image path
              alt="Laboratory Services"
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Laboratory Services</h2>
            <p className="text-gray-700 mb-4">
              We offer a range of services to support student learning and research:
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Access to lab equipment and tools for experiments.</li>
              <li>Workshops on lab safety and protocols.</li>
              <li>Assistance from qualified laboratory technicians.</li>
              <li>Guided experiments for students.</li>
              <li>Support for science fair projects and research.</li>
            </ul>
          </div>
        </div>

        {/* Laboratory Events Section */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-48 w-full">
            <Image
              src="/images/culture.png" // Replace with your image path
              alt="Laboratory Events"
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Laboratory Events</h2>
            <p className="text-gray-700 mb-4">
              Participate in our exciting laboratory events and activities:
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Science fairs showcasing student projects.</li>
              <li>Workshops on various scientific topics.</li>
              <li>Guest lectures by industry professionals.</li>
              <li>Hands-on experiments during open days.</li>
              <li>Collaborative projects with other schools.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Images for Events */}
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">Upcoming Laboratory Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Image
            src="/images/image.jpg" // Replace with your image path
            alt="Event 1"
            width={500}
            height={300}
            className="object-cover rounded-lg"
          />
          <Image
            src="/images/image.jpg" // Replace with your image path
            alt="Event 2"
            width={500}
            height={300}
            className="object-cover rounded-lg"
          />
          <Image
            src="/images/image.jpg" // Replace with your image path
            alt="Event 3"
            width={500}
            height={300}
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Laboratory;
