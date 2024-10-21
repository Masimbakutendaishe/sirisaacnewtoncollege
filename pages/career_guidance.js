import Image from 'next/image';

const CareerGuidancePage = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Image for the Heading */}
      <div className="relative h-48 w-full bg-cover bg-center" style={{ backgroundImage: "url('/images/image.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative text-left text-white text-5xl font-bold z-10 py-16 px-8">CAREER GUIDANCE AND COUNSELING</h1>
      </div>

      {/* Content Section */}
      <div className="p-8">

        {/* Introduction Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">How We Assist Students</h2>
          <p className="text-gray-700 mb-4">
            Our career guidance and counseling services are designed to help students navigate their educational and career paths. 
            We provide personalized support to ensure that each student can make informed decisions about their future.
          </p>
          <p className="text-gray-700 mb-4">
            Students can access individual counseling sessions, participate in workshops, and explore various resources tailored to their interests and career goals.
          </p>
          <div className="relative h-48 w-full mt-4">
            <Image
              src="/images/culture.png" // Replace with your relevant image path
              alt="Career Guidance"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </section>

        {/* Teams Responsible Section */}
        <section>
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Meet Our Career Guidance Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/images/image.jpg" // Replace with team member image path
                  alt="Team Member 1"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Mr. John Doe</h3>
                <p className="text-gray-700">Career Counselor</p>
                <p className="text-gray-700">Specializes in career assessments and planning.</p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/images/image2.jpg" // Replace with team member image path
                  alt="Team Member 2"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Ms. Jane Smith</h3>
                <p className="text-gray-700">Educational Advisor</p>
                <p className="text-gray-700">Provides guidance on educational pathways.</p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/images/culture.png" // Replace with team member image path
                  alt="Team Member 3"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Dr. Emily Davis</h3>
                <p className="text-gray-700">Mental Health Counselor</p>
                <p className="text-gray-700">Offers counseling and support for personal issues.</p>
              </div>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
};

export default CareerGuidancePage;
