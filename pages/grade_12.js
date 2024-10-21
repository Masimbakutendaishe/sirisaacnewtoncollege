import Image from 'next/image';
import Link from 'next/link';

const Grade12Page = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Image for the Heading */}
      <div className="relative h-48 w-full bg-cover bg-center" style={{ backgroundImage: "url('/images/image.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative text-left text-white text-5xl font-bold z-10 py-16 px-8">GRADE 12 CURRICULUM</h1>
      </div>

      {/* Content Section */}
      <div className="p-8">
        
        {/* Curriculum Description Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Curriculum Overview</h2>
          <p className="text-gray-700 mb-4">
            The Grade 12 curriculum is designed to prepare students for their future, whether it be further education or entering the workforce. It includes a comprehensive study of core subjects as well as electives tailored to student interests.
          </p>
          
          {/* Styled Table */}
          <table className="min-w-full bg-white border border-gray-300 mb-8">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b border-gray-300 text-left">Subject</th>
                <th className="py-2 px-4 border-b border-gray-300 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b border-gray-300">Mathematics</td>
                <td className="py-2 px-4 border-b border-gray-300">Advanced mathematical concepts and problem-solving skills.</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b border-gray-300">Physical Sciences</td>
                <td className="py-2 px-4 border-b border-gray-300">Understanding of the physical world through chemistry and physics.</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b border-gray-300">Life Orientation</td>
                <td className="py-2 px-4 border-b border-gray-300">Personal development, social responsibility, and health education.</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b border-gray-300">English Language</td>
                <td className="py-2 px-4 border-b border-gray-300">Advanced language skills, literature, and critical thinking.</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Activities Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Activities</h2>
          <p className="text-gray-700 mb-4">
            Our Grade 12 program includes various extracurricular activities that enhance learning and foster community. Here are some of the activities:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Animated Image with Sliding Text */}
            <div className="relative group overflow-hidden rounded-lg">
              <Image
                src="/images/image2.jpg" // Replace with your image path
                alt="Grade 12 Activity"
                layout="responsive"
                width={300}
                height={200}
                className="transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                Science Fair
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg">
              <Image
                src="/images/culture.png" // Replace with your image path
                alt="Grade 12 Activity"
                layout="responsive"
                width={300}
                height={200}
                className="transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                Drama Production
              </div>
            </div>
            {/* Add more images as needed */}
          </div>
        </section>

        {/* Enrollment Information Section */}
        <section>
          <h2 className="text-3xl font-bold text-blue-900 mb-4">How to Enroll</h2>
          <p className="text-gray-700 mb-4">
            To enroll in the Grade 12 program, please complete the admissions form available on our website. Ensure that you have all necessary documentation ready for submission.
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

export default Grade12Page;
