import Image from 'next/image';

const LearningSupportPage = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Image for the Heading */}
      <div className="relative h-48 w-full bg-cover bg-center" style={{ backgroundImage: "url('/images/image.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative text-left text-white text-5xl font-bold z-10 py-16 px-8">LEARNING SUPPORT</h1>
      </div>

      {/* Content Section */}
      <div className="p-8">

        {/* Tips for Learning Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Tips for Effective Learning</h2>
          <p className="text-gray-700 mb-4">
            Here are some essential tips to enhance your learning experience:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Set specific goals for each study session.</li>
            <li>Use active learning techniques like summarizing and teaching others.</li>
            <li>Stay organized with a planner or digital tools.</li>
            <li>Take regular breaks to improve focus and retention.</li>
          </ul>
          <div className="relative h-48 w-full mt-4">
            <Image
              src="/images/image2.jpg" // Replace with your relevant image path
              alt="Learning Tips"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </section>

        {/* Resources for Students Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Resources Available</h2>
          <p className="text-gray-700 mb-4">
            Students have access to various resources to support their learning:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>
              <strong>Tutoring Services:</strong> One-on-one assistance in various subjects.
            </li>
            <li>
              <strong>Online Libraries:</strong> Access to academic journals and e-books.
            </li>
            <li>
              <strong>Study Groups:</strong> Collaborative learning opportunities with peers.
            </li>
            <li>
              <strong>Workshops:</strong> Skill development sessions on topics like time management and study techniques.
            </li>
          </ul>
          <div className="relative h-48 w-full mt-4">
            <Image
              src="/images/culture.png" // Replace with your relevant image path
              alt="Learning Resources"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </section>

      </div>
    </div>
  );
};

export default LearningSupportPage;
