import Image from 'next/image';

const EducationalModel = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Image for the Heading */}
      <div className="relative h-48 w-full bg-cover bg-center" style={{ backgroundImage: "url('/images/image.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative text-left text-white text-5xl font-bold z-10 py-16 px-8">OUR EDUCATIONAL MODEL</h1>
      </div>

      {/* Content Section */}
      <div className="p-8 space-y-12">
        {/* Overview Section */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-blue-900 border-b-2 border-blue-900 inline-block">OVERVIEW</h2>
          <p className="text-gray-700 mb-4">
            Our educational model is designed to foster a holistic learning environment, 
            emphasizing the development of critical thinking, creativity, and collaboration among students.
          </p>
          <Image
            src="/images/image2.jpg" // Replace with your relevant image path
            alt="Educational Model Overview"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Core Values Section */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-blue-900 border-b-2 border-blue-900 inline-block">CORE VALUES</h2>
          <p className="text-gray-700 mb-4">
            Our model is built on core values that guide our teaching practices and student interactions:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Respect for Diversity</li>
            <li>Commitment to Excellence</li>
            <li>Integrity and Accountability</li>
            <li>Continuous Improvement</li>
          </ul>
          <Image
            src="/images/culture.jpg" // Replace with your relevant image path
            alt="Core Values"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Learning Environment Section */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-blue-900 border-b-2 border-blue-900 inline-block">LEARNING ENVIRONMENT</h2>
          <p className="text-gray-700 mb-4">
            We strive to create an engaging and inclusive learning environment where students feel safe to express their ideas and learn from one another.
          </p>
          <Image
            src="/images/image.jpg" // Replace with your relevant image path
            alt="Learning Environment"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Educational Techniques Section */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-blue-900 border-b-2 border-blue-900 inline-block">EDUCATIONAL TECHNIQUES</h2>
          <p className="text-gray-700 mb-4">
            Our curriculum employs a variety of innovative teaching methods, including:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Project-Based Learning</li>
            <li>Collaborative Group Work</li>
            <li>Inquiry-Based Learning</li>
            <li>Technology Integration</li>
          </ul>
          <Image
            src="/images/image2.jpg" // Replace with your relevant image path
            alt="Educational Techniques"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Conclusion Section */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-blue-900 border-b-2 border-blue-900 inline-block">CONCLUSION</h2>
          <p className="text-gray-700 mb-4">
            Our educational model is a reflection of our commitment to excellence in teaching and learning. 
            We believe that by nurturing the potential of every student, we can contribute to a brighter future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EducationalModel;
