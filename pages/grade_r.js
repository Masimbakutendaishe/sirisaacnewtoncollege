import Image from 'next/image';
import Link from 'next/link';

const GradeRPage = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Image for the Heading */}
      <div className="relative h-48 w-full bg-cover bg-center" style={{ backgroundImage: "url('/images/image.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative text-left text-white text-5xl font-bold z-10 py-16 px-8">GRADE R CURRICULUM</h1>
      </div>

      {/* Content Section */}
      <div className="p-8">
        
        {/* Curriculum Description Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Curriculum Overview</h2>
          <p className="text-gray-700 mb-4">
            The Grade R curriculum is designed to provide a comprehensive foundation for young learners. It focuses on developing essential skills through engaging activities in various areas:
          </p>
          
          {/* Styled Table */}
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b border-gray-300 text-left">Area of Learning</th>
                <th className="py-2 px-4 border-b border-gray-300 text-left">Activities</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b border-gray-300">Literacy</td>
                <td className="py-2 px-4 border-b border-gray-300">Storytelling, Phonics Games</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b border-gray-300">Numeracy</td>
                <td className="py-2 px-4 border-b border-gray-300">Counting Games, Shape Recognition</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b border-gray-300">Creative Arts</td>
                <td className="py-2 px-4 border-b border-gray-300">Painting, Craft Projects</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b border-gray-300">Physical Development</td>
                <td className="py-2 px-4 border-b border-gray-300">Outdoor Play, Movement Activities</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Activities Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Activities</h2>
          <p className="text-gray-700 mb-4">
            Our Grade R program incorporates a variety of activities that foster creativity, collaboration, and critical thinking. Here are some highlights:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Animated Image Collage */}
            <div className="relative group overflow-hidden rounded-lg">
              <Image
                src="/images/image2.jpg" // Replace with your image path
                alt="Grade R Activity"
                layout="responsive"
                width={300}
                height={200}
                className="transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Fun with Numbers
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg">
              <Image
                src="/images/culture.png" // Replace with your image path
                alt="Grade R Activity"
                layout="responsive"
                width={300}
                height={200}
                className="transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Creative Arts
              </div>
            </div>
            {/* Add more images as needed */}
          </div>
        </section>

        {/* Enrollment Information Section */}
        <section>
          <h2 className="text-3xl font-bold text-blue-900 mb-4">How to Enroll</h2>
          <p className="text-gray-700 mb-4">
            To enroll your child in the Grade R program, please fill out the admissions form. Ensure that you have the necessary documents ready for submission.
          </p>
          <Link href="/admissions" legacyBehavior>
            <a className="inline-block bg-blue-900 text-white py-2 px-4 rounded-lg transition duration-300 hover:bg-blue-700">
              Fill Out Admissions Form
            </a>
          </Link>
        </section>

      </div>
    </div>
  );
};

export default GradeRPage;
