import { createClient } from 'contentful';
import Image from 'next/image';

// Fetch data from Contentful
export async function getStaticProps() {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  });

  const res = await client.getEntries({ content_type: 'examTimetable' });
  return {
    props: {
      timetable: res.items,
    },
  };
}

const ExaminationsPage = ({ timetable }) => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Image for the Heading */}
      <div className="relative h-48 w-full bg-cover bg-center" style={{ backgroundImage: "url('/images/image.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative text-left text-white text-5xl font-bold z-10 py-16 px-8">EXAMINATIONS</h1>
      </div>

      {/* Content Section */}
      <div className="p-8">

        {/* Exam Structure Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Exam Structure</h2>
          <p className="text-gray-700">
            At Sir Isaac Newton School, our examination structure is designed to assess student understanding comprehensively.
            We conduct mid-term assessments, final exams, and practical evaluations to ensure a well-rounded evaluation process.
          </p>
          <div className="relative h-48 w-full mt-4">
            <Image
              src="/images/image2.jpg"
              alt="Exam Structure"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </section>

                {/* Preparation Tips Section */}
                <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Preparation Tips</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Create a study schedule to manage your time effectively.</li>
            <li>Practice past papers to familiarize yourself with the exam format.</li>
            <li>Join study groups for collaborative learning.</li>
            <li>Stay healthy with proper nutrition and exercise.</li>
          </ul>
          <div className="relative h-48 w-full mt-4">
            <Image
              src="/images/culture.png" // Replace with your relevant image path
              alt="Preparation Tips"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </section>

        {/* Exam Timetable Section (fetched from Contentful) */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Exam Timetable</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="border border-gray-300 p-4">Exam</th>
                  <th className="border border-gray-300 p-4">Date</th>
                  <th className="border border-gray-300 p-4">Time</th>
                </tr>
              </thead>
              <tbody>
                {timetable.map((entry, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                    <td className="border border-gray-300 p-4">{entry.fields.examName}</td>
                    <td className="border border-gray-300 p-4">{entry.fields.examDate}</td>
                    <td className="border border-gray-300 p-4">{entry.fields.examTime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

      </div>
    </div>
  );
};

export default ExaminationsPage;
