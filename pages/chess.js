import Image from 'next/image';

const ChessClub = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Image for the Heading */}
      <div className="relative h-48 w-full bg-cover bg-center" style={{ backgroundImage: "url('/images/chess.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative text-left text-white text-5xl font-bold z-10 py-16">CHESS CLUB</h1>
      </div>

      {/* Club Overview Section */}
      <div className="p-8">
        <h2 className="text-3xl font-bold mb-4">Welcome to the Chess Club</h2>
        <p className="text-gray-700 mb-6">
          Join our Chess Club, where strategy meets fun! Whether you're a beginner or an experienced player, our club is the perfect place to enhance your skills and enjoy friendly competition.
        </p>

        {/* Club Activities */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-2">Regular Meetings</h3>
          <Image
            src="/images/chess.jpg" // Replace with your image path
            alt="Chess Meeting"
            width={600}
            height={400}
            className="rounded-lg mb-4"
          />
          <p className="text-gray-700">
            We hold regular meetings every week where members gather to play games, learn strategies, and discuss famous chess matches.
          </p>
        </div>

        {/* Tournaments */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-2">Tournaments</h3>
          <Image
            src="/images/image.jpg" // Replace with your image path
            alt="Chess Tournament"
            width={600}
            height={400}
            className="rounded-lg mb-4"
          />
          <p className="text-gray-700">
            Participate in our monthly tournaments to test your skills against other members. Prizes and recognition await the winners!
          </p>
        </div>

        {/* Workshops and Coaching */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-2">Workshops and Coaching</h3>
          <Image
            src="/images/image.jpg" // Replace with your image path
            alt="Chess Workshop"
            width={600}
            height={400}
            className="rounded-lg mb-4"
          />
          <p className="text-gray-700">
            Our experienced coaches offer workshops for all skill levels. Learn new tactics, openings, and endgame strategies to improve your game.
          </p>
        </div>

        {/* Community and Social Events */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-2">Community and Social Events</h3>
          <Image
            src="/images/image2.jpg" // Replace with your image path
            alt="Chess Social Event"
            width={600}
            height={400}
            className="rounded-lg mb-4"
          />
          <p className="text-gray-700">
            Join us for social events and gatherings to meet fellow chess enthusiasts, share experiences, and foster a sense of community.
          </p>
        </div>

        {/* Conclusion */}
        <h2 className="text-3xl font-bold mb-4">Become a Member!</h2>
        <p className="text-gray-700">
          Whether you want to learn or compete, our Chess Club welcomes you. Join us today and be part of our exciting chess community!
        </p>
      </div>
    </div>
  );
};

export default ChessClub;
