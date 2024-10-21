import Image from 'next/image';
import Link from 'next/link';

const JoinAlumniPage = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Image for the Heading */}
      <div className="relative h-48 w-full bg-cover bg-center" style={{ backgroundImage: "url('/images/image.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative text-left text-white text-5xl font-bold z-10 py-16">JOIN OUR ALUMNI</h1>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto p-8">
        <h2 className="text-2xl font-bold mb-6">Become a Part of Our Alumni Community</h2>
        <p className="text-gray-700 mb-6">
          Join our alumni network to stay connected with fellow graduates and receive updates on events, 
          news, and opportunities. We value your contribution and would love to hear from you!
        </p>

        {/* Form Section */}
        <form className="bg-white rounded-lg shadow-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
              />
            </div>
            <div>
              <label htmlFor="graduationYear" className="block text-sm font-medium text-gray-700">Graduation Year</label>
              <input
                type="text"
                id="graduationYear"
                name="graduationYear"
                required
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 w-full bg-hsla(32, 91%, 18%, 0.945) text-white py-2 px-4 rounded-lg transition duration-300 ease-in-out hover:bg-white hover:text-hsla(32, 91%, 18%, 0.945)"
          >
            Submit
          </button>
        </form>

        {/* Images Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <div className="relative h-48 w-full">
            <Image
              src="/images/image.jpg" // Replace with your image path
              alt="Alumni Image 1"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="relative h-48 w-full">
            <Image
              src="/images/image2.jpg" // Replace with your image path
              alt="Alumni Image 2"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinAlumniPage;
