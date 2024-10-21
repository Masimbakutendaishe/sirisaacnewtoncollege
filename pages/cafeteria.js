import Image from 'next/image';

const Cafeteria = () => {
  return (
    <div className="relative overflow-hidden bg-gray-100">
      {/* Background Image for the Heading */}
      <div className="relative h-48 w-full bg-cover bg-center" style={{ backgroundImage: "url('/images/image.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative text-left text-white text-5xl font-bold z-10 py-16 px-8">OUR CAFETERIA</h1>
      </div>

      {/* Cafeteria Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        {/* Cafeteria Menu Section */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
          <div className="relative h-48 w-full">
            <Image
              src="/images/image.jpg" // Replace with your image path
              alt="Cafeteria Menu"
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Cafeteria Menu</h2>
            <p className="text-gray-700 mb-4">
              Enjoy a variety of meals and snacks in our cafeteria, including:
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Healthy salads and wraps</li>
              <li>Daily specials and comfort food</li>
              <li>Freshly baked pastries and bread</li>
              <li>Assorted beverages including smoothies and juices</li>
              <li>Vegetarian and vegan options available</li>
            </ul>
          </div>
        </div>

        {/* Cafeteria Services Section */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
          <div className="relative h-48 w-full">
            <Image
              src="/images/image2.jpg" // Replace with your image path
              alt="Cafeteria Services"
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Cafeteria Services</h2>
            <p className="text-gray-700 mb-4">
              We strive to provide excellent service to enhance your dining experience:
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Efficient service with minimal wait times</li>
              <li>Daily menu updates and promotions</li>
              <li>Meal pre-ordering options for busy schedules</li>
              <li>Catering services for special events</li>
              <li>Friendly staff ready to assist</li>
            </ul>
          </div>
        </div>

        {/* Cafeteria Events Section */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
          <div className="relative h-48 w-full">
            <Image
              src="/images/image.jpg" // Replace with your image path
              alt="Cafeteria Events"
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Cafeteria Events</h2>
            <p className="text-gray-700 mb-4">
              Join us for various events that celebrate food and community:
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Themed food days (e.g., Taco Tuesday, Pizza Friday)</li>
              <li>Cooking workshops and demonstrations</li>
              <li>Nutrition awareness programs</li>
              <li>Seasonal food festivals</li>
              <li>Collaborations with local farmers and vendors</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Images for Events */}
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">Upcoming Cafeteria Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Image
            src="/images/image.jpg" // Replace with your image path
            alt="Event 1"
            width={500}
            height={300}
            className="object-cover rounded-lg shadow-lg"
          />
          <Image
            src="/images/image2.jpg" // Replace with your image path
            alt="Event 2"
            width={500}
            height={300}
            className="object-cover rounded-lg shadow-lg"
          />
          <Image
            src="/images/image.jpg" // Replace with your image path
            alt="Event 3"
            width={500}
            height={300}
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Cafeteria;
