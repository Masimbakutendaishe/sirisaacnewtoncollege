import Link from 'next/link';
import Image from 'next/image';

const STUDENT_LIFE = () => {
  return (
    <div className="bg-blue-100 relative overflow-hidden">
      {/* Background Image for the Heading */}
      <div className="relative h-48 w-full bg-cover bg-center" style={{ backgroundImage: "url('/images/image2.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative text-left text-white text-5xl font-bold z-10 py-16">STUDENT LIFE</h1>
      </div>

      {/* Student Life Overview Section */}
      <div className="bg-blue-100 p-8" >
        <h2 className="text-2xl font-bold mb-4">Life at Sir Isaac Newton College</h2>
        <p className="text-gray-700">
          At Sir Isaac Newton College, student life is vibrant and enriching. We believe in fostering a holistic educational experience that goes beyond academics. Our students engage in various extracurricular activities, sports, and community service projects that help them grow personally and socially.
        </p>
      </div>

      {/* Extracurricular Activities Section */}
      <div className="bg-gray-100 p-8 rounded-lg shadow-lg" style={{ backgroundImage: "url('/images/image.jpg')" }}>
        <h2 className="text-2xl font-bold mb-4">Extracurricular Activities</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Sports: Soccer, Netball, Basketball, and more.</li>
          <li>Clubs: Debate Club, Chess Club, and Arts & Crafts Club.</li>
          <li>Community Service: Various outreach programs and volunteer opportunities.</li>
        </ul>
      </div>

      {/* Student Support Section */}
      <div className="bg-white p-8 mt-6 rounded-lg shadow-lg" style={{ backgroundImage: "url('/images/image.jpg')" }}>
        <h2 className="text-2xl font-bold mb-4">Student Support</h2>
        <p className="text-gray-700">
          We prioritize the well-being of our students. Our dedicated staff provides guidance and support in both academic and personal matters, ensuring a nurturing environment for everyone.
        </p>
      </div>

      {/* Important Dates Section */}
      <div className="bg-gray-100 p-8 mt-6 rounded-lg shadow-lg" style={{ backgroundImage: "url('/images/image.jpg')" }}>
        <h2 className="text-2xl font-bold mb-4">Important Dates</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Prize Giving Ceremony: 1 October 2024</li>
          <li>Grade 7 & R Graduation Ceremony: 7 December 2024</li>
        </ul>
      </div>
    </div>
  );
};

export default STUDENT_LIFE;
