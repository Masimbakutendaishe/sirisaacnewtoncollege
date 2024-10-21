import Image from 'next/image';

const Library = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Image for the Heading */}
      <div className="relative h-48 w-full bg-cover bg-center" style={{ backgroundImage: "url('/images/image.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative text-left text-white text-5xl font-bold z-10 py-16">OUR LIBRARY</h1>
      </div>

      {/* Library Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        {/* Types of Books Section */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-48 w-full">
            <Image
              src="/images/image.jpg" // Replace with your image path
              alt="Types of Books"
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Types of Books</h2>
            <p className="text-gray-700 mb-4">
              Our library offers a diverse collection of books, including:
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Fiction: Novels, short stories, and poetry.</li>
              <li>Non-Fiction: Biographies, memoirs, and self-help books.</li>
              <li>Reference: Encyclopedias, dictionaries, and atlases.</li>
              <li>Academic: Textbooks and scholarly articles.</li>
              <li>Children’s Books: Picture books, early readers, and young adult novels.</li>
            </ul>
          </div>
        </div>

        {/* Library Services Section */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-48 w-full">
            <Image
              src="/images/image2.jpg" // Replace with your image path
              alt="Library Services"
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Library Services</h2>
            <p className="text-gray-700 mb-4">
              We provide a variety of services to enhance your learning experience:
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Borrowing and returning books.</li>
              <li>Access to digital resources and e-books.</li>
              <li>Study spaces and quiet reading areas.</li>
              <li>Research assistance from our librarians.</li>
              <li>Workshops on effective research and study skills.</li>
            </ul>
          </div>
        </div>

        {/* Library Events Section */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-48 w-full">
            <Image
              src="/images/culture.png" // Replace with your image path
              alt="Library Events"
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Library Events</h2>
            <p className="text-gray-700 mb-4">
              Join us for various events throughout the year to engage with literature and fellow readers:
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Book fairs and author readings.</li>
              <li>Workshops on writing and storytelling.</li>
              <li>Reading challenges and competitions.</li>
              <li>Community outreach and literacy programs.</li>
              <li>Film screenings related to literary works.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Images for Events */}
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">Upcoming Library Events</h2>
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

export default Library;
