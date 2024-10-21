import Image from 'next/image';

const SportsFacilities = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Image for the Heading */}
      <div className="relative h-48 w-full bg-cover bg-center" style={{ backgroundImage: "url('/images/sportsimage.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative text-left text-white text-5xl font-bold z-10 py-16">SPORTS FACILITIES</h1>
      </div>

      {/* Facilities Section */}
      <div className="p-8">
        <h2 className="text-3xl font-bold mb-4">Our Facilities</h2>
        <p className="text-gray-700 mb-6">
          We offer state-of-the-art sports facilities to cater to various athletic needs. Our amenities are designed to provide an exceptional experience for all our athletes and sports enthusiasts.
        </p>

        {/* Basketball Court */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-2">Basketball Court</h3>
          <Image
            src="/images/sportsimage.jpg" // Replace with your image path
            alt="Basketball Court"
            width={600}
            height={400}
            className="rounded-lg mb-4"
          />
          <p className="text-gray-700">
            Our basketball court is equipped with professional-grade flooring and lighting, ensuring an optimal environment for practice and competitive play.
          </p>
        </div>

        {/* Swimming Pool */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-2">Swimming Pool</h3>
          <Image
            src="/images/image.jpg" // Replace with your image path
            alt="Swimming Pool"
            width={600}
            height={400}
            className="rounded-lg mb-4"
          />
          <p className="text-gray-700">
            Our Olympic-sized swimming pool is perfect for both training and leisure. With clear water and ample space, it provides a great place for swimmers of all levels.
          </p>
        </div>

        {/* Gym Facilities */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-2">Gym Facilities</h3>
          <Image
            src="/images/image.jpg" // Replace with your image path
            alt="Gym Facilities"
            width={600}
            height={400}
            className="rounded-lg mb-4"
          />
          <p className="text-gray-700">
            Our gym is fully equipped with modern fitness machines, free weights, and designated areas for cardio and strength training. Personal trainers are available for guidance.
          </p>
        </div>

        {/* Tennis Courts */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-2">Tennis Courts</h3>
          <Image
            src="/images/image.jpg" // Replace with your image path
            alt="Tennis Court"
            width={600}
            height={400}
            className="rounded-lg mb-4"
          />
          <p className="text-gray-700">
            Our well-maintained tennis courts provide a perfect setting for matches and practice sessions. Whether you're a beginner or a seasoned player, our facilities cater to all.
          </p>
        </div>

        {/* Conclusion */}
        <h2 className="text-3xl font-bold mb-4">Join Us Today!</h2>
        <p className="text-gray-700">
          Explore our sports facilities and be part of a vibrant community dedicated to fitness and well-being. We look forward to seeing you!
        </p>
      </div>
    </div>
  );
};

export default SportsFacilities;
