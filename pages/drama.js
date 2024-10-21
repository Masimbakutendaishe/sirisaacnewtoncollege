import Image from 'next/image';

const DramaClub = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Image for the Heading */}
      <div className="relative h-48 w-full bg-cover bg-center" style={{ backgroundImage: "url('/images/culture.png')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative text-left text-white text-5xl font-bold z-10 py-16">DRAMA CLUB</h1>
      </div>

      {/* Club Overview Section */}
      <div className="p-8">
        <h2 className="text-3xl font-bold mb-4">Welcome to the Drama Club</h2>
        <p className="text-gray-700 mb-6">
          Dive into the world of theater with our Drama Club! Whether you’re an aspiring actor, director, or stagehand, our club provides a platform for creativity and expression.
        </p>

        {/* Rehearsals */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-2">Regular Rehearsals</h3>
          <Image
            src="/images/image.jpg" // Replace with your image path
            alt="Drama Rehearsal"
            width={600}
            height={400}
            className="rounded-lg mb-4"
          />
          <p className="text-gray-700">
            We hold rehearsals twice a week, where members can practice their lines, develop characters, and collaborate on upcoming performances.
          </p>
        </div>

        {/* Performances */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-2">Upcoming Performances</h3>
          <Image
            src="/images/image2.jpg" // Replace with your image path
            alt="Drama Performance"
            width={600}
            height={400}
            className="rounded-lg mb-4"
          />
          <p className="text-gray-700">
            Join us for our annual performances! Whether on stage or behind the scenes, experience the excitement of live theater with us.
          </p>
        </div>

        {/* Workshops and Skill Development */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-2">Workshops and Skill Development</h3>
          <Image
            src="/images/culture.jpg" // Replace with your image path
            alt="Drama Workshop"
            width={600}
            height={400}
            className="rounded-lg mb-4"
          />
          <p className="text-gray-700">
            Our workshops cover various aspects of drama, including acting techniques, scriptwriting, and stage production. Enhance your skills and gain confidence on stage!
          </p>
        </div>

        {/* Social Events and Community Building */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-2">Social Events and Community Building</h3>
          <Image
            src="/images/image.jpg" // Replace with your image path
            alt="Drama Social Event"
            width={600}
            height={400}
            className="rounded-lg mb-4"
          />
          <p className="text-gray-700">
            Join us for fun social events and gatherings! Connect with fellow drama enthusiasts, share experiences, and build lasting friendships.
          </p>
        </div>

        {/* Conclusion */}
        <h2 className="text-3xl font-bold mb-4">Become a Member!</h2>
        <p className="text-gray-700">
          No matter your experience level, our Drama Club welcomes you! Join us today and unleash your inner performer!
        </p>
      </div>
    </div>
  );
};

export default DramaClub;
